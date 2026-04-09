import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', role: 'model', text: '你好！我是 CMF 助手。有什么关于材料、颜色或工艺的问题吗？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // We need to keep track of the chat session
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    // Initialize chat session
    chatSessionRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: '你是一个专业的 CMF (Color, Material, Finish) 设计助手。你精通各种材料（塑料、金属、木材、纸张等）、表面处理工艺和颜色搭配。请用专业、简洁、友好的语气回答用户关于 CMF 设计的问题。',
      }
    });
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: '你是一个专业的 CMF (Color, Material, Finish) 设计助手。你精通各种材料（塑料、金属、木材、纸张等）、表面处理工艺和颜色搭配。请用专业、简洁、友好的语气回答用户关于 CMF 设计的问题。',
          }
        });
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMessage.text });
      
      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text || '抱歉，我无法回答这个问题。'
      };

      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: '抱歉，发生了一些错误，请稍后再试。'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-ink text-paper rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] max-h-[80vh] bg-surface rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-line">
          {/* Header */}
          <div className="bg-ink text-paper px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-medium">CMF AI 助手</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-paper/70 hover:text-paper transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-paper">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-ink text-paper' : 'bg-surface border border-line text-ink'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div 
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-ink text-paper rounded-tr-sm' 
                      : 'bg-surface border border-line text-ink rounded-tl-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-surface border border-line text-ink flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-surface border border-line rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-ink/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-ink/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-ink/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-surface border-t border-line">
            <div className="relative flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="询问关于 CMF 的问题..."
                className="w-full bg-paper border border-line rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-ink/30 resize-none max-h-32 min-h-[44px]"
                rows={1}
                style={{ height: 'auto' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 bottom-2 w-8 h-8 flex items-center justify-center text-ink/40 hover:text-ink disabled:opacity-50 disabled:hover:text-ink/40 transition-colors"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

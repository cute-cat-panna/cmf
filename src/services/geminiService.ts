import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getChatResponse(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "你是一个专业的 CMF（色彩、材料、工艺）助手。你的任务是回答关于材料科学、色彩理论和制造工艺的问题。请用专业且友好的语气回答，并尽可能提供实用的建议。",
      }
    });

    return response.text || "抱歉，我暂时无法回答这个问题。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "发生了一些错误，请稍后再试。";
  }
}

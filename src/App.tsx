import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  X, 
  Palette, 
  Layers, 
  Cpu, 
  Info, 
  ExternalLink,
  Leaf,
  DollarSign,
  Activity
} from 'lucide-react';
import { cmfData, glossary } from './data';
import { CMFItem, CMFType } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CMFType | 'All' | 'Glossary'>('All');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<CMFItem | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareList, setCompareList] = useState<CMFItem[]>([]);
  const [isCompareMode, setIsCompareMode] = useState(false);

  const materialCategories = ['全部', '塑料', '金属', '橡胶', '木材和纸', '玻璃陶瓷', '纺织面料'];

  const propertyLabels: Record<string, string> = {
    density: '密度',
    hardness: '硬度',
    tensileStrength: '抗拉强度',
    yieldStrength: '屈服强度',
    elongation: '断后延伸率',
    flexuralModulus: '弯曲模量',
    impactStrength: '冲击强度',
    heatDistortionTemp: '热变形温度',
    thermalExpansion: '热膨胀系数',
    thermalConductivity: '导热系数',
    meltingPoint: '熔点',
    corrosionResistance: '核心耐蚀特性',
    adhesion: '镀层/涂层百格附着力',
    pencilHardness: '耐刮擦铅笔硬度',
    glossRange: '量产可实现光泽度范围',
    colorDeltaE: '量产批次色差管控标准',
    contactAngle: '抗指纹疏水接触角',
    modulus300: '300%定伸应力',
    operatingTemp: '工作温度范围',
    elasticModulus: '弹性模量',
    abrasionResistance: '耐磨性',
    glassTransitionTemp: '玻璃化转变温度',
    compressiveStrength: '抗压强度',
    tensileModulus: '拉伸模量',
    flexuralStrength: '弯曲强度'
  };

  const filteredData = useMemo(() => {
    if (activeCategory === 'Glossary') return [];
    return cmfData.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.type === activeCategory;
      const matchesSubCategory = activeCategory !== 'Material' || activeSubCategory === '全部' || item.category === activeSubCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.nameEn?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }, [activeCategory, activeSubCategory, searchQuery]);

  const toggleCompare = (item: CMFItem) => {
    if (compareList.find(i => i.id === item.id)) {
      setCompareList(compareList.filter(i => i.id !== item.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, item]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-paper font-bold">C</div>
          <span className="font-display font-bold text-xl tracking-tighter">CMF MANUAL</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {(['All', 'Material', 'Color', 'Finish', 'Glossary'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory('全部');
              }}
              className={`text-sm font-medium transition-colors hover:text-ink ${activeCategory === cat ? 'text-ink' : 'text-ink/40'}`}
            >
              {cat === 'All' ? '全部' : cat === 'Material' ? '材料' : cat === 'Color' ? '色彩' : cat === 'Finish' ? '工艺' : '词典'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCompareMode(!isCompareMode)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${isCompareMode ? 'bg-ink text-paper border-ink' : 'border-line text-ink/60 hover:border-ink'}`}
          >
            {isCompareMode ? '退出对比' : '开启对比'}
          </button>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
            <input 
              type="text" 
              placeholder="搜索 CMF..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-ink/5 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-ink/20 w-48 transition-all"
            />
          </div>
        </div>
      </nav>

      {/* Hero */}
      {activeCategory !== 'Glossary' && (
        <header className="relative px-6 py-20 md:py-32 border-b border-line overflow-hidden bg-paper">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-full object-cover opacity-15 grayscale" 
              alt="Background"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/40 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-ink/40 mb-4 block">Industrial Design Resource</span>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
                CMF <br /> 
                <span className="text-ink/20 italic">设计师手册</span>
              </h1>
              <p className="max-w-xl text-lg text-ink/60 leading-relaxed">
                一个专业、易用的 CMF（色彩、材料、工艺）手册展示网站，专为工业设计、产品设计从业者打造。
              </p>
            </motion.div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 max-w-7xl mx-auto w-full">
        {activeCategory === 'Material' && (
          <div className="flex flex-wrap gap-4 mb-12 border-b border-line pb-6">
            {materialCategories.map(subCat => (
              <button
                key={subCat}
                onClick={() => setActiveSubCategory(subCat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSubCategory === subCat ? 'bg-ink text-paper' : 'bg-ink/5 text-ink/60 hover:bg-ink/10'}`}
              >
                {subCat}
              </button>
            ))}
          </div>
        )}

        {activeCategory === 'Glossary' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {glossary.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-line flex flex-col sm:flex-row gap-6"
              >
                {item.image && (
                  <div className="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden bg-ink/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-display font-bold">{item.name}</h3>
                    {item.nameEn && <span className="text-xs font-mono text-ink/30">{item.nameEn}</span>}
                  </div>
                  <p className="text-ink/60 leading-relaxed text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-ink/5 rounded-md text-ink/40">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => isCompareMode ? toggleCompare(item) : setSelectedItem(item)}
                  className={`group cursor-pointer relative ${isCompareMode && compareList.find(i => i.id === item.id) ? 'ring-2 ring-ink ring-offset-4 rounded-2xl' : ''}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-ink/5 rounded-2xl mb-4 relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {item.type}
                      </span>
                    </div>
                    {isCompareMode && (
                      <div className={`absolute inset-0 flex items-center justify-center transition-all ${compareList.find(i => i.id === item.id) ? 'bg-ink/20' : 'bg-transparent group-hover:bg-ink/5'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${compareList.find(i => i.id === item.id) ? 'bg-ink border-ink text-paper' : 'border-white text-white'}`}>
                          {compareList.findIndex(i => i.id === item.id) !== -1 ? compareList.findIndex(i => i.id === item.id) + 1 : '+'}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-display font-bold group-hover:underline underline-offset-4">{item.name}</h3>
                      <p className="text-sm text-ink/40 font-mono">{item.nameEn}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-ink/20 group-hover:text-ink transition-colors" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-ink/40 border border-line px-2 py-0.5 rounded italic">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Comparison Drawer */}
      <AnimatePresence>
        {isCompareMode && compareList.length > 0 && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-ink text-paper p-6 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
                {compareList.map(item => (
                  <div key={item.id} className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl shrink-0">
                    <img src={item.image} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm font-bold">{item.name}</span>
                    <button onClick={() => toggleCompare(item)} className="hover:text-red-400"><X className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setCompareList([])}
                  className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100"
                >
                  清空
                </button>
                <button 
                  disabled={compareList.length < 2}
                  onClick={() => setIsCompareModalOpen(true)}
                  className="bg-paper text-ink px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest disabled:opacity-30"
                >
                  开始对比 ({compareList.length})
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-line text-center">
        <p className="text-xs text-ink/30 font-mono">© 2026 CMF MANUAL. BUILT FOR INDUSTRIAL DESIGNERS.</p>
      </footer>

      {/* Comparison Modal */}
      <AnimatePresence>
        {isCompareModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <h2 className="text-2xl font-display font-bold text-paper">CMF 对比视图</h2>
              <button 
                onClick={() => setIsCompareModalOpen(false)}
                className="w-10 h-10 bg-white/10 text-paper rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-x-auto">
              <div className="min-w-max h-full flex divide-x divide-white/10">
                {compareList.map(item => (
                  <div key={item.id} className="w-[400px] p-8 overflow-y-auto text-paper/80">
                    <div className="mb-8">
                      <img src={item.image} className="w-full aspect-video object-cover rounded-2xl mb-6" />
                      <h3 className="text-3xl font-display font-bold text-paper mb-1">{item.name}</h3>
                      <p className="font-mono text-paper/40 mb-4">{item.nameEn}</p>
                      <p className="text-sm leading-relaxed">{item.description}</p>
                    </div>

                    {item.type === 'Material' && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(item.properties || {}).map(([key, value]) => (
                            <div key={key} className="bg-white/5 p-4 rounded-xl">
                              <p className="text-[10px] uppercase text-paper/40 mb-1">{propertyLabels[key] || key}</p>
                              <p className="font-mono text-sm">{value}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-[10px] uppercase text-paper/40 mb-1">成本 (材料/模具)</p>
                          <p className="text-sm font-bold">{item.cost?.material} / {item.cost?.tooling}</p>
                        </div>
                        {item.sustainability && (
                          <div className="bg-white/5 p-4 rounded-xl">
                            <p className="text-[10px] uppercase text-paper/40 mb-1">可持续性 (回收/认证)</p>
                            <p className="text-sm mb-2">{item.sustainability.recycling}</p>
                            <div className="flex flex-wrap gap-1">
                              {item.sustainability.certification.map(cert => (
                                <span key={cert} className="px-1.5 py-0.5 bg-white/10 rounded text-[9px]">{cert}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-[10px] uppercase text-paper/40 mb-1">替代方案</p>
                          <p className="text-sm italic">{item.alternatives?.join(', ') || '无'}</p>
                        </div>
                      </div>
                    )}

                    {item.type === 'Finish' && (
                      <div className="space-y-8">
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-[10px] uppercase text-paper/40 mb-1">工艺分类</p>
                          <p className="text-sm font-bold">{item.finishData?.category}</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-[10px] uppercase text-paper/40 mb-1">适用基材</p>
                          <p className="text-sm">{item.finishData?.substrate.join(', ')}</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-[10px] uppercase text-paper/40 mb-1">经济性</p>
                          <p className="text-sm">{item.finishData?.economy}</p>
                        </div>
                      </div>
                    )}

                    {item.type === 'Color' && (
                      <div className="space-y-8">
                        <div className="aspect-square rounded-2xl shadow-inner" style={{ backgroundColor: item.colorData?.hex }}></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 p-4 rounded-xl">
                            <p className="text-[10px] uppercase text-paper/40 mb-1">HEX</p>
                            <p className="font-mono text-sm uppercase">{item.colorData?.hex}</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-xl">
                            <p className="text-[10px] uppercase text-paper/40 mb-1">Standard</p>
                            <p className="font-mono text-sm">{item.colorData?.standard}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-ink/40 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-2xl h-full bg-paper rounded-3xl shadow-2xl overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-ink text-paper text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {selectedItem.type}
                    </span>
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-ink/40 font-mono italic">#{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">{selectedItem.name}</h2>
                  <p className="text-xl text-ink/40 font-mono mb-6">{selectedItem.nameEn}</p>
                  <p className="text-lg text-ink/70 leading-relaxed">{selectedItem.description}</p>
                </div>

                {/* Material Specific Content */}
                {selectedItem.type === 'Material' && (
                  <div className="space-y-12">
                    <section>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/30 mb-6">
                        <Activity className="w-4 h-4" /> 物理性能参数
                      </h4>
                      <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                        {Object.entries(selectedItem.properties || {}).map(([key, value]) => (
                          <div key={key} className="border-b border-line pb-2">
                            <p className="text-[10px] uppercase text-ink/40 mb-1">
                              {propertyLabels[key] || key}
                            </p>
                            <p className="font-mono text-sm font-medium">{value}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">
                        <Info className="w-4 h-4" /> 外观特征
                      </h4>
                      <p className="text-ink/70">{selectedItem.appearance}</p>
                    </section>

                    <section>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">
                        <Layers className="w-4 h-4" /> 工艺适配性
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.processability?.map(proc => (
                          <span key={proc} className="px-3 py-1 bg-ink/5 rounded-lg text-sm">{proc}</span>
                        ))}
                      </div>
                    </section>

                    <section className="grid grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-2xl border border-line">
                        <DollarSign className="w-4 h-4 mb-2 text-ink/40" />
                        <p className="text-[10px] uppercase text-ink/40">材料成本</p>
                        <p className="font-bold text-sm">{selectedItem.cost?.material}</p>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-line">
                        <Cpu className="w-4 h-4 mb-2 text-ink/40" />
                        <p className="text-[10px] uppercase text-ink/40">模具成本</p>
                        <p className="font-bold text-sm">{selectedItem.cost?.tooling}</p>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-line">
                        <Leaf className="w-4 h-4 mb-2 text-ink/40" />
                        <p className="text-[10px] uppercase text-ink/40">碳足迹</p>
                        <p className="font-bold text-sm">{selectedItem.sustainability?.carbonFootprint || 'N/A'}</p>
                      </div>
                    </section>

                    {selectedItem.sustainability && (
                      <section className="bg-ink/5 p-6 rounded-3xl border border-line/20">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">
                          <Leaf className="w-4 h-4" /> 可持续性
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-[10px] uppercase text-ink/40 mb-1">回收说明</p>
                            <p className="text-sm text-ink/70">{selectedItem.sustainability.recycling}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase text-ink/40 mb-1">相关认证</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {selectedItem.sustainability.certification.map(cert => (
                                <span key={cert} className="px-2 py-1 bg-white border border-line rounded text-[10px] font-bold text-ink/60">{cert}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </section>
                    )}

                    <section>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">
                        <ExternalLink className="w-4 h-4" /> 供应商与牌号
                      </h4>
                      <div className="space-y-3">
                        {selectedItem.suppliers?.map(sup => (
                          <div key={sup.grade} className="bg-white p-4 rounded-2xl border border-line flex justify-between items-center">
                            <div>
                              <p className="font-bold">{sup.name}</p>
                              <p className="text-xs text-ink/40">{sup.grade}</p>
                            </div>
                            <p className="text-xs italic text-ink/60">{sup.features}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {selectedItem.alternatives && selectedItem.alternatives.length > 0 && (
                      <section>
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">
                          <Activity className="w-4 h-4" /> 替代方案
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.alternatives.map(alt => (
                            <span key={alt} className="px-3 py-1 bg-ink/5 rounded-lg text-sm border border-line/20">{alt}</span>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                )}

                {/* Color Specific Content */}
                {selectedItem.type === 'Color' && (
                  <div className="space-y-12">
                    <section>
                      <div className="aspect-video rounded-3xl shadow-inner mb-8" style={{ backgroundColor: selectedItem.colorData?.hex }}></div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-3xl border border-line">
                          <p className="text-[10px] uppercase text-ink/40 mb-2">HEX</p>
                          <p className="font-mono text-2xl font-bold uppercase">{selectedItem.colorData?.hex}</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-line">
                          <p className="text-[10px] uppercase text-ink/40 mb-2">RGB</p>
                          <p className="font-mono text-2xl font-bold">{selectedItem.colorData?.rgb}</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-line">
                          <p className="text-[10px] uppercase text-ink/40 mb-2">Standard</p>
                          <p className="font-mono text-2xl font-bold">{selectedItem.colorData?.standard} {selectedItem.colorData?.code}</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-line">
                          <p className="text-[10px] uppercase text-ink/40 mb-2">LAB</p>
                          <p className="font-mono text-2xl font-bold">{selectedItem.colorData?.lab}</p>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

                {/* Finish Specific Content */}
                {selectedItem.type === 'Finish' && (
                  <div className="space-y-12">
                    <section className="bg-ink/5 p-8 rounded-3xl border border-line/20">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-2">工艺分类</h4>
                      <p className="text-lg font-bold mb-4">{selectedItem.finishData?.category}</p>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-2">工艺原理</h4>
                      <p className="text-ink/70 leading-relaxed">{selectedItem.finishData?.principle}</p>
                    </section>

                    <section>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">适用基材</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.finishData?.substrate.map(s => (
                          <span key={s} className="px-4 py-2 bg-white border border-line rounded-xl text-sm font-medium">{s}</span>
                        ))}
                      </div>
                    </section>
                    <section>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">可实现效果</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.finishData?.effects.map(e => (
                          <span key={e} className="px-4 py-2 bg-ink text-paper rounded-xl text-sm font-medium">{e}</span>
                        ))}
                      </div>
                    </section>
                    <section>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-ink/30 mb-4">工艺限制</h4>
                      <ul className="list-disc list-inside text-ink/70 space-y-2">
                        {selectedItem.finishData?.limitations.map(l => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </section>
                    <section className="bg-ink text-paper p-8 rounded-3xl">
                      <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">经济性评价</h4>
                      <p className="text-xl font-display">{selectedItem.finishData?.economy}</p>
                    </section>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { CMFItem } from '../types';

export const finishes: CMFItem[] = [
  {
    id: 'fin-polishing',
    type: 'Finish',
    name: '抛光',
    nameEn: 'Polishing',
    description: '通过机械、化学或电解作用降低表面粗糙度，获得镜面光泽。',
    image: 'https://picsum.photos/seed/polishing-metal/800/600',
    tags: ['表面处理', '镜面', '高光'],
    finishData: {
      category: '表面处理类',
      principle: '利用高速旋转的抛光轮配合抛光膏，通过磨削与摩擦降低表面粗糙度；或通过化学/电解溶解使表面整平。',
      substrate: ['金属', '塑料', '玻璃'],
      effects: ['镜面光泽 (Ra ≤ 0.1μm)', '高光', '哑光', '去除毛刺/刀纹'],
      limitations: ['深孔窄缝难处理', '机械抛光可能改变尺寸 (±0.01~0.05mm)', '易产生橘皮/烧伤'],
      economy: '低至中等成本，取决于自动化程度',
      environment: '机械抛光无VOCs；化学/电解抛光涉及酸碱废液需处理，符合RoHS。'
    }
  },
  {
    id: 'fin-sandblasting',
    type: 'Finish',
    name: '喷砂',
    nameEn: 'Sandblasting',
    description: '利用高速砂流冲击表面，形成均匀哑光质感或去除氧化皮。',
    image: 'https://picsum.photos/seed/sandblasting/800/600',
    tags: ['哑光', '磨砂', '前处理'],
    finishData: {
      category: '表面处理类',
      principle: '利用压缩空气将磨料高速喷射至工件表面，通过冲击与切削作用形成微观凹陷，去除表层并改变粗糙度。',
      substrate: ['金属', '塑料', '玻璃', '陶瓷'],
      effects: ['均匀哑光 (Ra 0.5~10μm)', '去氧化皮', '提供涂层锚纹'],
      limitations: ['深孔效果不均', '需配备除尘系统', '可能产生粉尘残留'],
      economy: '低成本，可小批量',
      environment: '无VOCs排放，磨料可回收，需配备除尘系统。'
    }
  },
  {
    id: 'fin-brushing',
    type: 'Finish',
    name: '拉丝',
    nameEn: 'Brushing',
    description: '在金属表面形成线性纹路，增加金属质感并掩盖轻微划痕。',
    image: 'https://picsum.photos/seed/metal-brushing/800/600',
    tags: ['线性纹理', '金属感', '耐划伤'],
    finishData: {
      category: '表面处理类',
      principle: '利用砂带、尼龙轮或拉丝机在金属表面沿单一方向或特定轨迹摩擦，形成连续的线性纹路。',
      substrate: ['不锈钢', '铝合金', '铜', '钛合金'],
      effects: ['直纹', '乱纹', '螺纹', '尼龙纹'],
      limitations: ['主要适用于平面/规则弧面', '复杂曲面难均匀', '易产生划伤'],
      economy: '低至中等成本',
      environment: '无VOCs排放，无特殊环保风险。'
    }
  },
  {
    id: 'fin-knurling',
    type: 'Finish',
    name: '滚花',
    nameEn: 'Knurling',
    description: '通过压力使材料塑性变形形成凹凸花纹，增加摩擦力。',
    image: 'https://picsum.photos/seed/knurling-tool/800/600',
    tags: ['功能性', '防滑', '旋钮'],
    finishData: {
      category: '成型类',
      principle: '利用滚花刀在工件表面施加压力，使材料塑性变形形成凹凸花纹。',
      substrate: ['金属', '硬质工程塑料'],
      effects: ['直纹', '网纹 (30°/45°)', '菱形纹'],
      limitations: ['仅限回转体外表面', '外径会略微增大 (0.1~0.3mm)', '易崩齿'],
      economy: '低成本，滚花轮为易耗件',
      environment: '无VOCs排放，无特殊环保风险。'
    }
  },
  {
    id: 'fin-anodizing',
    type: 'Finish',
    name: '阳极氧化',
    nameEn: 'Anodizing',
    description: '在铝材表面形成致密氧化膜，并可通过多孔结构吸附染料。',
    image: 'https://picsum.photos/seed/anodizing-colors/800/600',
    tags: ['铝合金', '染色', '耐腐蚀'],
    finishData: {
      category: '化学与电化学处理类',
      principle: '以工件为阳极，在酸性电解液中通过电解，在表面生成致密的氧化铝膜层，膜层多孔可吸附染料。',
      substrate: ['铝合金', '镁合金', '钛合金'],
      effects: ['全色系染色', '渐变色', '双色效果', '硬质氧化'],
      limitations: ['尖角易烧焦', '尺寸会微增', '色差控制难', '挂印风险'],
      economy: '中等成本，MOQ ≥ 500件',
      environment: '产生含镍/重金属废水，需严格处理，符合RoHS。'
    }
  },
  {
    id: 'fin-mao',
    type: 'Finish',
    name: '微弧氧化',
    nameEn: 'Micro-arc Oxidation',
    description: '通过微区电弧放电将基体表面烧结为陶瓷层，极高硬度。',
    image: 'https://picsum.photos/seed/mao-ceramic/800/600',
    tags: ['陶瓷感', '极高硬度', '耐磨'],
    finishData: {
      category: '化学与电化学处理类',
      principle: '采用更高电压使阳极表面产生微区电弧放电，在高温烧结作用下将基体金属氧化为陶瓷层。',
      substrate: ['铝', '镁', '钛合金'],
      effects: ['陶瓷质感', '极高硬度 (HV 300~2000)', '耐高温', '绝缘'],
      limitations: ['颜色选择有限 (灰白/黑/绿)', '能耗大', '边缘效应明显', '膜层易疏松'],
      economy: '高成本，设备投资大',
      environment: '电解液为弱碱性，较环保，但仍需废水处理。'
    }
  },
  {
    id: 'fin-electroplating',
    type: 'Finish',
    name: '电镀',
    nameEn: 'Electroplating',
    description: '利用电解原理在表面沉积金属镀层，提升装饰性与耐磨性。',
    image: 'https://picsum.photos/seed/electroplating-chrome/800/600',
    tags: ['金属层', '镜面', '防腐'],
    finishData: {
      category: '化学与电化学处理类',
      principle: '利用电解原理，将镀液中的金属离子在工件表面沉积为金属镀层。',
      substrate: ['金属', 'ABS', 'ABS+PC'],
      effects: ['镀铬 (银白)', '镀金', '镀镍', '镀锌', '高光镜面'],
      limitations: ['深孔镀层薄', '环保限制严 (六价铬)', '结合力风险'],
      economy: '低至高成本 (取决于镀层金属)',
      environment: '六价铬受限，多采用三价铬；废水含重金属，需严苛处理。'
    }
  },
  {
    id: 'fin-electroless',
    type: 'Finish',
    name: '化学镀',
    nameEn: 'Electroless Plating',
    description: '无需电流，通过氧化还原反应沉积均匀金属层，均镀能力极佳。',
    image: 'https://picsum.photos/seed/electroless-nickel/800/600',
    tags: ['均匀镀层', '自催化', '复杂件'],
    finishData: {
      category: '化学与电化学处理类',
      principle: '在含有金属离子和还原剂的溶液中，通过自催化氧化还原反应沉积金属镀层，无需外加电流。',
      substrate: ['金属', '塑料', '陶瓷', '玻璃'],
      effects: ['化学镍 (银白/微黄)', '高磷耐盐雾 (>96h)', '高硬度 (HV 1000)'],
      limitations: ['槽液易老化', '沉积速率慢', '漏镀风险'],
      economy: '中等成本，优于电镀的均镀性',
      environment: '含镍废水需处理，符合RoHS (无铅无镉)。'
    }
  },
  {
    id: 'fin-passivation',
    type: 'Finish',
    name: '钝化',
    nameEn: 'Passivation',
    description: '通过化学反应在表面生成稳定氧化膜，显著提升耐腐蚀性。',
    image: 'https://picsum.photos/seed/passivation-steel/800/600',
    tags: ['防锈', '不锈钢', '化学处理'],
    finishData: {
      category: '化学与电化学处理类',
      principle: '将工件浸入氧化性溶液 (如硝酸、柠檬酸)，通过化学反应在表面生成一层致密、稳定的氧化膜。',
      substrate: ['不锈钢', '铜', '铝', '镁合金'],
      effects: ['不改变外观', '大幅提升耐盐雾能力 (24h -> 200h+)', '去除表面游离铁'],
      limitations: ['表面易发花', '需严格清洗残留酸液', '膜层极薄'],
      economy: '低成本，适合大批量',
      environment: '废酸液需中和处理，符合环保要求。'
    }
  },
  {
    id: 'fin-spraying',
    type: 'Finish',
    name: '喷涂',
    nameEn: 'Spraying',
    description: '利用喷枪将涂料雾化并喷涂至表面，形成保护或装饰层。',
    image: 'https://picsum.photos/seed/spray-painting-manual/800/600',
    tags: ['全色系', '手感漆', '粉末喷涂'],
    finishData: {
      category: '涂装类',
      principle: '利用喷枪将液体涂料雾化喷涂；或通过静电吸附粉末涂料并高温固化流平成膜。',
      substrate: ['所有固体基材'],
      effects: ['砂纹/皱纹/锤纹', '绒毛感 (手感漆)', '珠光/金属漆', '抗指纹'],
      limitations: ['深腔死角易积漆/法拉第笼效应', '涂层厚度影响尺寸 (20~200μm)', '流挂/橘皮风险'],
      economy: '低至中等成本，应用最广',
      environment: '溶剂型VOCs高；水性/粉末喷涂较环保；需符合RoHS。'
    }
  },
  {
    id: 'fin-baking',
    type: 'Finish',
    name: '烤漆',
    nameEn: 'Baking Paint',
    description: '喷涂后经高温固化，形成交联密度高、附着力强的漆膜。',
    image: 'https://picsum.photos/seed/baking-paint/800/600',
    tags: ['高硬度', '耐候', '高质感'],
    finishData: {
      category: '涂装类',
      principle: '喷涂底漆、面漆、清漆后，进入烘烤房 (80~180℃) 高温固化，形成交联密度高的漆膜。',
      substrate: ['金属', '木材', '玻璃'],
      effects: ['漆膜硬度 2H~3H', '高附着力', '耐候性好', '高光/哑光/金属'],
      limitations: ['基材需耐温', '能耗较高', '烘烤过度易变色'],
      economy: '中等成本',
      environment: '溶剂型烤漆VOCs较高，水性烤漆较低；符合RoHS。'
    }
  },
  {
    id: 'fin-silkscreen',
    type: 'Finish',
    name: '丝印',
    nameEn: 'Silk Screen Printing',
    description: '油墨透过网版图文部分转移至表面，适合平面大面积标识。',
    image: 'https://picsum.photos/seed/silk-printing/800/600',
    tags: ['Logo', '文字', '平面印刷'],
    finishData: {
      category: '涂装与印刷类',
      principle: '印刷时油墨透过网版 (聚酯/钢丝) 图文部分刮印至工件表面。',
      substrate: ['所有固体基材'],
      effects: ['文字/图案/Logo', 'UV立体感', '夜光/导电油墨'],
      limitations: ['主要适用于平面', '套印精度 ±0.1~0.2mm', '网点堵塞风险'],
      economy: '极低成本，适合大批量',
      environment: '溶剂型油墨VOCs较高，UV油墨无溶剂；符合RoHS。'
    }
  },
  {
    id: 'fin-padprinting',
    type: 'Finish',
    name: '移印',
    nameEn: 'Pad Printing',
    description: '利用硅胶头转移油墨，可在曲面、凹凸面上印刷精细图案。',
    image: 'https://picsum.photos/seed/pad-printing/800/600',
    tags: ['曲面印刷', '精细文字', '多色套印'],
    finishData: {
      category: '涂装与印刷类',
      principle: '将图案蚀刻在钢板上，通过硅胶头蘸取油墨，转移并压印到工件表面。',
      substrate: ['所有固体基材'],
      effects: ['曲面/凹凸面印刷', '精细线条 (0.1mm)', '多色套印'],
      limitations: ['硅胶头易老化', '大面积印刷不均', '图案模糊风险'],
      economy: '低成本，灵活性高',
      environment: '溶剂型油墨VOCs较高，建议使用低VOC油墨；符合RoHS。'
    }
  },
  {
    id: 'fin-watertransfer',
    type: 'Finish',
    name: '水转印',
    nameEn: 'Water Transfer Printing',
    description: '利用水压将图案薄膜完整包覆于复杂三维曲面。',
    image: 'https://picsum.photos/seed/water-transfer/800/600',
    tags: ['复杂曲面', '仿木纹', '迷彩'],
    finishData: {
      category: '涂装与印刷类',
      principle: '将图案印刷在水溶性PVA薄膜上，利用水压将图案转贴至工件表面，随后清洗烘干罩光。',
      substrate: ['所有固体基材'],
      effects: ['360度复杂曲面全包覆', '仿木纹/石纹/碳纤维'],
      limitations: ['图案易拉伸变形', '不适合精密文字', '尖角覆盖不全'],
      economy: '中等成本，人工依赖度高',
      environment: '罩光漆含VOCs，产生废水需处理；符合RoHS。'
    }
  },
  {
    id: 'fin-heattransfer',
    type: 'Finish',
    name: '热转印',
    nameEn: 'Heat Transfer Printing',
    description: '通过加热加压将离型膜上的图案转移至表面，照片级精度。',
    image: 'https://picsum.photos/seed/heat-transfer/800/600',
    tags: ['高精度', '照片级', '渐变色'],
    finishData: {
      category: '涂装与印刷类',
      principle: '将图案预先印刷在PET离型膜上，通过加热 (150~200℃) 和加压，将图案层转印至工件表面。',
      substrate: ['塑料', '金属', '木材'],
      effects: ['1200dpi 照片级精度', '渐变色', '耐磨性好'],
      limitations: ['仅限平面或浅弧面', '深腔尖角难贴合', '制版费高'],
      economy: '中等成本，MOQ ≥ 1000件',
      environment: '无或极低VOCs排放；符合RoHS。'
    }
  },
  {
    id: 'fin-hotstamping',
    type: 'Finish',
    name: '烫金',
    nameEn: 'Hot Stamping',
    description: '利用热压将金属箔转移至表面，形成边缘锐利的高光金属质感。',
    image: 'https://picsum.photos/seed/hot-stamping/800/600',
    tags: ['金属质感', '局部装饰', '高光'],
    finishData: {
      category: '涂装与印刷类',
      principle: '利用加热的烫金版将烫金箔 (电化铝) 上的金属层通过热熔胶转移到工件表面。',
      substrate: ['纸张', '塑料', '皮革'],
      effects: ['金色/银色/玫瑰金/全息', '边缘锐利', '高光金属感'],
      limitations: ['平面为主', '易出现砂眼/糊版', '烫印不全风险'],
      economy: '低至中等成本',
      environment: '无VOCs排放；符合RoHS。'
    }
  },
  {
    id: 'fin-pvd',
    type: 'Finish',
    name: 'PVD真空镀',
    nameEn: 'PVD Vacuum Plating',
    description: '在真空环境下将金属蒸发并沉积在表面，形成极薄且硬的装饰层。',
    image: 'https://picsum.photos/seed/pvd-coating/800/600',
    tags: ['高质感', '环保', '耐磨'],
    finishData: {
      category: '真空镀膜类',
      principle: '在真空条件下，利用物理方法 (如溅射、蒸发) 将材料气化成原子或分子，沉积在工件表面形成薄膜。',
      substrate: ['金属', '塑料', '玻璃', '陶瓷'],
      effects: ['极高金属质感', '全色系 (黑/金/彩虹)', '高硬度 (HV 2000+)', '耐腐蚀'],
      limitations: ['需真空环境', '工件尺寸受炉体限制', '成本较高'],
      economy: '高成本，适合高端产品',
      environment: '物理过程，无有害化学物质排放，极环保；符合RoHS。'
    }
  },
  {
    id: 'fin-cvd',
    type: 'Finish',
    name: 'CVD',
    nameEn: 'CVD',
    description: '通过气态物质在高温下发生化学反应，在表面生成高性能薄膜。',
    image: 'https://picsum.photos/seed/cvd-coating/800/600',
    tags: ['高性能', '工业级', '超硬'],
    finishData: {
      category: '真空镀膜类',
      principle: '利用气态物质在高温下发生化学反应，在工件表面沉积形成固体薄膜。',
      substrate: ['硬质合金', '陶瓷', '耐高温金属'],
      effects: ['超硬涂层 (金刚石/TiN)', '极佳结合力', '耐极高温'],
      limitations: ['反应温度极高 (800~1000℃)', '基材受限', '设备昂贵'],
      economy: '极高成本',
      environment: '涉及化学反应，需处理废气；符合RoHS。'
    }
  },
  {
    id: 'fin-bluing',
    type: 'Finish',
    name: '发蓝/发黑',
    nameEn: 'Bluing/Blackening',
    description: '在钢铁表面形成氧化膜，提供基础防锈并呈现深邃的黑色或蓝色。',
    image: 'https://picsum.photos/seed/bluing-steel/800/600',
    tags: ['防锈', '工业感', '钢铁'],
    finishData: {
      category: '化学与电化学处理类',
      principle: '将钢铁件浸入强氧化性化学溶液中，在表面形成一层极薄 (0.5~1.5μm) 的黑色氧化铁膜。',
      substrate: ['钢铁', '不锈钢'],
      effects: ['深黑色/蓝黑色', '基础防锈', '不改变尺寸'],
      limitations: ['耐蚀性有限 (需涂油)', '膜层易磨损', '颜色均匀性受材质影响'],
      economy: '极低成本',
      environment: '涉及强碱废液，需严格中和处理。'
    }
  },
  {
    id: 'fin-heattreatment',
    type: 'Finish',
    name: '局部淬火',
    nameEn: 'Localized Quenching',
    description: '通过快速加热和冷却改变局部组织，显著提高局部硬度和耐磨性。',
    image: 'https://picsum.photos/seed/quenching-metal/800/600',
    tags: ['热处理', '高硬度', '功能性'],
    finishData: {
      category: '热处理类',
      principle: '利用感应加热或激光将工件特定部位加热至临界点以上，随后快速冷却 (淬火) 获得马氏体组织。',
      substrate: ['中高碳钢', '合金钢'],
      effects: ['局部硬度大幅提升 (HRC 50~65)', '保持心部韧性', '提高耐疲劳强度'],
      limitations: ['易产生淬火裂纹', '局部变形', '对材质含碳量有要求'],
      economy: '中等成本',
      environment: '无VOCs排放，冷却介质 (油/水) 需循环利用。'
    }
  },
  {
    id: 'fin-imd',
    type: 'Finish',
    name: 'IMD/IML',
    nameEn: 'IMD/IML',
    description: '将印刷好的薄膜置于模具内注塑，使图案与塑料件一体成型。',
    image: 'https://picsum.photos/seed/imd-iml/800/600',
    tags: ['一体成型', '耐刮擦', '装饰性'],
    finishData: {
      category: '成型类',
      principle: '将印刷好的装饰薄膜放入模具，注塑时塑料与薄膜熔合，图案被包覆在透明层下。',
      substrate: ['PC', 'ABS', 'PMMA'],
      effects: ['图案永不磨损', '金属感/珠光/纹理', '高光/哑光'],
      limitations: ['模具成本极高', '仅限大批量', '薄膜易起皱/冲墨'],
      economy: '高成本，MOQ ≥ 10k',
      environment: '减少了后续喷涂工序，较环保；符合RoHS。'
    }
  },
  {
    id: 'fin-laser',
    type: 'Finish',
    name: '镭雕',
    nameEn: 'Laser Engraving',
    description: '利用高能激光束烧蚀表面，形成永久性的文字、标识或纹理。',
    image: 'https://picsum.photos/seed/laser-engraving/800/600',
    tags: ['永久标识', '高精度', 'Logo'],
    finishData: {
      category: '表面处理类',
      principle: '利用高能量密度的激光束对工件进行局部照射，使表层材料汽化或发生颜色变化的化学反应。',
      substrate: ['所有固体基材'],
      effects: ['永久性文字/Logo', '透光效果 (喷漆镭雕)', '微米级精度'],
      limitations: ['颜色单一 (取决于基材)', '效率受面积限制', '深度控制难'],
      economy: '低成本，无需耗材',
      environment: '物理过程，无VOCs，产生少量烟尘需过滤；符合RoHS。'
    }
  },
  {
    id: 'fin-etching',
    type: 'Finish',
    name: '蚀刻/咬花',
    nameEn: 'Etching/Texture',
    description: '通过化学或激光手段在模具或表面形成微观纹理，提升视觉与触感。',
    image: 'https://picsum.photos/seed/etching-texture/800/600',
    tags: ['纹理', '皮纹', '模具处理'],
    finishData: {
      category: '表面处理类',
      principle: '利用化学腐蚀或激光烧蚀在模具型腔表面形成特定纹理 (如皮纹、砂纹)，注塑时复制到产品表面。',
      substrate: ['模具钢', '金属零件'],
      effects: ['VDI纹', '皮纹', '几何纹', '防指纹/防滑'],
      limitations: ['模具咬花不可逆', '深腔侧壁易拉伤', '需考虑拔模斜度'],
      economy: '中等成本 (模具费)',
      environment: '化学蚀刻涉及废酸处理；激光咬花极环保；符合RoHS。'
    }
  }
];

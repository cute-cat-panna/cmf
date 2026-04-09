import { CMFItem } from '../types';

export const materials: CMFItem[] = [
  {
    id: 'mat-abs',
    type: 'Material',
    category: '塑料',
    name: 'ABS(树脂)',
    nameEn: 'Acrylonitrile Butadiene Styrene',
    description: '丙烯腈-丁二烯-苯乙烯共聚物。综合性能优良，易于加工成型。',
    image: 'https://s41.ax1x.com/2026/04/03/peYnmkD.jpg',
    tags: ['工程塑料', '高光泽', '易加工'],
    properties: {
      density: '1.04–1.06 g/cm³',
      hardness: '洛氏R 100–115',
      tensileStrength: '40–50 MPa',
      flexuralModulus: '2000–2500 MPa',
      impactStrength: '15–30 kJ/m²',
      heatDistortionTemp: '85–100 °C'
    },
    appearance: '乳白色半透明至不透明，表面光泽度高，可调配任意颜色。',
    processability: ['注塑', '挤出', '吹塑', '热成型', '电镀', '喷涂'],
    cost: { material: '12–20 元/kg', tooling: '中等 (注塑模)', unit: '低 (大批量)' },
    sustainability: {
      recycling: '回收料含量可达30–50%',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约3.5 kg CO₂/kg'
    },
    suppliers: [
      { name: '奇美', grade: 'PA-757', features: '高光泽，通用级' },
      { name: 'LG', grade: 'HI-121H', features: '高冲击，电镀级' },
      { name: 'SABIC', grade: 'Cycolac®', features: '阻燃、增强系列' },
      { name: '金发', grade: 'ABS-121H', features: '通用注塑级' }
    ],
    alternatives: ['HIPS', 'ASA']
  },
  {
    id: 'mat-pc',
    type: 'Material',
    category: '塑料',
    name: 'PC(聚碳酸酯)',
    nameEn: 'Polycarbonate',
    description: '聚碳酸酯。高透明度，极佳的抗冲击性能。',
    image: 'https://s41.ax1x.com/2026/04/03/peYnnte.jpg',
    tags: ['透明', '高强度', '耐热'],
    properties: {
      density: '1.20–1.22 g/cm³',
      hardness: '洛氏R 118–125',
      tensileStrength: '55–70 MPa',
      flexuralModulus: '2300–2500 MPa',
      impactStrength: '60–85 kJ/m²',
      heatDistortionTemp: '125–140 °C'
    },
    appearance: '高透明，透光率可达88–90%，表面硬度较低易刮伤。',
    processability: ['注塑', '挤出', 'PVD', '硬质涂层', '超声波焊接'],
    cost: { material: '25–40 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收，再生料性能下降明显',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约6.0 kg CO₂/kg'
    },
    suppliers: [
      { name: '科思创', grade: 'Makrolon® 2405', features: '通用注塑级，透明' },
      { name: 'SABIC', grade: 'Lexan® 141R', features: '阻燃，高冲击' },
      { name: '帝人', grade: 'Panlite® L-1225L', features: '光学级' },
      { name: '金发', grade: 'PC-110', features: '通用级' }
    ],
    alternatives: ['PMMA', 'PC/ABS合金']
  },
  {
    id: 'mat-pp',
    type: 'Material',
    category: '塑料',
    name: 'PP (聚丙烯)',
    nameEn: 'Polypropylene',
    description: '聚丙烯。低成本、易用的结晶热塑料，常被称为“塑料行业的钢铁”。具有极高的韧性，能抵抗霉菌、油脂、水和电。轻盈且柔韧，可弯曲而不断裂。聚丙烯不适合高温应用——它极易燃，且热膨胀系数特别高。此外，它容易受到氧化、紫外线降解、氯化溶剂和芳香族化合物的影响。',
    image: 'https://sybridge.com/wp-content/uploads/2023/09/Polypropylene-Fillers-Listing-1024x683-1.jpg',
    tags: ['低密度', '耐化学', '高韧性', '食品级'],
    properties: {
      density: '0.90–0.91 g/cm³',
      hardness: '洛氏R 92',
      tensileStrength: '33 MPa',
      tensileModulus: '1344 MPa',
      flexuralStrength: '48 MPa',
      flexuralModulus: '1241 MPa',
      heatDistortionTemp: '100–110 °C'
    },
    appearance: '半透明白色，具有蜡质感，表面光洁，易于着色。',
    processability: ['注塑', '挤出', '吹塑', 'CNC加工'],
    cost: { material: '8–15 元/kg', tooling: '中低', unit: '极低' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH', 'FDA'],
      carbonFootprint: '约1.8 kg CO₂/kg'
    },
    suppliers: [
      { name: '埃克森美孚', grade: 'ExxonMobil™ PP', features: '高性能均聚物' },
      { name: '中石化', grade: 'PPH-T03', features: '通用级' },
      { name: '陶氏', grade: 'DOW™ PP', features: '高透明级' }
    ],
    alternatives: ['PE', 'ABS', 'PVC']
  },

  {
    id: 'mat-pom',
    type: 'Material',
    category: '塑料',
    name: 'POM(聚甲醛)',
    nameEn: 'Polyoxymethylene',
    description: '聚甲醛，俗称“赛钢”，缩醛，醋酸塑料。具有极高的刚性和硬度，优异的自润滑性。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/Delrin-Hero-1732x1152-1.jpg',
    tags: ['高刚性', '自润滑', '耐磨'],
    properties: {
      density: '1.41–1.42 g/cm³',
      hardness: '洛氏R 110–120',
      tensileStrength: '60–70 MPa',
      flexuralModulus: '2500–3000 MPa',
      impactStrength: '7–12 kJ/m²',
      heatDistortionTemp: '95–110 °C'
    },
    appearance: '乳白色不透明，表面光滑有光泽，手感类似金属。',
    processability: ['注塑', '挤出', '机械加工'],
    cost: { material: '20–35 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收，但易降解',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约3.0 kg CO₂/kg'
    },
    suppliers: [
      { name: '杜邦', grade: 'Delrin® 500P', features: '通用级，高强度' },
      { name: '宝理', grade: 'Duracon® M90-44', features: '标准注塑级' },
      { name: '三菱', grade: 'Iupital® F20-03', features: '高流动，低模垢' },
      { name: '金发', grade: 'POM-100', features: '通用级' }
    ],
    alternatives: ['PA66', 'PBT']
  },
  {
    id: 'mat-pa',
    type: 'Material',
    category: '塑料',
    name: 'PA (尼龙)',
    nameEn: 'Polyamide',
    description: '聚酰胺。机械强度高，韧性好，耐化学药品性优良。',
    image: 'https://s41.ax1x.com/2026/04/03/peYYPL4.jpg',
    tags: ['高韧性', '耐疲劳', '机械件'],
    properties: {
      density: '1.13–1.15 g/cm³',
      hardness: '洛氏R 110–120',
      tensileStrength: '60–85 MPa',
      flexuralModulus: '2000–2800 MPa',
      impactStrength: '5–15 kJ/m²',
      heatDistortionTemp: '70–90 °C'
    },
    appearance: '乳白色半透明，易染色，吸湿后尺寸会发生变化。',
    processability: ['注塑', '挤出', '喷涂', '激光打标'],
    cost: { material: '30–45 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收，再生料性能尚可',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约5.0 kg CO₂/kg'
    },
    suppliers: [
      { name: '杜邦', grade: 'Zytel® 101L', features: '通用级PA66' },
      { name: '巴斯夫', grade: 'Ultramid® A3K', features: '高流动性PA66' },
      { name: '帝斯曼', grade: 'Akulon® F132-D', features: 'PA6，食品接触级' },
      { name: '金发', grade: 'PA6-GF30', features: '30%玻纤增强' }
    ],
    alternatives: ['POM', 'PPO']
  },
  {
    id: 'mat-pmma',
    type: 'Material',
    category: '塑料',
    name: 'PMMA (亚克力)',
    nameEn: 'Polymethyl Methacrylate',
    description: '聚甲基丙烯酸甲酯。具有极佳的透明度和耐候性。',
    image: 'https://s41.ax1x.com/2026/04/03/peYY9QU.jpg',
    tags: ['高透明', '光学级', '耐候'],
    properties: {
      density: '1.17–1.20 g/cm³',
      hardness: '洛氏M 80–100',
      tensileStrength: '60–75 MPa',
      flexuralModulus: '2800–3200 MPa',
      impactStrength: '1.5–3 kJ/m²',
      heatDistortionTemp: '85–100 °C'
    },
    appearance: '极高透明度（92%以上），表面硬度较高但较脆。',
    processability: ['注塑', '挤出', '浇铸', '热成型'],
    cost: { material: '18–30 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收，再生料易降解',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约3.2 kg CO₂/kg'
    },
    suppliers: [
      { name: '罗姆', grade: 'Plexiglas® 7N', features: '通用注塑级' },
      { name: '三菱', grade: 'Acrylite® H12', features: '高耐热' },
      { name: '奇美', grade: 'CM-205', features: '通用级' },
      { name: '金发', grade: 'PMMA-100', features: '透明级' }
    ],
    alternatives: ['PC', 'MS']
  },
  {
    id: 'mat-pe',
    type: 'Material',
    category: '塑料',
    name: 'PE (聚乙烯)',
    nameEn: 'Polyethylene',
    description: '聚乙烯。耐腐蚀性优异，电绝缘性好，手感温润。',
    image: 'https://sybridge.com/wp-content/uploads/2023/07/shutterstock_1690106935.jpg',
    tags: ['耐腐蚀', '食品级', '低成本'],
    properties: {
      density: '0.94–0.97 g/cm³',
      hardness: '肖氏D 60–70',
      tensileStrength: '20–30 MPa',
      flexuralModulus: '800–1200 MPa',
      impactStrength: '20–50 kJ/m²',
      heatDistortionTemp: '60–80 °C'
    },
    appearance: '半透明白色，表面具有蜡质感，手感较软。',
    processability: ['注塑', '挤出', '吹塑', '滚塑'],
    cost: { material: '8–12 元/kg', tooling: '中低', unit: '低' },
    sustainability: {
      recycling: '回收率极高',
      certification: ['RoHS', 'FDA'],
      carbonFootprint: '约2.5 kg CO₂/kg'
    },
    suppliers: [
      { name: '陶氏', grade: 'DMDA-6200', features: 'HDPE注塑级' },
      { name: '埃克森美孚', grade: 'HDPE HTA 001', features: '吹塑级' },
      { name: '中石化', grade: 'HDPE 5000S', features: '通用级' },
      { name: '金发', grade: 'PE-HD-100', features: '注塑级' }
    ],
    alternatives: ['PP']
  },
  {
    id: 'mat-pvc',
    type: 'Material',
    category: '塑料',
    name: 'PVC(聚氯乙烯)',
    nameEn: 'Polyvinyl Chloride',
    description: '聚氯乙烯。阻燃性好，化学稳定性高，应用极广。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/shutterstock_747016306-1-1728x1152-1-1024x683.jpg',
    tags: ['阻燃', '耐化学', '多功能'],
    properties: {
      density: '1.35–1.45 g/cm³',
      hardness: '洛氏R 100–120',
      tensileStrength: '40–50 MPa',
      flexuralModulus: '2400–3000 MPa',
      impactStrength: '2–10 kJ/m²',
      heatDistortionTemp: '70–80 °C'
    },
    appearance: '微黄半透明，可制成硬质或软质，表面光洁，易于着色。',
    processability: ['挤出', '注塑', '压延', '吹塑', '焊接'],
    cost: { material: '8–15 元/kg', tooling: '中等', unit: '低' },
    sustainability: {
      recycling: '回收率较低，需专业处理以防止氯化氢释放',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约3.0 kg CO₂/kg'
    }
  },
  {
    id: 'mat-peek',
    type: 'Material',
    category: '塑料',
    name: 'PEEK(聚醚醚酮)',
    nameEn: 'Polyetheretherketone',
    description: '聚醚醚酮。高性能半结晶工程塑料，具有极佳的机械强度、耐高温性（连续使用温度可达260°C）和优异的耐化学性。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/shutterstock_1930041692.jpg',
    tags: ['特种工程塑料', '耐高温', '耐化学', '高强度'],
    properties: {
      density: '1.30–1.32 g/cm³',
      hardness: '洛氏R 126',
      tensileStrength: '90–100 MPa',
      flexuralModulus: '3700–4100 MPa',
      impactStrength: '5–10 kJ/m²',
      heatDistortionTemp: '150–160 °C (无添加), 315 °C (添加碳/玻璃)',
      meltingPoint: '343 °C'
    },
    appearance: '天然色为浅褐色（米色），也可提供黑色。表面质感坚硬，具有金属感。',
    processability: ['注塑', '挤出', 'CNC加工', '3D打印 (FDM/SLS)'],
    cost: { material: '600–1200 元/kg', tooling: '极高 (需高温模具)', unit: '高' },
    sustainability: {
      recycling: '100%可回收，具有极长的使用寿命，减少更换频率',
      certification: ['FDA', 'ISO 10993 (医疗级)', 'RoHS'],
      carbonFootprint: '约12.0 kg CO₂/kg'
    },
    suppliers: [
      { name: '威格斯 (Victrex)', grade: '450G', features: '通用级，高性能' },
      { name: '索尔维 (Solvay)', grade: 'KetaSpire®', features: '高纯度，耐化学' },
      { name: '赢创 (Evonik)', grade: 'VESTAKEEP®', features: '医疗级，易加工' }
    ],
    alternatives: ['PPS', 'PEI', 'PAI']
  },
  {
    id: 'mat-tpe',
    type: 'Material',
    category: '塑料',
    name: 'TPE (热塑性弹性体)',
    nameEn: 'Thermoplastic Elastomer',
    description: '热塑性弹性体，俗称热塑性橡胶。结合了橡胶的弹性和塑料的加工性，具有优异的触感和防滑性能。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/Automotive-Plastics-Listing-1024x683-1.jpg',
    tags: ['高弹性', '触感柔软', '防滑', '可回收'],
    properties: {
      density: '0.90–1.20 g/cm³',
      hardness: 'Shore 29A–95A',
      tensileStrength: '7.6 MPa (断裂)',
      elongation: '950%',
      modulus300: '1.2 MPa',
      operatingTemp: '-40 至 91 °C'
    },
    appearance: '触感柔软，表面具有橡胶质感，防滑性好，易于着色。',
    processability: ['注塑', '挤出', '吹塑', '二次注塑 (包胶)'],
    cost: { material: '20–40 元/kg', tooling: '中等', unit: '低' },
    sustainability: {
      recycling: '100%可回收，边角料可重复利用',
      certification: ['RoHS', 'REACH', 'FDA (医疗级)'],
      carbonFootprint: '约2.8 kg CO₂/kg'
    },
    suppliers: [
      { name: 'Kent Elastomer', grade: 'K2702', features: '高伸长率，医疗级' },
      { name: 'KRAIBURG TPE', grade: 'THERMOLAST® K', features: '包胶性能优异' }
    ],
    alternatives: ['TPU', '硅胶', 'EPDM']
  },
  {
    id: 'mat-tpu',
    type: 'Material',
    category: '塑料',
    name: 'TPU (热塑性聚氨酯)',
    nameEn: 'Thermoplastic Polyurethane',
    description: '热塑性聚氨酯弹性体。具有极高的强度、耐磨性和耐油性，兼具塑料的硬度和橡胶的弹性。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/carbon_adidas_basketball_court_product_off_model.jpg',
    tags: ['高耐磨', '高强度', '耐油', '柔韧'],
    properties: {
      density: '1.08–1.25 g/cm³',
      hardness: 'Shore 85A–95A',
      tensileStrength: '34 MPa (断裂)',
      elasticModulus: '20 MPa',
      abrasionResistance: '82 mm³',
      glassTransitionTemp: '-44 °C'
    },
    appearance: '透明或不透明，表面抗刮性好，质感可调。',
    processability: ['注塑', '挤出', '3D打印 (FDM/SLS)'],
    cost: { material: '30–60 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收，比PVC更环保',
      certification: ['RoHS', 'REACH', 'OEKO-TEX'],
      carbonFootprint: '约3.5 kg CO₂/kg'
    },
    suppliers: [
      { name: '巴斯夫', grade: 'Ultrafuse TPU 85A', features: '高性能打印级' },
      { name: '万华化学', grade: 'Wanhua TPU', features: '国产龙头，规格齐全' }
    ],
    alternatives: ['TPE', 'PVC', '尼龙弹性体']
  },
  {
    id: 'mat-ps',
    type: 'Material',
    category: '塑料',
    name: 'PS (聚苯乙烯)',
    nameEn: 'Polystyrene',
    description: '聚苯乙烯。包括通用级(GPPS)和高抗冲级(HIPS)。GPPS透明脆硬，HIPS不透明且抗冲击。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/shutterstock_595650-1740x1152-1-1024x678.jpeg',
    tags: ['低成本', '尺寸稳定', '食品级', '易加工'],
    properties: {
      density: '1.04–1.06 g/cm³',
      tensileStrength: '28 MPa (HIPS)',
      elongation: '55% (HIPS)',
      flexuralModulus: '1930 MPa',
      impactStrength: '107 J/m (带缺口)',
      heatDistortionTemp: '92 °C'
    },
    appearance: 'GPPS为高透明，HIPS为不透明乳白色，表面光泽度好。',
    processability: ['注塑', '热成型', '挤出'],
    cost: { material: '9–14 元/kg', tooling: '低', unit: '极低' },
    sustainability: {
      recycling: '可回收，但不可生物降解',
      certification: ['FDA', 'RoHS'],
      carbonFootprint: '约3.4 kg CO₂/kg'
    },
    suppliers: [
      { name: '奇美', grade: 'PG-33', features: 'GPPS通用级' },
      { name: 'PS嘉兴', grade: 'HIPS-622', features: '高抗冲级' }
    ],
    alternatives: ['ABS', 'PP', 'AS']
  },
  {
    id: 'mat-asa',
    type: 'Material',
    category: '塑料',
    name: 'ASA (丙烯腈-苯乙烯-丙烯酸酯)',
    nameEn: 'Acrylonitrile Styrene Acrylate',
    description: '具有极佳的耐候性和抗紫外线性能，是ABS的耐候替代品。在户外环境下能长期保持颜色和机械性能。',
    image: 'https://sybridge.com/wp-content/uploads/2023/05/Blue-plastic-parts.jpg',
    tags: ['耐候', '抗UV', '高冲击', '户外应用'],
    properties: {
      density: '1.06–1.08 g/cm³',
      tensileStrength: '33 MPa (屈服)',
      flexuralModulus: '1980 MPa',
      compressiveStrength: '75 MPa',
      impactStrength: '15–25 kJ/m²'
    },
    appearance: '表面光滑，光泽度高，颜色稳定性极佳。',
    processability: ['注塑', '挤出', '3D打印', '机械加工'],
    cost: { material: '25–40 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约4.0 kg CO₂/kg'
    },
    suppliers: [
      { name: 'SABIC', grade: 'GELOY™', features: '极佳的耐候性' },
      { name: 'LG化学', grade: 'ASA LI912', features: '高流动性' }
    ],
    alternatives: ['ABS', 'PC/ASA', 'PVC']
  },
  {
    id: 'mat-pcabs',
    type: 'Material',
    category: '塑料',
    name: 'PC-ABS (聚碳酸酯/ABS合金)',
    nameEn: 'Polycarbonate/Acrylonitrile Butadiene Styrene',
    description: 'PC与ABS的共混物。结合了PC的高耐热、高强度和ABS的加工性、延展性，是应用最广的工程塑料合金之一。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/shutterstock_708173818.jpg',
    tags: ['高强度', '高耐热', '尺寸稳定', '合金材料'],
    properties: {
      density: '1.12–1.15 g/cm³',
      tensileStrength: '41 MPa',
      tensileModulus: '1916 MPa',
      flexuralStrength: '67 MPa',
      flexuralModulus: '1930 MPa',
      heatDistortionTemp: '110 °C (@66psi)'
    },
    appearance: '表面质量优异，易于喷涂和电镀，通常为不透明。',
    processability: ['注塑', '挤出', '喷涂', '电镀'],
    cost: { material: '22–35 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '可回收',
      certification: ['RoHS', 'REACH', 'UL94'],
      carbonFootprint: '约4.5 kg CO₂/kg'
    },
    suppliers: [
      { name: 'SABIC', grade: 'CYCOLOY™', features: '行业标准级' },
      { name: '科思创', grade: 'Bayblend®', features: '高耐热系列' }
    ],
    alternatives: ['PC', 'ABS', 'PC/PBT']
  },
  {
    id: 'mat-epu40',
    type: 'Material',
    category: '塑料',
    name: 'EPU 40 (弹性体聚氨酯)',
    nameEn: 'Elastomeric Polyurethane 40',
    description: 'Carbon DLS工艺开发的类橡胶材料。具有非线性材料响应，极高失效伸长率。EPU 40较软，非常适合需要阻尼、能量耗散和冲击吸收的应用。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/EPU_Feature.jpg',
    tags: ['高弹性', '阻尼', '吸震', '3D打印'],
    properties: {
      tensileStrength: '7.7 MPa',
      elongation: '> 250%',
      tearStrength: '23 kN/m',
      stress50: '1.9 MPa',
      stress100: '3.0 MPa',
      hardness: 'Shore 68A'
    },
    appearance: '标准黑色，表面质感细腻，具有良好的触感。',
    processability: ['Carbon DLS (CLIP)'],
    cost: { material: '150–300 元/kg', tooling: '低 (无需模具)', unit: '高' },
    sustainability: {
      recycling: 'Carbon提供材料回收计划',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约5.5 kg CO₂/kg'
    },
    suppliers: [
      { name: 'Carbon', grade: 'EPU 40', features: '高性能弹性体' }
    ],
    alternatives: ['EPU 41', 'TPE', '硅胶']
  },
  {
    id: 'mat-epu41',
    type: 'Material',
    category: '塑料',
    name: 'EPU 41 (弹性体聚氨酯)',
    nameEn: 'Elastomeric Polyurethane 41',
    description: 'Carbon EPU家族的生产级弹性体。比EPU 40更刚，具有更高的能量回馈。适合需要“触感”或触觉反馈的接口应用。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/EPU_40-1-1-1-768x521.jpg',
    tags: ['高回弹', '生产级', '复杂晶格', '3D打印'],
    properties: {
      tensileStrength: '6.2 MPa',
      elongation: '> 130%',
      tearStrength: '20 kN/m',
      stress50: '2.7 MPa',
      stress100: '4.7 MPa',
      hardness: 'Shore 73A'
    },
    appearance: '独特的亚麻绿色，表面更光滑，后期处理需求更少。',
    processability: ['Carbon DLS (CLIP)'],
    cost: { material: '180–350 元/kg', tooling: '低 (无需模具)', unit: '高' },
    sustainability: {
      recycling: 'Carbon提供材料回收计划',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约5.8 kg CO₂/kg'
    },
    suppliers: [
      { name: 'Carbon', grade: 'EPU 41', features: '高回弹生产级' }
    ],
    alternatives: ['EPU 40', 'TPU', '尼龙弹性体']
  },
  {
    id: 'mat-pa12',
    type: 'Material',
    category: '塑料',
    name: 'PA 12 (尼龙 12)',
    nameEn: 'Polyamide 12 / Nylon 12',
    description: '通用工程塑料，以韧性、高强度和耐疲劳性著称。广泛用于注塑和增材制造（MJF/FDM），是金属零件塑料化的理想选择。',
    image: 'https://sybridge.com/wp-content/uploads/2023/05/PA12_Feature.jpg',
    tags: ['高韧性', '耐疲劳', '尺寸稳定', '各向同性'],
    properties: {
      density: '1.01 g/cm³',
      tensileStrength: '48 MPa',
      tensileModulus: '1700–1800 MPa',
      elongation: '20%',
      impactStrength: '3.5 kJ/m²',
      heatDistortionTemp: '175 °C (@0.45 MPa)'
    },
    appearance: 'MJF工艺通常为灰色或黑色，注塑可调色，表面略带颗粒感。',
    processability: ['注塑', 'HP MJF', 'FDM', 'SLS'],
    cost: { material: '15–40 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: 'MJF粉末可实现80%回收利用',
      certification: ['RoHS', 'REACH', 'FDA'],
      carbonFootprint: '约4.2 kg CO₂/kg'
    },
    suppliers: [
      { name: '惠普', grade: 'HP 3D High Reusability PA 12', features: '高回收率打印粉末' },
      { name: '赢创', grade: 'VESTAMID®', features: '高性能注塑级' }
    ],
    alternatives: ['PA 6', 'PA 66', 'ABS']
  },
  {
    id: 'mat-pla',
    type: 'Material',
    category: '塑料',
    name: 'PLA (聚乳酸)',
    nameEn: 'Polylactic Acid',
    description: '生物基且可生物降解的热塑性聚酯。来源于玉米淀粉等可再生资源，是目前最环保的商业化塑料之一。',
    image: 'https://sybridge.com/wp-content/uploads/2020/04/Bioplastics-Hero-2048x1438-1.jpg',
    tags: ['生物基', '可降解', '低收缩', '环保'],
    properties: {
      density: '1.24 g/cm³',
      tensileStrength: '50–70 MPa',
      flexuralModulus: '3000–4000 MPa',
      elongation: '3–5%',
      heatDistortionTemp: '55 °C',
      meltingPoint: '150–160 °C'
    },
    appearance: '高透明度，易于着色，表面光泽度高，但质地较脆。',
    processability: ['3D打印 (FDM)', '热成型', '注塑'],
    cost: { material: '12–25 元/kg', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '可生物降解，工业堆肥下3个月内分解',
      certification: ['FDA', 'EN 13432 (可降解认证)'],
      carbonFootprint: '约0.5 kg CO₂/kg (碳中和潜力)'
    },
    suppliers: [
      { name: 'NatureWorks', grade: 'Ingeo™', features: '全球领先的PLA品牌' },
      { name: '海正生物', grade: 'REVODE', features: '国产高性能牌号' }
    ],
    alternatives: ['PHA', 'PETG', 'PBS']
  },
  {
    id: 'mat-pet',
    type: 'Material',
    category: '塑料',
    name: 'PET (聚对苯二甲酸乙二醇酯)',
    nameEn: 'Polyethylene Terephthalate',
    description: '全球回收率最高的塑料。轻质、坚固、透明且防碎，具有优异的气体阻隔性能，是食品包装的首选材料。',
    image: 'https://sybridge.com/wp-content/uploads/2023/06/PET-Water-Bottles-Blue-Row.jpg',
    tags: ['高回收', '食品级', '透明', '阻隔性'],
    properties: {
      density: '1.38 g/cm³',
      tensileStrength: '79 MPa',
      flexuralModulus: '2758 MPa',
      elongation: '70%',
      hardness: 'Shore D 87',
      meltingPoint: '250–260 °C'
    },
    appearance: '极高透明度，表面坚硬耐磨，质感接近玻璃。',
    processability: ['吹塑', '注塑', '挤出', '热成型'],
    cost: { material: '8–12 元/kg', tooling: '中等', unit: '极低' },
    sustainability: {
      recycling: '100%可回收 (回收标志 #1)',
      certification: ['FDA', 'RoHS'],
      carbonFootprint: '约2.2 kg CO₂/kg'
    },
    suppliers: [
      { name: '杜邦', grade: 'Rynite®', features: '高性能工程级' },
      { name: '远东新世纪', grade: 'PET Resin', features: '包装级龙头' }
    ],
    alternatives: ['PBT', 'PP', '玻璃']
  },
  {
    id: 'mat-az91d',
    type: 'Material',
    category: '金属',
    name: 'AZ91D 镁合金',
    nameEn: 'AZ91D Magnesium Alloy',
    description: '压铸镁合金经典牌号，铝含量高，压铸流动性优异，可实现0.5mm薄壁成型，轻量化效果突出（约为钢的1/4），具备优异的减振性，广泛应用于3C电子、汽车内饰、五金工具等领域。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['压铸镁合金', '轻量化', '高流动性', '薄壁成型', '3C电子', '汽车部件'],
    properties: {
      density: '1.82 g/cm³',
      hardness: '压铸态 布氏HB 65',
      tensileStrength: '压铸态 230 MPa',
      yieldStrength: '压铸态 160 MPa',
      elongation: '压铸态 3%',
      thermalExpansion: '26 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '72 W/m·K',
      meltingPoint: '595 °C',
      corrosionResistance: '化学活性极高，电极电位极低，易发生电偶腐蚀，未防护基材耐盐雾≤8h，需表面防护',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '≥ 2H (取决于表面处理/涂层)',
      glossRange: '20–90 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.5 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，压铸态表面平整光洁，可通过微弧氧化、喷涂、电泳、PVD镀实现哑光、高光、金属色等多样化表面效果，薄壁成型尺寸稳定性优异。',
    processability: ['高压压铸', '半固态成型', 'CNC精密机加工', '微弧氧化', '静电喷涂', '阴极电泳', 'PVD真空镀', '激光雕刻'],
    cost: { material: '22–35 元/kg（2026年国内市场均价）', tooling: '中等', unit: '中等偏低' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料需调整合金成分以保证压铸性能',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '云海金属', grade: 'AZ91D', features: '国内镁合金龙头，压铸级专用料，成分稳定' },
      { name: '宝钢金属', grade: 'AZ91D', features: '高纯净度冶炼，气孔率低，表面质量优异' },
      { name: '万丰奥威', grade: 'AZ91D', features: '压铸一体化解决方案，配套汽车/3C客户' },
      { name: '银光镁业', grade: 'AZ91D', features: '原生镁锭原料，成本优势突出' }
    ],
    alternatives: ['AZ31B 镁合金', 'AM60B 镁合金', '6061 铝合金', 'ADC12 铝合金']
  },
  {
    id: 'mat-6061t6',
    type: 'Material',
    category: '金属',
    name: '6061-T6 铝合金',
    nameEn: '6061-T6 Aluminum Alloy',
    description: '变形铝合金经典牌号，T6热处理态（固溶+人工时效），强度与塑性平衡优异，可焊接、可阳极氧化着色，表面处理效果丰富，是工业产品结构外观件通用“万能铝”。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['变形铝合金', 'T6热处理', '可阳极氧化', '可焊接', '通用结构件', '3C电子'],
    properties: {
      density: '2.70 g/cm³',
      hardness: 'T6态 布氏HB 95',
      tensileStrength: 'T6态 310 MPa',
      yieldStrength: 'T6态 276 MPa',
      elongation: 'T6态 12%',
      flexuralModulus: '69000 MPa',
      thermalExpansion: '23.6 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '167 W/m·K',
      meltingPoint: '580–650 °C',
      corrosionResistance: '表面易生成致密钝化膜，耐大气腐蚀优异，耐酸碱性能一般，压铸牌号耐蚀性弱于变形牌号',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '普通阳极氧化≥3H、硬质阳极氧化≥6H、喷涂≥2H',
      glossRange: '5–95 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.2 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，冷轧/挤压态表面光洁，可通过阳极氧化实现彩色膜层，也可通过喷砂、拉丝、抛光、喷涂实现从全哑光到镜面高光的多样化质感，尺寸稳定性优异。',
    processability: ['挤压成型', '冲压折弯', 'CNC精密机加工', '阳极氧化', '硬质阳极氧化', '静电喷涂', '拉丝', '喷砂', '激光焊接'],
    cost: { material: '18–28 元/kg（2026年国内市场均价）', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料冶金性能与新料无显著差异',
      certification: ['RoHS', 'REACH', 'ELV'],
      carbonFootprint: '约2.3–3.0 kg CO₂/kg（挤压态）'
    },
    suppliers: [
      { name: '中国铝业', grade: '6061-T6', features: '国内铝业龙头，挤压/板材齐全，性能稳定' },
      { name: '南山铝业', grade: '6061-T6', features: '高表面质量，适合阳极氧化着色，3C电子专用' },
      { name: '忠旺铝业', grade: '6061-T6', features: '大截面挤压材，汽车/轨道交通专用' },
      { name: '诺贝丽斯', grade: '6061-T6', features: '高端冷轧板，表面平整度极高，外资品牌' }
    ],
    alternatives: ['6063-T5 铝合金', '7075-T6 铝合金', 'ADC12 压铸铝合金', '5052 铝合金']
  },
  {
    id: 'mat-304',
    type: 'Material',
    category: '金属',
    name: '304 不锈钢 (06Cr19Ni10)',
    nameEn: '304 Stainless Steel (AISI 304)',
    description: '奥氏体铬镍不锈钢通用牌号，含18%铬+8%镍，表面钝化膜耐大气/水腐蚀极强，无磁性、易抛光、可焊接，是厨卫、家电、3C、五五金装饰件的“国民不锈钢”。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['奥氏体不锈钢', '耐蚀', '无磁性', '易抛光', '厨卫家电', '五金装饰'],
    properties: {
      density: '7.93 g/cm³',
      hardness: '冷轧态 布氏HB ≤187 / 洛氏HRB ≤90',
      tensileStrength: '冷轧态 520 MPa',
      yieldStrength: '冷轧态 205 MPa',
      elongation: '冷轧态 40%',
      flexuralModulus: '193000 MPa',
      thermalExpansion: '17.2 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '16.2 W/m·K',
      meltingPoint: '1400–1450 °C',
      corrosionResistance: '铬镍钝化膜耐大气/水腐蚀极强，304未防护耐盐雾≥48h，316L耐氯离子更优，可无防护裸用',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '基材裸用≥HB、PVD镀层≥6H、喷涂≥2H',
      glossRange: '5–98 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.0 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，冷轧态表面光洁度极高，可通过抛光实现8K镜面，也可通过喷砂、拉丝、蚀刻、PVD镀实现多样化质感，裸用长期使用仍能保持外观稳定性。',
    processability: ['冷轧', '冲压折弯', '深冲', 'CNC机加工', '抛光', '拉丝', '喷砂', 'PVD真空镀', '激光焊接', '氩弧焊'],
    cost: { material: '16–24 元/kg（2026年国内市场均价）', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料冶金性能与新料无显著差异',
      certification: ['RoHS', 'REACH', 'FDA（食品接触）'],
      carbonFootprint: '约4.5–5.5 kg CO₂/kg（冷轧态）'
    },
    suppliers: [
      { name: '太原钢铁（太钢）', grade: '06Cr19Ni10（国标304）', features: '国内不锈钢龙头，冷轧板表面质量优异，食品级认证' },
      { name: '宝武钢铁', grade: 'AISI 304', features: '全规格覆盖，高纯净度，适合深冲/抛光' },
      { name: '浦项制铁', grade: 'POSCO 304', features: '高端冷轧板，8K镜面专用料，外资品牌' },
      { name: '张浦不锈钢', grade: '304', features: '高表面平整度，3C电子/装饰件专用' }
    ],
    alternatives: ['316L 不锈钢', '201 不锈钢', '430 不锈钢', '303 不锈钢']
  },
  {
    id: 'mat-spcc',
    type: 'Material',
    category: '金属',
    name: 'SPCC 冷轧低碳钢',
    nameEn: 'SPCC Cold Rolled Low Carbon Steel',
    description: '冷轧低碳钢通用牌号（GB/Q/BQB 402对应），碳含量≤0.12%，塑性优异、易冲压折弯、易焊接，表面质量高，是家电、机箱、汽车钣金的“基础钢材”，必须做防腐+表面防护处理。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['冷轧低碳钢', '易冲压', '易焊接', '家电钣金', '机箱机柜', '需防腐'],
    properties: {
      density: '7.85 g/cm³',
      hardness: '冷轧退火态 洛氏HRB ≤95',
      tensileStrength: '冷轧退火态 270–380 MPa',
      yieldStrength: '冷轧退火态 ≥185 MPa',
      elongation: '冷轧退火态 ≥30%',
      flexuralModulus: '206000 MPa',
      thermalExpansion: '11.7 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '50 W/m·K',
      meltingPoint: '1450–1500 °C',
      corrosionResistance: '极易氧化生锈，未防护基材耐盐雾≤4h，必须做磷化+电泳/喷涂完整防腐处理',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '喷涂≥2H、电泳≥3H',
      glossRange: '10–90 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.5 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，冷轧态表面平整光洁、无氧化皮，需通过磷化、电泳、喷涂实现防腐与装饰效果，可实现从全哑光到高光的多样化外观，尺寸稳定性优异。',
    processability: ['冷轧', '冲压折弯', '深冲', 'CNC机加工', '焊接', '磷化', '阴极电泳', '静电喷涂', '粉末喷涂', '激光切割'],
    cost: { material: '5–8 元/kg（2026年国内市场均价）', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料冶金性能与新料无显著差异',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约1.8–2.5 kg CO₂/kg（冷轧态）'
    },
    suppliers: [
      { name: '宝武钢铁', grade: 'SPCC', features: '国内钢铁龙头，冷轧板表面质量高，家电专用' },
      { name: '鞍钢', grade: 'SPCC', features: '全规格覆盖，深冲性能优异，汽车钣金专用' },
      { name: '首钢', grade: 'SPCC', features: '高尺寸精度，机箱机柜专用' },
      { name: '邯钢', grade: 'SPCC', features: '成本优势突出，通用级冷轧板' }
    ],
    alternatives: ['SPHC 热轧钢', 'ST12 冷轧钢', 'DC01 冷轧钢', 'Q235 碳素钢']
  },
  {
    id: 'mat-zamak3',
    type: 'Material',
    category: '金属',
    name: 'Zamak3 锌合金 (ZnAl4)',
    nameEn: 'Zamak3 Zinc Alloy (ZnAl4)',
    description: '压铸锌合金经典牌号（GB ZZnAl4对应），含4%铝，压铸流动性极佳、尺寸精度高、易电镀/喷涂，熔点低（380℃）、成型效率高，是五金装饰件、拉链、玩具、锁具的“首选压铸合金”。',
    image: 'https://picsum.photos/seed/zamak3-zinc/800/600',
    tags: ['压铸锌合金', '高流动性', '易电镀', '尺寸精度高', '五金装饰', '锁具玩具'],
    properties: {
      density: '6.6 g/cm³',
      hardness: '压铸态 布氏HB 82',
      tensileStrength: '压铸态 285 MPa',
      yieldStrength: '压铸态 221 MPa',
      elongation: '压铸态 10%',
      flexuralModulus: '96000 MPa',
      thermalExpansion: '27.4 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '113 W/m·K',
      meltingPoint: '380–386 °C',
      corrosionResistance: '干湿交替环境易氧化出现白锈，薄壁件易发生晶间腐蚀，未防护耐盐雾≤12h，需电镀/喷涂防护',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '电镀≥4H、喷涂≥2H',
      glossRange: '10–95 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.2 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，压铸态表面平整光洁、细节还原度高，可通过电镀（仿金/仿银/仿铜）、喷涂、电泳实现奢华金属质感，尺寸精度可达IT8-IT10级。',
    processability: ['高压压铸', 'CNC机加工', '抛光', '电镀（铜/镍/铬）', '静电喷涂', '电泳', '激光雕刻'],
    cost: { material: '18–25 元/kg（2026年国内市场均价）', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料需调整合金成分以保证压铸性能',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '葫芦岛锌业', grade: 'Zamak3 (ZnAl4)', features: '国内锌业龙头，原生锌锭原料，成分稳定' },
      { name: '中金岭南', grade: 'Zamak3', features: '高纯净度冶炼，电镀性能优异，装饰件专用' },
      { name: '株冶集团', grade: 'Zamak3', features: '成本优势突出，通用级压铸锌合金' },
      { name: '驰宏锌锗', grade: 'Zamak3', features: '低杂质含量，尺寸稳定性高' }
    ],
    alternatives: ['Zamak5 锌合金', 'ZA8 锌合金', 'ADC12 铝合金', 'H62 黄铜']
  },
  {
    id: 'mat-316l',
    type: 'Material',
    category: '金属',
    name: '316L 不锈钢 (02Cr17Ni12Mo2)',
    nameEn: '316L Stainless Steel (AISI 316L)',
    description: '超低碳奥氏体铬镍钼不锈钢，含2-3%钼，耐点蚀和缝隙腐蚀性能极佳，具有优异的抗氯离子腐蚀能力，生物相容性好，是高端腕表、首饰、医疗器械及化工设备的顶级用材。',
    image: 'https://picsum.photos/seed/316l-stainless/800/600',
    tags: ['奥氏体不锈钢', '耐点蚀', '医疗级', '高端腕表', '无磁性'],
    properties: {
      density: '7.98 g/cm³',
      hardness: '布氏HB ≤217 / 洛氏HRB ≤95',
      tensileStrength: '≥ 485 MPa',
      yieldStrength: '≥ 170 MPa',
      elongation: '≥ 40%',
      flexuralModulus: '193000 MPa',
      thermalExpansion: '16.0 x 10⁻⁶ /°C (0–100°C)',
      thermalConductivity: '15.0 W/m·K (100°C)',
      meltingPoint: '1375–1400 °C',
      corrosionResistance: '极佳，耐氯离子腐蚀显著优于304，耐盐雾≥96h，可裸用',
      adhesion: '5B (ISO 2409)',
      pencilHardness: '基材≥HB、PVD镀层≥7H',
      glossRange: '5–98 GU',
      colorDeltaE: 'ΔE*ab ≤ 0.8 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，色泽较304略深，抛光后质感极其细腻，可实现极致镜面效果。',
    processability: ['冷轧', '冲压', 'CNC精密加工', '抛光', 'PVD镀', '激光焊接'],
    cost: { material: '25–40 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH', 'ISO 10993']
    },
    suppliers: [
      { name: '太钢', grade: '316L', features: '高纯净度，医疗级' },
      { name: '宝武', grade: '316L', features: '表面质量优异' }
    ],
    alternatives: ['304 不锈钢', '904L 不锈钢', 'TC4 钛合金']
  },
  {
    id: 'mat-5052',
    type: 'Material',
    category: '金属',
    name: '5052 铝合金',
    nameEn: '5052 Aluminum Alloy',
    description: 'AL-Mg系防锈铝，镁是主要合金元素。具有高疲劳强度，塑性与耐蚀性高，不能热处理强化，在半冷作硬化时塑性尚好，冷作硬化时塑性低，焊接性良好，是钣金件常用铝材。',
    image: 'https://picsum.photos/seed/5052-aluminum/800/600',
    tags: ['防锈铝', '钣金件', '高疲劳强度', '可焊接'],
    properties: {
      density: '2.68 g/cm³',
      hardness: 'H32态 布氏HB 60',
      tensileStrength: '210–260 MPa',
      yieldStrength: '130–190 MPa',
      elongation: '12–18%',
      thermalExpansion: '23.8 x 10⁻⁶ /°C',
      thermalConductivity: '138 W/m·K',
      meltingPoint: '607–650 °C',
      corrosionResistance: '优异，特别是在海洋大气中，耐蚀性极强',
      adhesion: '5B',
      pencilHardness: '阳极氧化≥2H',
      glossRange: '10–90 GU',
      colorDeltaE: 'ΔE*ab ≤ 1.2',
      contactAngle: '105°–115° (AF)'
    },
    appearance: '银白色，表面纹理细腻，阳极氧化后色彩均匀度高。',
    processability: ['钣金折弯', '冲压', '阳极氧化', '焊接'],
    cost: { material: '20–30 元/kg', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '西南铝', grade: '5052-H32', features: '板材平整度高' }
    ],
    alternatives: ['6061 铝合金', '1060 纯铝']
  },
  {
    id: 'mat-7075t6',
    type: 'Material',
    category: '金属',
    name: '7075-T6 铝合金',
    nameEn: '7075-T6 Aluminum Alloy',
    description: '超硬铝合金，锌是主要合金元素。强度极高，机械性能优良，具有良好的抗疲劳强度，常用于航空航天及高应力结构件。',
    image: 'https://picsum.photos/seed/7075-aluminum/800/600',
    tags: ['超硬铝', '高强度', '航空航天', '高应力'],
    properties: {
      density: '2.81 g/cm³',
      hardness: 'T6态 布氏HB 150',
      tensileStrength: '570 MPa',
      yieldStrength: '500 MPa',
      elongation: '11%',
      thermalExpansion: '23.4 x 10⁻⁶ /°C',
      thermalConductivity: '130 W/m·K',
      meltingPoint: '477–635 °C',
      corrosionResistance: '一般，必须进行阳极氧化或涂层保护',
      adhesion: '5B',
      pencilHardness: '硬质阳极氧化≥5H',
      glossRange: '10–95 GU',
      colorDeltaE: 'ΔE*ab ≤ 1.2',
      contactAngle: '105°–115° (AF)'
    },
    appearance: '银白色，质感坚硬，加工后表面光洁度高。',
    processability: ['CNC加工', '锻造', '阳极氧化'],
    cost: { material: '35–55 元/kg', tooling: '高', unit: '中等' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '美铝(Alcoa)', grade: '7075-T6', features: '航空级品质' }
    ],
    alternatives: ['2024 铝合金', 'TC4 钛合金']
  },
  {
    id: 'mat-t2-copper',
    type: 'Material',
    category: '金属',
    name: 'T2 纯铜 (红铜)',
    nameEn: 'T2 Pure Copper',
    description: '高纯度铜，具有极佳的导电、导热性能和良好的耐蚀性、加工性能，可焊接和钎焊。',
    image: 'https://picsum.photos/seed/t2-copper/800/600',
    tags: ['高导电', '高导热', '红铜', '散热件'],
    properties: {
      density: '8.96 g/cm³',
      hardness: '布氏HB 35–100',
      tensileStrength: '200–380 MPa',
      yieldStrength: '≥ 50 MPa',
      elongation: '≥ 30%',
      thermalExpansion: '17.7 x 10⁻⁶ /°C',
      thermalConductivity: '390 W/m·K',
      meltingPoint: '1083 °C',
      corrosionResistance: '在大气、淡水中耐蚀性好，但在氨、铵盐中易腐蚀',
      adhesion: '5B (涂层后)',
      pencilHardness: '≥ 2H (透明漆保护)',
      glossRange: '20–98 GU',
      colorDeltaE: 'ΔE*ab ≤ 1.2',
      contactAngle: '105°–115° (AF)'
    },
    appearance: '独特的玫瑰红色金属光泽，抛光后极其亮丽，易氧化变暗。',
    processability: ['冷拔', '冲压', 'CNC', '抛光', '电镀'],
    cost: { material: '65–85 元/kg', tooling: '中等', unit: '高' },
    sustainability: {
      recycling: '回收价值极高',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '江铜', grade: 'T2', features: '高纯度，导电率高' }
    ],
    alternatives: ['H62 黄铜', 'C1100 铜']
  },
  {
    id: 'mat-zamak5',
    type: 'Material',
    category: '金属',
    name: 'Zamak 5 锌合金',
    nameEn: 'Zamak 5 Zinc Alloy',
    description: '含1%铜的锌合金，较Zamak 3具有更高的强度和硬度，以及更好的耐蚀性，但塑性略低。',
    image: 'https://picsum.photos/seed/zamak5/800/600',
    tags: ['压铸锌合金', '高强度', '易电镀'],
    properties: {
      density: '6.7 g/cm³',
      hardness: '布氏HB 91',
      tensileStrength: '330 MPa',
      yieldStrength: '250 MPa',
      elongation: '7%',
      thermalExpansion: '27.4 x 10⁻⁶ /°C',
      thermalConductivity: '109 W/m·K',
      meltingPoint: '380–384 °C',
      corrosionResistance: '优于Zamak 3，但仍需表面处理',
      adhesion: '5B',
      pencilHardness: '电镀≥4H',
      glossRange: '10–95 GU',
      colorDeltaE: 'ΔE*ab ≤ 1.2',
      contactAngle: '105°–115° (AF)'
    },
    appearance: '银白色，压铸表面致密，电镀后质感极佳。',
    processability: ['压铸', '电镀', '喷涂'],
    cost: { material: '20–28 元/kg', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '中金岭南', grade: 'Zamak 5', features: '成分稳定' }
    ],
    alternatives: ['Zamak 3', 'ADC12 铝合金']
  },
  {
    id: 'mat-am60b',
    type: 'Material',
    category: '金属',
    name: 'AM60B 镁合金',
    nameEn: 'AM60B Magnesium Alloy',
    description: '高韧性压铸镁合金，具有极佳的延伸率和抗冲击性能，常用于汽车方向盘、座椅骨架等安全件。',
    image: 'https://picsum.photos/seed/am60b/800/600',
    tags: ['压铸镁合金', '高韧性', '抗冲击', '安全件'],
    properties: {
      density: '1.80 g/cm³',
      hardness: '布氏HB 60',
      tensileStrength: '220–240 MPa',
      yieldStrength: '130 MPa',
      elongation: '8–13%',
      thermalExpansion: '26 x 10⁻⁶ /°C',
      thermalConductivity: '62 W/m·K',
      meltingPoint: '540–615 °C',
      corrosionResistance: '需微弧氧化或电泳保护',
      adhesion: '5B',
      pencilHardness: '≥ 2H',
      glossRange: '20–85 GU',
      colorDeltaE: 'ΔE*ab ≤ 1.5',
      contactAngle: '105°–115° (AF)'
    },
    appearance: '银白色，表面光洁，减震感强。',
    processability: ['压铸', '微弧氧化', '电泳'],
    cost: { material: '25–38 元/kg', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH']
    },
    suppliers: [
      { name: '云海金属', grade: 'AM60B', features: '高韧性级' }
    ],
    alternatives: ['AZ91D 镁合金', '6061 铝合金']
  },
  {
    id: 'mat-ta2',
    type: 'Material',
    category: '金属',
    name: 'TA2 工业纯钛',
    nameEn: 'Grade 2 Titanium',
    description: '工业纯钛，具有优异的耐蚀性、良好的塑性和焊接性，强度中等，生物相容性极佳。',
    image: 'https://picsum.photos/seed/ta2-titanium/800/600',
    tags: ['纯钛', '极高耐蚀', '生物相容', '易成型'],
    properties: {
      density: '4.51 g/cm³',
      hardness: '布氏HB 150',
      tensileStrength: '400–550 MPa',
      yieldStrength: '275–450 MPa',
      elongation: '≥ 20%',
      thermalExpansion: '8.6 x 10⁻⁶ /°C',
      thermalConductivity: '15.0 W/m·K',
      meltingPoint: '1668 °C',
      corrosionResistance: '极佳，耐海水、湿氯气等多种腐蚀介质',
      adhesion: '5B',
      pencilHardness: '≥ 3H',
      glossRange: '5–95 GU',
      colorDeltaE: 'ΔE*ab ≤ 1.2',
      contactAngle: '105°–115° (AF)'
    },
    appearance: '银灰色，质感温润，亲肤性好。',
    processability: ['冲压', '拉伸', 'CNC', '阳极氧化'],
    cost: { material: '120–180 元/kg', tooling: '中等', unit: '高' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS', 'REACH', 'ISO 10993']
    },
    suppliers: [
      { name: '宝钛', grade: 'TA2', features: '高纯度，成型性好' }
    ],
    alternatives: ['TC4 钛合金', '316L 不锈钢']
  },
  {
    id: 'mat-ht200',
    type: 'Material',
    category: '金属',
    name: 'HT200 灰铸铁',
    nameEn: 'Gray Cast Iron HT200',
    description: '灰铸铁，具有良好的铸造性能、减振性、耐磨性和切削加工性，成本低廉，广泛用于机床床身、箱体等。',
    image: 'https://picsum.photos/seed/gray-iron/800/600',
    tags: ['铸铁', '减振', '耐磨', '低成本'],
    properties: {
      density: '7.2 g/cm³',
      hardness: '布氏HB 170–230',
      tensileStrength: '≥ 200 MPa',
      yieldStrength: '无明显屈服点',
      elongation: '≤ 0.5%',
      thermalExpansion: '12 x 10⁻⁶ /°C',
      thermalConductivity: '50 W/m·K',
      meltingPoint: '1150–1250 °C',
      corrosionResistance: '一般，易生锈，需涂装',
      adhesion: '4B (涂装后)',
      pencilHardness: '≥ 2H (喷涂)',
      glossRange: '5–60 GU',
      colorDeltaE: 'ΔE*ab ≤ 2.0',
      contactAngle: 'N/A'
    },
    appearance: '深灰色，断口呈灰色，表面通常较粗糙。',
    processability: ['砂型铸造', '机加工'],
    cost: { material: '4–7 元/kg', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '100%可回收',
      certification: ['RoHS']
    },
    suppliers: [
      { name: '通用铸造', grade: 'HT200', features: '铸件致密' }
    ],
    alternatives: ['HT250 灰铸铁', 'QT400 球墨铸铁']
  },
  {
    id: 'mat-tc4',
    type: 'Material',
    category: '金属',
    name: 'TC4 钛合金 (Ti-6Al-4V)',
    nameEn: 'TC4 Titanium Alloy (Ti-6Al-4V)',
    description: 'α+β型钛合金经典牌号，强度高（比强度是钢的2倍）、密度低（4.51g/cm³）、耐蚀性极强（可裸用海水）、生物相容性优异，是高端3C、医疗、航空航天、户外装备的“黄金合金”。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['钛合金', '高强度', '轻量化', '耐蚀', '生物相容', '高端3C', '医疗'],
    properties: {
      density: '4.51 g/cm³',
      hardness: '退火态 布氏HB 300',
      tensileStrength: '退火态 895 MPa',
      yieldStrength: '退火态 825 MPa',
      elongation: '退火态 10%',
      flexuralModulus: '110000 MPa',
      thermalExpansion: '8.9 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '7.9 W/m·K',
      meltingPoint: '1600–1660 °C',
      corrosionResistance: '表面生成惰性氧化钛钝化膜，耐大气/海水/酸碱腐蚀极强，未防护耐盐雾≥1000h，可无防护裸用',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '基材裸用≥2H、阳极氧化≥4H、PVD镀层≥8H',
      glossRange: '5–95 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.5 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银灰色金属光泽，退火态表面平整，可通过阳极氧化实现“彩虹色”干涉膜层，也可通过抛光、喷砂、PVD镀实现高端质感，裸用长期使用仍能保持外观稳定性。',
    processability: ['热轧', '锻造', 'CNC精密机加工', '激光切割', '阳极氧化（干涉着色）', 'PVD真空镀', '抛光', '激光焊接'],
    cost: { material: '180–300 元/kg（2026年国内市场均价）', tooling: '高', unit: '高' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料需重新熔炼以保证成分均匀性',
      certification: ['RoHS', 'REACH', 'ISO 10993（生物相容）'],
      carbonFootprint: '约15–20 kg CO₂/kg（海绵钛→加工材）'
    },
    suppliers: [
      { name: '宝钛集团', grade: 'TC4 (Ti-6Al-4V)', features: '国内钛业龙头，航空航天/医疗级认证，性能稳定' },
      { name: '西部超导', grade: 'TC4', features: '高端棒材/丝材，医疗植入物专用' },
      { name: '西部材料', grade: 'TC4', features: '板材/带材齐全，3C电子/户外装备专用' },
      { name: '宝鸡钛业', grade: 'TC4', features: '成本优势突出，工业级钛合金' }
    ],
    alternatives: ['TC21 钛合金', 'TA2 纯钛', '316L 不锈钢', '7075-T6 铝合金']
  },
  {
    id: 'mat-h62',
    type: 'Material',
    category: '金属',
    name: 'H62 黄铜 (CuZn37)',
    nameEn: 'H62 Brass (CuZn37)',
    description: '普通黄铜经典牌号，含62%铜+38%锌，塑性与强度平衡优异、易冲压折弯、易焊接、易电镀抛光，导电导热性能好，是五金端子、卫浴洁具、装饰件、锁具的“经典铜合金”。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['黄铜', '易冲压', '易电镀', '导电导热', '卫浴洁具', '五金端子', '装饰件'],
    properties: {
      density: '8.5 g/cm³',
      hardness: '冷轧态 布氏HB 56–140',
      tensileStrength: '冷轧态 335–440 MPa',
      yieldStrength: '冷轧态 ≥170 MPa',
      elongation: '冷轧态 ≥20%',
      flexuralModulus: '100000 MPa',
      thermalExpansion: '19.9 x 10⁻⁶ /°C (20–100°C)',
      thermalConductivity: '108 W/m·K',
      meltingPoint: '885–915 °C',
      corrosionResistance: '大气环境下易氧化变色（铜绿），未防护耐盐雾≥24h，需封孔/电镀防护',
      adhesion: '5B (ISO 2409 / ASTM D3359)',
      pencilHardness: '基材裸用≥HB、电镀≥4H、喷涂≥2H',
      glossRange: '10–95 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.2 (量产批次)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '金黄色金属光泽（本色），冷轧态表面平整光洁，可通过抛光实现镜面，也可通过电镀（仿金/镍/铬）、拉丝、喷砂、做旧实现从奢华到复古的多样化质感，导电导热触感温润。',
    processability: ['热轧', '冷轧', '冲压折弯', '深冲', 'CNC机加工', '抛光', '电镀', '拉丝', '喷砂', '化学做旧', '激光焊接'],
    cost: { material: '50–70 元/kg（2026年国内市场均价）', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料需调整铜锌比例以保证性能',
      certification: ['RoHS', 'REACH', 'FDA（食品接触）'],
      carbonFootprint: '约2.5–3.5 kg CO₂/kg（冷轧态）'
    },
    suppliers: [
      { name: '江西铜业', grade: 'H62', features: '国内铜业龙头，原生铜原料，成分稳定' },
      { name: '铜陵有色', grade: 'H62', features: '高表面质量，易电镀抛光，装饰件专用' },
      { name: '宁波金田', grade: 'H62', features: '棒材/板材/带材齐全，卫浴/端子专用' },
      { name: '海亮股份', grade: 'H62', features: '管材/棒材专长，成本优势突出' }
    ],
    alternatives: ['H59 黄铜', 'H65 黄铜', 'C3604 铅黄铜', '304 不锈钢']
  },
  {
    id: 'mat-403',
    type: 'Material',
    category: '金属',
    name: '403 不锈钢',
    nameEn: '403 Stainless Steel (AISI 403)',
    description: '马氏体铬不锈钢，可通过热处理实现硬化，高温抗氧化性优异，具备中等耐蚀性与良好的抗蒸汽腐蚀能力，力学性能稳定，是动力机械核心部件经典用材。',
    image: 'https://picsum.photos/seed/magnesium-alloy-part/800/600',
    tags: ['可热处理硬化', '耐高温氧化', '抗蒸汽腐蚀', '马氏体', '机械件'],
    properties: {
      density: '7.75 g/cm³',
      hardness: '退火态 布氏HB ≤200；淬火回火态 洛氏HRC 28–40',
      tensileStrength: '退火态 ≥485 MPa；淬火回火态 690–830 MPa',
      yieldStrength: '退火态 ≥275 MPa；淬火回火态 ≥550 MPa',
      elongation: '退火态 ≥25%；淬火回火态 ≥15%',
      flexuralModulus: '193000 MPa',
      impactStrength: '100–150 kJ/m²（退火态，室温）',
      heatDistortionTemp: '长期使用温度 600–650 °C',
      thermalExpansion: '9.9 x 10⁻⁶ /°C (0–100°C)',
      thermalConductivity: '24.9 W/m·K (100°C)',
      meltingPoint: '1427–1510 °C',
      corrosionResistance: '中等耐蚀，优异的抗大气及蒸汽腐蚀能力',
      adhesion: '0级 (ISO 2409 / ASTM D3359)',
      pencilHardness: '≥ 4H (取决于表面处理/涂层)',
      glossRange: '20–95 GU (取决于抛光/喷砂等级)',
      colorDeltaE: 'ΔE*ab ≤ 0.5 (本色) / ΔE*ab ≤ 1.0 (涂装)',
      contactAngle: '105°–115° (AF处理后)'
    },
    appearance: '银白色金属光泽，热轧态带氧化皮，冷轧态表面光洁，可通过抛光、喷砂、钝化实现多样化表面效果，尺寸稳定性优异。',
    processability: ['热轧', '冷轧', '锻造', '热处理', '精密机加工', '焊接', '抛光', '激光切割'],
    cost: { material: '18–32 元/kg（2026年国内市场均价）', tooling: '中等偏高', unit: '中等' },
    sustainability: {
      recycling: '100%可无限循环回收，再生料冶金性能与新料无显著差异',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约2.8–3.5 kg CO₂/kg（热轧态）'
    },
    suppliers: [
      { name: '太原钢铁（太钢）', grade: '12Cr13（国标对应牌号）', features: '通用级马氏体不锈钢，汽轮机叶片专用' },
      { name: '宝武钢铁', grade: 'AISI 403', features: '冷轧光亮态，高尺寸精度，表面质量优异' },
      { name: '浦项制铁', grade: 'POSCO 403', features: '热轧卷/板材，耐高温氧化性能突出' },
      { name: '奥托昆普', grade: 'Outokumpu 403', features: '高纯净度冶炼，抗疲劳与耐蚀性能优异' }
    ],
    alternatives: ['410 不锈钢', '416 不锈钢', '304 不锈钢', '17-4PH 不锈钢']
  },
  {
    id: 'mat-nbr',
    type: 'Material',
    category: '橡胶',
    name: '丁腈橡胶 (NBR)',
    nameEn: 'Nitrile Butadiene Rubber (NBR)',
    description: '合成橡胶经典耐油牌号，由丁二烯与丙烯腈共聚而成，丙烯腈含量越高耐油性越好、弹性越低，具备优异的耐磨、耐溶剂与气密性，手感偏韧，是CMF设计中手柄、密封件、耐油装饰件的核心用材。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['耐油橡胶', '耐磨', '气密性', '手柄', '密封件', '工业设备'],
    properties: {
      density: '0.95–1.05 g/cm³',
      hardness: '邵氏A 50–90（常用70–80）',
      tensileStrength: '10–25 MPa',
      elongation: '300–600%',
      thermalExpansion: '180–220 x 10⁻⁶ /°C',
      thermalConductivity: '0.25–0.30 W/m·K',
      corrosionResistance: '优异的耐矿物油、耐燃油、耐溶剂性能，耐候性一般，不耐臭氧',
      adhesion: '0级 (ISO 2409 / ASTM D3359，表面处理后)',
      glossRange: '10–60 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 2.0 (量产批次)',
      contactAngle: '90°–105°'
    },
    appearance: '本色为淡黄色至棕褐色，量产常用黑色或通过色母粒实现彩色，表面可呈光滑或哑光质感，手感偏韧有弹性，可通过咬花、压纹实现防滑纹理。',
    processability: ['模压成型', '注塑成型', '挤出成型', '压延', '表面喷涂', '丝印', '压纹', '激光雕刻'],
    cost: { material: '15–25 元/kg（2026年国内市场均价，普通级）', tooling: '中等', unit: '中等偏低' },
    sustainability: {
      recycling: '工业回收难度大，以焚烧发电为主，部分可通过脱硫再利用',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约3.0–4.0 kg CO₂/kg'
    },
    suppliers: [
      { name: '朗盛化学', grade: 'Perbunan® NBR', features: '外资品牌，耐油等级齐全，性能稳定' },
      { name: '中石化齐鲁石化', grade: 'NBR 2907', features: '国内龙头，通用级耐油橡胶，成本优势突出' },
      { name: '阿朗新科', grade: 'Krynac® NBR', features: '高丙烯腈含量，耐溶剂性能优异' },
      { name: '宁波顺泽', grade: 'NBR 3350', features: '挤出级专用，表面质量高' }
    ],
    alternatives: ['氯丁橡胶 (CR)', '三元乙丙橡胶 (EPDM)', '热塑性弹性体 (TPE)', '聚氨酯 (PU)']
  },
  {
    id: 'mat-vmq',
    type: 'Material',
    category: '橡胶',
    name: '硅橡胶 (VMQ)',
    nameEn: 'Silicone Rubber (VMQ)',
    description: 'CMF设计“明星橡胶”，由硅氧键主链构成，耐高低温性能极优异（-60~230℃），耐候耐臭氧、耐老化，手感细腻亲肤，食品级/医疗级认证齐全，可实现半透明、彩色、荧光等多样化外观，是穿戴、3C、家电、母婴产品的首选软触感材料。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['硅橡胶', '软触感', '耐高低温', '食品级', '医疗级', '穿戴产品', '3C电子'],
    properties: {
      density: '1.10–1.30 g/cm³',
      hardness: '邵氏A 30–80（常用40–60）',
      tensileStrength: '5–15 MPa',
      elongation: '300–800%',
      thermalExpansion: '250–300 x 10⁻⁶ /°C',
      thermalConductivity: '0.20–0.40 W/m·K（导热硅橡胶可达1.0–5.0 W/m·K）',
      corrosionResistance: '优异的耐候、耐臭氧、耐紫外线老化性能，耐极性溶剂一般，不耐强酸强碱',
      adhesion: '0级 (ISO 2409 / ASTM D3359，表面等离子处理后)',
      glossRange: '5–80 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 1.5 (量产批次)',
      contactAngle: '100°–115° (AF处理后)'
    },
    appearance: '本色为半透明至乳白色，可通过色母粒实现高饱和度彩色、马卡龙色、荧光色、夜光效果，表面可呈细腻光滑、哑光、磨砂或压纹质感，亲肤不粘灰，触感温润。',
    processability: ['模压成型', '注塑成型 (LSR液态硅胶)', '挤出成型', '压延', '表面喷涂', '丝印', '镭雕', '压纹', '等离子处理'],
    cost: { material: '20–40 元/kg（2026年国内市场均价，普通食品级）；80–150 元/kg（医疗级/LSR）', tooling: '中等偏高（LSR需专用模具）', unit: '中等' },
    sustainability: {
      recycling: '工业回收难度大，可通过裂解回收硅氧烷单体，部分可焚烧发电',
      certification: ['RoHS', 'REACH', 'FDA (食品接触)', 'ISO 10993 (生物相容)'],
      carbonFootprint: '约5.0–7.0 kg CO₂/kg'
    },
    suppliers: [
      { name: '陶熙 (原道康宁)', grade: 'Dow Silicones®', features: '外资品牌，食品/医疗级认证齐全，LSR技术领先' },
      { name: '信越化学', grade: 'KE-系列', features: '高端硅橡胶龙头，耐高低温性能突出' },
      { name: '合盛硅业', grade: 'HS-系列', features: '国内硅基材料龙头，通用级成本优势突出' },
      { name: '新安化工', grade: 'XinAn Silicone', features: '全产业链覆盖，挤出/模压级齐全' }
    ],
    alternatives: ['热塑性弹性体 (TPE)', '聚氨酯 (PU)', '三元乙丙橡胶 (EPDM)', '氟硅橡胶 (FVMQ)']
  },
  {
    id: 'mat-epdm',
    type: 'Material',
    category: '橡胶',
    name: '三元乙丙橡胶 (EPDM)',
    nameEn: 'Ethylene Propylene Diene Monomer Rubber (EPDM)',
    description: '户外耐候橡胶首选，由乙烯、丙烯与少量二烯烃共聚而成，主链无双键，耐臭氧、耐紫外线、耐老化性能极优异，长期户外使用不开裂，弹性好、绝缘性佳，是户外产品密封、把手、装饰条的核心用材。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['耐候橡胶', '耐臭氧', '耐老化', '户外产品', '密封件', '装饰条', '绝缘'],
    properties: {
      density: '0.86–0.92 g/cm³',
      hardness: '邵氏A 50–90（常用60–70）',
      tensileStrength: '10–20 MPa',
      elongation: '300–600%',
      thermalExpansion: '200–250 x 10⁻⁶ /°C',
      thermalConductivity: '0.20–0.30 W/m·K',
      corrosionResistance: '极优异的耐候、耐臭氧、耐紫外线老化性能，耐极性溶剂、耐酸碱，耐油性差',
      adhesion: '0级 (ISO 2409 / ASTM D3359，表面处理后)',
      glossRange: '10–50 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 2.0 (量产批次)',
      contactAngle: '95°–105°'
    },
    appearance: '本色为乳白色至淡黄色，量产常用黑色或通过色母粒实现彩色，表面可呈哑光或半光滑质感，弹性好，可通过挤出实现复杂截面装饰条，压纹实现防滑效果。',
    processability: ['模压成型', '注塑成型', '挤出成型', '压延', '表面喷涂', '丝印', '压纹', '激光雕刻'],
    cost: { material: '12–20 元/kg（2026年国内市场均价，普通级）', tooling: '中等', unit: '中等偏低' },
    sustainability: {
      recycling: '工业回收难度大，以焚烧发电为主',
      certification: ['RoHS', 'REACH', 'FDA (食品接触，部分牌号)'],
      carbonFootprint: '约2.5–3.5 kg CO₂/kg'
    },
    suppliers: [
      { name: '陶氏化学', grade: 'Nordel™ EPDM', features: '外资品牌，耐候等级齐全，性能稳定' },
      { name: '埃克森美孚', grade: 'Vistalon™ EPDM', features: '高乙烯含量，强度与弹性平衡优异' },
      { name: '中石化燕山石化', grade: 'EPDM 3092', features: '国内龙头，通用级耐候橡胶，成本优势突出' },
      { name: '朗盛化学', grade: 'Keltan® EPDM', features: '挤出级专用，表面质量高' }
    ],
    alternatives: ['硅橡胶 (VMQ)', '氯丁橡胶 (CR)', '热塑性弹性体 (TPE)', '丁苯橡胶 (SBR)']
  },
  {
    id: 'mat-nr',
    type: 'Material',
    category: '橡胶',
    name: '天然橡胶 (NR)',
    nameEn: 'Natural Rubber (NR)',
    description: '传统高弹性橡胶，由三叶橡胶树分泌的胶乳加工而成，主链为顺式聚异戊二烯，弹性极高、耐磨性能优异、抗撕裂强度好，手感偏弹，是鞋底、减震件、运动器材的经典用材。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['天然橡胶', '高弹性', '耐磨', '减震', '鞋底', '运动器材'],
    properties: {
      density: '0.91–0.93 g/cm³',
      hardness: '邵氏A 40–90（常用50–70）',
      tensileStrength: '20–30 MPa',
      elongation: '500–800%',
      thermalExpansion: '180–220 x 10⁻⁶ /°C',
      thermalConductivity: '0.20–0.30 W/m·K',
      corrosionResistance: '优异的弹性、耐磨、抗撕裂性能，耐候性一般，不耐臭氧、不耐油、不耐酸碱',
      adhesion: '0级 (ISO 2409 / ASTM D3359，表面处理后)',
      glossRange: '10–50 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 2.0 (量产批次)',
      contactAngle: '90°–100°'
    },
    appearance: '本色为淡黄色半透明，量产常用黑色或通过炭黑/色母粒实现彩色，表面可呈光滑、哑光或压纹质感，弹性极佳，触感偏弹有韧性。',
    processability: ['模压成型', '压延成型', '挤出成型', '注塑成型', '表面喷涂', '丝印', '压纹', '激光雕刻'],
    cost: { material: '10–15 元/kg（2026年国内市场均价，天然胶乳/干胶）', tooling: '低', unit: '低' },
    sustainability: {
      recycling: '可生物降解（自然环境下缓慢降解），工业回收以翻新为主，部分可通过脱硫再利用',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约1.0–2.0 kg CO₂/kg（天然种植胶，含碳汇）'
    },
    suppliers: [
      { name: '海南橡胶', grade: 'SCR WF (全乳胶)', features: '国内天然橡胶龙头，海南产区，品质稳定' },
      { name: '云南农垦', grade: 'SCR 5 (标准胶)', features: '云南产区，耐磨性能突出' },
      { name: '泰国正大', grade: 'STR 20', features: '泰国进口，通用级天然橡胶' },
      { name: '马来西亚橡胶局', grade: 'SMR 20', features: '马来西亚进口，品质均匀' }
    ],
    alternatives: ['丁苯橡胶 (SBR)', '顺丁橡胶 (BR)', '热塑性弹性体 (TPE)', '聚氨酯 (PU)']
  },
  {
    id: 'mat-cr',
    type: 'Material',
    category: '橡胶',
    name: '氯丁橡胶 (CR)',
    nameEn: 'Chloroprene Rubber (CR)',
    description: '综合性能均衡的耐候耐油橡胶，由氯丁二烯聚合而成，主链含氯原子，耐候、耐臭氧、耐油、阻燃性能均优异，弹性好、粘结性佳，是密封件、电缆护套、胶粘剂的常用材料。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['氯丁橡胶', '耐候', '耐油', '阻燃', '密封件', '电缆护套', '胶粘剂'],
    properties: {
      density: '1.23–1.28 g/cm³',
      hardness: '邵氏A 50–90（常用60–80）',
      tensileStrength: '15–25 MPa',
      elongation: '400–600%',
      thermalExpansion: '180–220 x 10⁻⁶ /°C',
      thermalConductivity: '0.25–0.35 W/m·K',
      corrosionResistance: '均衡的耐候、耐臭氧、耐油、耐溶剂性能，阻燃性优异（离火自熄），耐强酸强碱一般',
      adhesion: '0级 (ISO 2409 / ASTM D3359，表面处理后)',
      glossRange: '10–50 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 2.0 (量产批次)',
      contactAngle: '95°–105°'
    },
    appearance: '本色为淡黄色至棕褐色，量产常用黑色，表面可呈光滑或哑光质感，弹性好，粘结性佳，可通过压纹实现防滑效果。',
    processability: ['模压成型', '注塑成型', '挤出成型', '压延', '表面喷涂', '丝印', '压纹', '激光雕刻'],
    cost: { material: '20–30 元/kg（2026年国内市场均价，普通级）', tooling: '中等', unit: '中等' },
    sustainability: {
      recycling: '工业回收难度大，以焚烧发电为主',
      certification: ['RoHS', 'REACH'],
      carbonFootprint: '约3.5–4.5 kg CO₂/kg'
    },
    suppliers: [
      { name: '朗盛化学', grade: 'Baypren® CR', features: '外资品牌，耐候耐油等级齐全' },
      { name: '中石化重庆长寿', grade: 'CR 232', features: '国内龙头，通用级氯丁橡胶，成本优势突出' },
      { name: 'Denka', grade: 'Denka Chloroprene', features: '日本进口，粘结性能优异' },
      { name: '山西合成橡胶', grade: 'CR 121', features: '挤出级专用，表面质量高' }
    ],
    alternatives: ['丁腈橡胶 (NBR)', '三元乙丙橡胶 (EPDM)', '氯磺化聚乙烯 (CSM)', '热塑性弹性体 (TPE)']
  },
  {
    id: 'mat-fkm',
    type: 'Material',
    category: '橡胶',
    name: '氟橡胶 (FKM)',
    nameEn: 'Fluoroelastomer (FKM)',
    description: '高端耐化学耐高温橡胶，主链含氟原子，化学稳定性极优异，耐强酸强碱、耐有机溶剂、耐高温（-20~250℃），是化工、航空航天、高端汽车密封件的核心用材，CMF设计中用于极端环境下的功能装饰件。',
    image: 'https://picsum.photos/seed/800/600',
    tags: ['氟橡胶', '耐化学', '耐高温', '高端密封', '化工', '航空航天'],
    properties: {
      density: '1.80–2.00 g/cm³',
      hardness: '邵氏A 70–90（常用75–85）',
      tensileStrength: '10–20 MPa',
      elongation: '200–400%',
      thermalExpansion: '150–200 x 10⁻⁶ /°C',
      thermalConductivity: '0.25–0.35 W/m·K',
      corrosionResistance: '极优异的耐强酸强碱、耐有机溶剂、耐燃油性能，耐高温耐候，弹性一般',
      adhesion: '0级 (ISO 2409 / ASTM D3359，表面等离子处理后)',
      glossRange: '10–40 GU (取决于表面处理工艺)',
      colorDeltaE: 'ΔE*ab ≤ 2.0 (量产批次)',
      contactAngle: '105°–115°'
    },
    appearance: '本色为黑色或棕色，表面可呈光滑或半哑光质感，手感偏硬偏韧，可通过模压实现复杂结构件。',
    processability: ['模压成型', '注塑成型', '挤出成型', '表面喷涂', '激光雕刻', '等离子处理'],
    cost: { material: '150–300 元/kg（2026年国内市场均价，普通级）；300–600 元/kg（高端牌号）', tooling: '高', unit: '高' },
    sustainability: {
      recycling: '工业回收难度极大，以专业焚烧处理为主',
      certification: ['RoHS', 'REACH', 'FDA (食品接触，部分牌号)'],
      carbonFootprint: '约10–15 kg CO₂/kg'
    },
    suppliers: [
      { name: '大金化学', grade: 'Daikin DAI-EL®', features: '外资品牌，耐化学等级齐全，性能稳定' },
      { name: '3M', grade: '3M™ Dyneon™', features: '高端氟橡胶龙头，耐高温性能突出' },
      { name: '中昊晨光', grade: 'FKM 26', features: '国内龙头，通用级氟橡胶，成本优势突出' },
      { name: '东岳集团', grade: 'FKM 246', features: '挤出/模压级齐全' }
    ],
    alternatives: ['氟硅橡胶 (FVMQ)', '全氟醚橡胶 (FFKM)', '聚四氟乙烯 (PTFE)', '丁腈橡胶 (NBR)']
  },
  {
    id: 'mat-walnut',
    type: 'Material',
    category: '木材和纸',
    name: '胡桃木',
    nameEn: 'Walnut Wood',
    description: '高档硬木，纹理优美，色泽深沉，常用于高端家具和内饰。',
    image: 'https://picsum.photos/seed/walnut-wood/800/600',
    tags: ['天然', '高端', '纹理'],
    appearance: '深褐色至黑褐色，纹理直或略交错。',
    processability: ['切割', '雕刻', '打磨', '涂油'],
    cost: { material: '高', tooling: '低', unit: '高' }
  },
  {
    id: 'mat-tempered-glass',
    type: 'Material',
    category: '玻璃陶瓷',
    name: '钢化玻璃',
    nameEn: 'Tempered Glass',
    description: '通过热处理或化学处理提高强度的安全玻璃。',
    image: 'https://picsum.photos/seed/tempered-glass/800/600',
    tags: ['高强度', '透明', '安全'],
    appearance: '极高透明度，表面平整坚硬。',
    processability: ['切割 (预加工)', '钢化', '丝印', '镀膜'],
    cost: { material: '中等', tooling: '中等', unit: '中等' }
  },
  {
    id: 'mat-polyester',
    type: 'Material',
    category: '纺织面料',
    name: '涤纶',
    nameEn: 'Polyester',
    description: '合成纤维，强度高，弹性好，耐磨性优良。',
    image: 'https://picsum.photos/seed/polyester-fabric/800/600',
    tags: ['耐磨', '易打理', '多色'],
    appearance: '多种织纹，手感多样。',
    processability: ['编织', '裁剪', '缝制', '热压'],
    cost: { material: '低', tooling: '低', unit: '低' }
  }
,
  {
    "id": "mat-white-oak",
    "type": "Material",
    "category": "木材",
    "name": "白橡木",
    "nameEn": "White Oak (Quercus alba)",
    "description": "CMF设计高端实木首选，北美经典硬木，纹理粗犷大气呈山形纹/直纹，心材浅棕色至深褐色，边材奶白色，密度高、耐腐性强（天然耐腐等级Ⅰ级），质感温润有质感，是高端家具、地板、装饰面板、酒桶的核心用材。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "高端硬木",
      "山形纹",
      "耐腐",
      "温润质感",
      "高端家具",
      "地板",
      "装饰面板"
    ],
    "properties": {
      "density": "0.72–0.78 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1360 lbf（6050 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 103 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 51 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 12200 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 12.5 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "5.0–7.0 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.17–0.19 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅰ级（极强，GB/T 13942.1-2009），心材耐腐耐白蚁，边材易受虫蛀，适合户外/潮湿环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "10–70 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.5 (同批次精选材，ASTM D2244)",
      "contactAngle": "80°–95° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材浅棕色至深褐色，边材奶白色至浅黄白色，纹理粗犷大气，以山形纹为主，偶见直纹，切面光滑有光泽，质感温润细腻，随使用时间会逐渐氧化加深，呈现自然包浆效果。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/硝基漆）",
      "激光雕刻",
      "热压弯曲"
    ],
    "cost": {
      "material": "8000–15000 元/m³（2026年国内市场均价，FSC认证普通级）；18000–30000 元/m³（精选级/无节材）",
      "tooling": "中等",
      "unit": "高"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.8 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.5–1.0 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "美国硬木协会 (AHEC)",
        "grade": "FAS White Oak",
        "features": "北美进口，FAS顶级材，纹理均匀，无节或少节"
      },
      {
        "name": "大自然家居",
        "grade": "FSC白橡",
        "features": "国内地板/家具龙头，供应链稳定，精选级材"
      },
      {
        "name": "圣象集团",
        "grade": "FAS白橡",
        "features": "地板专用材，尺寸稳定性高"
      },
      {
        "name": "加拿大硬木公司",
        "grade": "Canadian White Oak",
        "features": "加拿大进口，颜色偏浅，直纹比例高"
      }
    ],
    "alternatives": [
      "红橡木",
      "欧洲白蜡木",
      "水曲柳",
      "樱桃木",
      "MDF贴白橡木皮"
    ]
  },
  {
    "id": "mat-black-walnut",
    "type": "Material",
    "category": "木材",
    "name": "黑胡桃木",
    "nameEn": "Black Walnut (Juglans nigra)",
    "description": "CMF设计“奢侈品级”木材，北美硬木天花板，心材呈独特的巧克力色至深紫褐色，边材奶白色，纹理细腻流畅呈直纹/波浪纹/鸟眼纹，密度适中、稳定性极佳，质感奢华温润，是高端家具、装饰面板、乐器、工艺品的首选。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "奢侈品级木材",
      "巧克力色",
      "细腻纹理",
      "奢华质感",
      "高端家具",
      "装饰面板",
      "乐器"
    ],
    "properties": {
      "density": "0.63–0.69 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1010 lbf（4490 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 98 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 52 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 11600 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 11.0 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "4.5–6.5 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.15–0.17 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅱ级（强，GB/T 13942.1-2009），心材耐腐性优异，边材易受虫蛀，适合室内环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "20–80 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.0 (同批次精选材，ASTM D2244)",
      "contactAngle": "85°–100° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材呈独特的巧克力色至深紫褐色，偶带深色条纹，边材奶白色至浅黄白色，纹理细腻流畅，以直纹为主，偶见波浪纹、鸟眼纹等稀有纹理，切面光滑有丝绸般光泽，质感奢华温润，随使用时间会逐渐氧化呈现更浓郁的包浆效果。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/硝基漆，建议清涂以展示纹理）",
      "激光雕刻",
      "热压弯曲"
    ],
    "cost": {
      "material": "15000–25000 元/m³（2026年国内市场均价，FSC认证普通级）；30000–60000 元/m³（精选级/无节材/稀有纹理材）",
      "tooling": "中等偏高",
      "unit": "极高"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.7 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.6–1.2 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "美国硬木协会 (AHEC)",
        "grade": "FAS Black Walnut",
        "features": "北美进口，FAS顶级材，颜色均匀，稀有纹理可选"
      },
      {
        "name": "美克家居",
        "grade": "FSC黑胡桃",
        "features": "国内高端家具龙头，精选级材，供应链稳定"
      },
      {
        "name": "曲美家居",
        "grade": "FAS黑胡桃",
        "features": "家具专用材，尺寸稳定性高"
      },
      {
        "name": "加拿大硬木公司",
        "grade": "Canadian Black Walnut",
        "features": "加拿大进口，颜色偏深，纹理细腻"
      }
    ],
    "alternatives": [
      "樱桃木",
      "柚木",
      "红橡木",
      "黑檀木（仿）",
      "MDF贴黑胡桃木皮"
    ]
  },
  {
    "id": "mat-cherry",
    "type": "Material",
    "category": "木材",
    "name": "樱桃木",
    "nameEn": "Cherry (Prunus serotina)",
    "description": "CMF设计“优雅派”木材，北美经典硬木，心材初呈浅红色至粉红色，随使用时间逐渐氧化为浓郁的红棕色至酒红色，边材奶白色，纹理细腻柔和呈直纹/波浪纹，密度适中、稳定性好，质感温润优雅，是高端家具、装饰面板、乐器的常用材。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "优雅硬木",
      "氧化变色",
      "红棕色",
      "细腻纹理",
      "高端家具",
      "装饰面板",
      "乐器"
    ],
    "properties": {
      "density": "0.60–0.66 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 950 lbf（4220 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 92 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 49 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 10900 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 10.5 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "4.8–6.8 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.14–0.16 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅱ级（强，GB/T 13942.1-2009），心材耐腐性优异，边材易受虫蛀，适合室内环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "15–75 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.0 (同批次精选材，氧化前，ASTM D2244)",
      "contactAngle": "80°–95° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材初呈浅红色至粉红色，随使用时间逐渐氧化为浓郁的红棕色至酒红色，边材奶白色至浅黄白色，纹理细腻柔和，以直纹为主，偶见波浪纹，切面光滑有柔和光泽，质感温润优雅，氧化变色特性是其核心魅力。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/硝基漆，建议清涂以展示氧化效果）",
      "激光雕刻",
      "热压弯曲"
    ],
    "cost": {
      "material": "10000–18000 元/m³（2026年国内市场均价，FSC认证普通级）；22000–35000 元/m³（精选级/无节材）",
      "tooling": "中等",
      "unit": "高"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.6 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.5–1.1 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "美国硬木协会 (AHEC)",
        "grade": "FAS Cherry",
        "features": "北美进口，FAS顶级材，颜色均匀，氧化效果好"
      },
      {
        "name": "宜家家居（高端线）",
        "grade": "FSC樱桃木",
        "features": "国际品牌，供应链稳定，精选级材"
      },
      {
        "name": "红苹果家具",
        "grade": "FAS樱桃木",
        "features": "家具专用材，尺寸稳定性高"
      },
      {
        "name": "加拿大硬木公司",
        "grade": "Canadian Cherry",
        "features": "加拿大进口，颜色偏浅，纹理细腻"
      }
    ],
    "alternatives": [
      "黑胡桃木",
      "柚木",
      "红橡木",
      "榉木",
      "MDF贴樱桃木皮"
    ]
  },
  {
    "id": "mat-hard-maple",
    "type": "Material",
    "category": "木材",
    "name": "硬枫木",
    "nameEn": "Hard Maple (Acer saccharum)",
    "description": "CMF设计“清新派”木材，北美经典硬木，心材奶白色至浅黄白色，边材与心材颜色接近，纹理细腻均匀呈直纹/鸟眼纹/虎斑纹，密度高、硬度高、耐磨性极佳，质感清新干净，是地板、家具、乐器（钢琴/小提琴）、运动器材的核心用材。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "清新硬木",
      "奶白色",
      "细腻均匀",
      "耐磨",
      "地板",
      "乐器",
      "运动器材"
    ],
    "properties": {
      "density": "0.68–0.74 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1450 lbf（6450 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 109 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 54 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 12600 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 13.0 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "4.2–6.2 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.16–0.18 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅲ级（中等，GB/T 13942.1-2009），心材耐腐性一般，边材易受虫蛀，适合室内干燥环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "10–80 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 1.5 (同批次精选材，ASTM D2244)",
      "contactAngle": "80°–95° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材与边材颜色接近，呈奶白色至浅黄白色，纹理细腻均匀，以直纹为主，偶见鸟眼纹、虎斑纹等稀有纹理，切面光滑有柔和光泽，质感清新干净，不易变色，适合打造简约现代风格。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/白色漆，清涂可展示清新质感）",
      "激光雕刻",
      "热压弯曲"
    ],
    "cost": {
      "material": "9000–16000 元/m³（2026年国内市场均价，FSC认证普通级）；20000–32000 元/m³（精选级/无节材/稀有纹理材）",
      "tooling": "中等",
      "unit": "高"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.7 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.5–1.0 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "美国硬木协会 (AHEC)",
        "grade": "FAS Hard Maple",
        "features": "北美进口，FAS顶级材，颜色均匀，稀有纹理可选"
      },
      {
        "name": "圣象集团",
        "grade": "FSC硬枫木",
        "features": "国内地板龙头，地板专用材，耐磨性高"
      },
      {
        "name": "雅马哈乐器",
        "grade": "FAS硬枫木",
        "features": "乐器专用材，声学性能优异"
      },
      {
        "name": "加拿大硬木公司",
        "grade": "Canadian Hard Maple",
        "features": "加拿大进口，颜色偏白，纹理细腻"
      }
    ],
    "alternatives": [
      "榉木",
      "白橡木",
      "水曲柳",
      "桦木",
      "MDF贴硬枫木皮"
    ]
  },
  {
    "id": "mat-european-beech",
    "type": "Material",
    "category": "木材",
    "name": "欧洲榉木",
    "nameEn": "European Beech (Fagus sylvatica)",
    "description": "CMF设计“实用派”木材，欧洲经典硬木，心材与边材颜色接近，呈浅黄白色至浅红褐色，纹理细腻均匀呈直纹/波浪纹，密度适中、稳定性好、易加工，质感温润朴实，性价比高，是家具、地板、装饰面板、工艺品的常用材。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "实用硬木",
      "浅黄白色",
      "细腻均匀",
      "性价比高",
      "家具",
      "地板",
      "装饰面板"
    ],
    "properties": {
      "density": "0.69–0.75 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1220 lbf（5420 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 105 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 50 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 11900 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 12.0 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "5.2–7.2 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.16–0.18 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅲ级（中等，GB/T 13942.1-2009），心材耐腐性一般，边材易受虫蛀，适合室内干燥环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "10–70 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.0 (同批次精选材，ASTM D2244)",
      "contactAngle": "80°–95° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材与边材颜色接近，呈浅黄白色至浅红褐色，纹理细腻均匀，以直纹为主，偶见波浪纹，切面光滑有柔和光泽，质感温润朴实，性价比高，适合打造简约、北欧、日式风格。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/色漆）",
      "激光雕刻",
      "热压弯曲",
      "蒸汽弯曲"
    ],
    "cost": {
      "material": "6000–12000 元/m³（2026年国内市场均价，FSC认证普通级）；15000–22000 元/m³（精选级/无节材）",
      "tooling": "中等",
      "unit": "中等"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.7 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CE"
      ],
      "carbonFootprint": "约0.4–0.9 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "欧洲硬木协会 (FEBO)",
        "grade": "FAS European Beech",
        "features": "欧洲进口，FAS顶级材，颜色均匀，稳定性高"
      },
      {
        "name": "大自然家居",
        "grade": "FSC榉木",
        "features": "国内地板/家具龙头，供应链稳定，性价比高"
      },
      {
        "name": "曲美家居",
        "grade": "FAS榉木",
        "features": "家具专用材，易加工，适合北欧风格"
      },
      {
        "name": "德国硬木公司",
        "grade": "German Beech",
        "features": "德国进口，颜色偏浅，纹理细腻"
      }
    ],
    "alternatives": [
      "硬枫木",
      "白橡木",
      "水曲柳",
      "桦木",
      "MDF贴榉木皮"
    ]
  },
  {
    "id": "mat-ash",
    "type": "Material",
    "category": "木材",
    "name": "水曲柳",
    "nameEn": "Ash (Fraxinus mandshurica)",
    "description": "CMF设计“经典东北硬木”，国产经典硬木，心材浅棕色至深褐色，边材奶白色，纹理粗犷大气呈山形纹/直纹，密度适中、韧性好、易加工，质感朴实大气，是家具、地板、装饰面板、运动器材的常用材，性价比高于白橡木。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "经典硬木",
      "山形纹",
      "韧性好",
      "性价比高",
      "家具",
      "地板",
      "运动器材"
    ],
    "properties": {
      "density": "0.65–0.71 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1120 lbf（4980 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 100 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 51 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 11300 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 12.5 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "5.5–7.5 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.15–0.17 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅲ级（中等，GB/T 13942.1-2009），心材耐腐性一般，边材易受虫蛀，适合室内干燥环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "10–70 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.5 (同批次精选材，ASTM D2244)",
      "contactAngle": "80°–95° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材浅棕色至深褐色，边材奶白色至浅黄白色，纹理粗犷大气，以山形纹为主，偶见直纹，切面光滑有光泽，质感朴实大气，性价比高，是白橡木的经典替代材。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/色漆）",
      "激光雕刻",
      "热压弯曲",
      "蒸汽弯曲"
    ],
    "cost": {
      "material": "5000–10000 元/m³（2026年国内市场均价，FSC认证国产普通级）",
      "tooling": "中等",
      "unit": "中等"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.6 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.4–0.9 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "中国林业集团",
        "grade": "FSC水曲柳",
        "features": "国产东北材，供应链稳定，性价比高"
      },
      {
        "name": "圣象集团",
        "grade": "FSC水曲柳",
        "features": "地板专用材，尺寸稳定性高"
      },
      {
        "name": "吉林森工",
        "grade": "FSC水曲柳",
        "features": "国产东北材，韧性好，适合运动器材"
      }
    ],
    "alternatives": [
      "白橡木",
      "红橡木",
      "榉木",
      "榆木",
      "MDF贴水曲柳木皮"
    ]
  },
  {
    "id": "mat-white-ash",
    "type": "Material",
    "category": "木材",
    "name": "白蜡木",
    "nameEn": "White Ash (Fraxinus americana)",
    "description": "CMF设计“北美经典硬木”，北美进口硬木，心材浅棕灰色至深褐色，边材奶白色至浅黄白色，纹理细腻流畅呈直纹/山形纹，密度适中、韧性极佳、耐磨性好，质感沉稳大气，是家具、地板、运动器材、装饰面板的常用材，适配多种风格设计。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "北美硬木",
      "直纹",
      "韧性极佳",
      "耐磨",
      "家具",
      "地板",
      "运动器材"
    ],
    "properties": {
      "density": "0.63–0.69 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1290 lbf（5740 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 104 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 51 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 11800 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 13.2 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "5.3–7.3 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.15–0.17 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅲ级（中等，GB/T 13942.1-2009），心材耐腐性一般，边材易受虫蛀，适合室内干燥环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "10–75 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.5 (同批次精选材，ASTM D2244)",
      "contactAngle": "80°–95° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材浅棕灰色至深褐色，边材奶白色至浅黄白色，纹理细腻流畅，以直纹为主，偶见山形纹，切面光滑有柔和光泽，质感沉稳大气，加工后表面平整，适配简约、美式等多种设计风格。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/色漆）",
      "激光雕刻",
      "热压弯曲",
      "蒸汽弯曲"
    ],
    "cost": {
      "material": "12000–18000 元/m³（2026年国内市场均价，FSC认证北美进口普通级）；20000–30000 元/m³（精选级/无节材）",
      "tooling": "中等",
      "unit": "高"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.6 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.6–1.1 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "美国硬木协会 (AHEC)",
        "grade": "FAS White Ash",
        "features": "北美进口，FAS顶级材，纹理均匀，韧性极佳"
      },
      {
        "name": "加拿大硬木公司",
        "grade": "Canadian White Ash",
        "features": "加拿大进口，颜色偏浅，直纹比例高"
      },
      {
        "name": "曲美家居",
        "grade": "FSC白蜡木",
        "features": "家具专用材，尺寸稳定性高"
      },
      {
        "name": "圣象集团",
        "grade": "FSC白蜡木",
        "features": "地板专用材，耐磨性好"
      }
    ],
    "alternatives": [
      "水曲柳",
      "白橡木",
      "红橡木",
      "榉木",
      "MDF贴白蜡木皮"
    ]
  },
  {
    "id": "mat-radiata-pine",
    "type": "Material",
    "category": "木材",
    "name": "辐射松",
    "nameEn": "Radiata Pine (Pinus radiata)",
    "description": "CMF设计“性价比之王”软木，新西兰/智利进口速生材，心材浅黄白色至浅红褐色，边材奶白色，纹理直且均匀，密度低、易加工、价格低廉，质感轻松自然，是家具、地板、装饰面板、木结构建筑的常用材，也是人造板（MDF/刨花板/胶合板）的核心原料。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "性价比软木",
      "速生材",
      "易加工",
      "价格低廉",
      "家具",
      "人造板原料",
      "木结构"
    ],
    "properties": {
      "density": "0.45–0.53 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 480 lbf（2130 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 65 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 40 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 8200 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 7.5 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "6.0–8.0 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.12–0.14 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅳ级（弱，GB/T 13942.1-2009），心材耐腐性差，边材易受虫蛀，需做防腐处理，适合室内干燥环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨后)",
      "pencilHardness": "取决于表面涂层 (清漆通常为 1H-2H)",
      "glossRange": "10–60 GU (取决于表面涂装工艺，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.5 (同批次精选材，ASTM D2244)",
      "contactAngle": "75°–90° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材浅黄白色至浅红褐色，边材奶白色，纹理直且均匀，切面光滑有柔和光泽，质感轻松自然，价格低廉，适合打造简约、北欧、日式风格，也可通过涂装模仿硬木效果。",
    "processability": [
      "锯切",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合",
      "涂装（清漆/木蜡油/色漆）",
      "激光雕刻",
      "热压弯曲",
      "防腐处理"
    ],
    "cost": {
      "material": "1500–3000 元/m³（2026年国内市场均价，FSC认证普通级）；4000–6000 元/m³（精选级/无节材）",
      "tooling": "低",
      "unit": "低"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，速生材碳汇能力极强（固碳能力约1.5 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "CARB Phase 2"
      ],
      "carbonFootprint": "约0.2–0.5 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "新西兰林业协会 (NZFOA)",
        "grade": "FSC Radiata Pine",
        "features": "新西兰进口，速生材，供应链稳定，性价比高"
      },
      {
        "name": "智利林业公司",
        "grade": "FSC Radiata Pine",
        "features": "智利进口，颜色偏浅，纹理直"
      },
      {
        "name": "吉林森工",
        "grade": "FSC辐射松",
        "features": "国内加工，人造板原料专用"
      },
      {
        "name": "大亚圣象",
        "grade": "FSC辐射松",
        "features": "地板/家具专用材，易加工"
      }
    ],
    "alternatives": [
      "樟子松",
      "云杉",
      "MDF",
      "刨花板",
      "胶合板"
    ]
  },
  {
    "id": "mat-teak",
    "type": "Material",
    "category": "木材",
    "name": "柚木",
    "nameEn": "Teak (Tectona grandis)",
    "description": "CMF设计“户外之王”木材，东南亚经典硬木，心材初呈浅黄褐色，随使用时间逐渐氧化为浓郁的金褐色至深褐色，边材奶白色，纹理直或略交错，密度适中、天然耐腐性极强（含硅）、稳定性极佳，质感奢华大气，是户外家具、地板、游艇、园林景观的首选。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "户外之王",
      "天然耐腐",
      "金褐色",
      "奢华大气",
      "户外家具",
      "地板",
      "游艇"
    ],
    "properties": {
      "density": "0.62–0.68 g/cm³（气干密度，ASTM D2395）",
      "hardness": "詹卡硬度 1070 lbf（4760 N，ASTM D143）",
      "tensileStrength": "顺纹抗拉 95 MPa（ASTM D143）",
      "yieldStrength": "顺纹抗压 54 MPa（ASTM D143）",
      "elongation": "1-2%（顺纹）",
      "flexuralModulus": "抗弯弹性模量 11000 MPa（ASTM D143）",
      "impactStrength": "冲击韧性 10.5 kJ/m²（ASTM D256）",
      "heatDistortionTemp": "N/A（木材无热变形温度，150°C开始热降解）",
      "thermalExpansion": "4.5–6.5 x 10⁻⁶ /°C（顺纹，ASTM D696）",
      "thermalConductivity": "0.15–0.17 W/m·K（ASTM C177）",
      "meltingPoint": "N/A（不熔化，约250–300°C分解）",
      "corrosionResistance": "天然耐腐等级Ⅰ级（极强，GB/T 13942.1-2009），心材含硅，耐腐耐白蚁耐海水，边材易受虫蛀，适合户外/潮湿/海洋环境",
      "adhesion": "0级 (ISO 2409 / ASTM D3359，表面打磨去硅后)",
      "pencilHardness": "取决于表面涂层 (建议木蜡油/清涂)",
      "glossRange": "10–70 GU (取决于表面涂装工艺，清涂随氧化会逐渐呈现自然光泽，ASTM D523)",
      "colorDeltaE": "ΔE*ab ≤ 2.0 (同批次精选材，氧化前，ASTM D2244)",
      "contactAngle": "90°–105° (表面涂饰后，ASTM D7334)"
    },
    "appearance": "心材初呈浅黄褐色，随使用时间逐渐氧化为浓郁的金褐色至深褐色，边材奶白色，纹理直或略交错，切面光滑有油脂感（含硅），质感奢华大气，户外使用无需涂漆也能保持稳定性，自然包浆效果是其核心魅力。",
    "processability": [
      "锯切（需专用刀具，因含硅易磨损）",
      "刨削",
      "砂光",
      "雕刻",
      "榫卯",
      "胶合（需表面去硅）",
      "涂装（建议木蜡油/清漆，不建议色漆以展示自然氧化）",
      "激光雕刻"
    ],
    "cost": {
      "material": "12000–20000 元/m³（2026年国内市场均价，FSC认证缅甸/印尼普通级）；25000–45000 元/m³（精选级/无节材/老柚木）",
      "tooling": "中等偏高",
      "unit": "极高"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可翻新、可降解，是碳汇材料（固碳能力约1.6 kg CO₂/kg木材）",
      "certification": [
        "FSC",
        "PEFC",
        "Lacey Act"
      ],
      "carbonFootprint": "约0.7–1.3 kg CO₂/kg（含种植、采伐、加工，不含运输）"
    },
    "suppliers": [
      {
        "name": "缅甸林业公司",
        "grade": "FSC Teak",
        "features": "缅甸进口，老柚木，颜色浓郁，耐腐性强"
      },
      {
        "name": "印尼林业公司",
        "grade": "FSC Teak",
        "features": "印尼进口， plantation teak，供应链稳定"
      },
      {
        "name": "大自然家居（户外线）",
        "grade": "FSC柚木",
        "features": "国内户外家具/地板龙头，精选级材"
      },
      {
        "name": "泰国林业公司",
        "grade": "FSC Teak",
        "features": "泰国进口，颜色偏浅，性价比高"
      }
    ],
    "alternatives": [
      "菠萝格",
      "巴劳木",
      "重蚁木",
      "黑胡桃木（室内）",
      "MDF贴柚木皮"
    ]
  },
  {
    "id": "mat-copperplate-paper",
    "type": "Material",
    "category": "纸",
    "name": "铜版纸",
    "nameEn": "Copper Plate Paper (Coated Offset Paper)",
    "description": "CMF设计印刷核心用材，以漂白化学木浆为基料，表面涂布碳酸钙/瓷土涂层，分高光铜版与哑光铜版两类。纹理细腻、色彩还原度极高、光泽感强，是产品包装、画册、海报、CMF色卡制作的首选涂布纸，适配胶印/数码印刷。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "涂布纸",
      "高光泽",
      "色彩还原",
      "画册",
      "包装",
      "CMF色卡",
      "胶印专用"
    ],
    "properties": {
      "density": "0.85–1.10 g/cm³（GB/T 451.3-2005）",
      "grammage": "128–300 g/m²（CMF设计常用157/200/250 g/m²，GB/T 451.2-2002）",
      "whiteness": "85–92 ISO（GB/T 7974-2013）",
      "tensileStrength": "顺纹抗拉 3.5–5.2 kN/m（GB/T 12914-2008）",
      "burstStrength": "200–350 kPa（GB/T 454-2002）",
      "foldingResistance": "200–500 次（双折，GB/T 2679.5-2002）",
      "waterAbsorption": "5–15 g/m²（2min，GB/T 1540-2002）",
      "glossiness": "60–85 GU（高光型，ASTM D523）；20–40 GU（哑光型，ASTM D523）",
      "colorDeltaE": "ΔE*ab ≤ 1.0（同批次，ASTM D2244）",
      "opacity": "85–95%（GB/T 1543-2005）",
      "coatingAdhesion": "0级 (GB/T 2679.11-1996，蜡棒法，涂层无脱落)"
    },
    "appearance": "表面平整光洁，呈高光泽/细腻哑光质感，纹理细腻无明显纤维感，色彩还原度达98%以上，可呈现高清渐变、金属色等复杂CMF效果，边缘裁切无毛刺。",
    "processability": [
      "胶印印刷",
      "数码印刷",
      "烫金/烫银",
      "UV上光",
      "模切",
      "压纹",
      "覆膜（光膜/哑膜）",
      "激光雕刻"
    ],
    "cost": {
      "material": "8–18 元/kg（2026年国内市场均价，普通157g）；25–45 元/kg（进口高端250g）",
      "tooling": "低",
      "unit": "低-中等"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，再生纸白度保留率≥70%",
      "certification": [
        "FSC",
        "PEFC",
        "GB 11680-1989（食品包装级）",
        "RoHS"
      ],
      "carbonFootprint": "约0.8–1.5 kg CO₂/kg（中国造纸协会2025年《中国造纸行业碳足迹核算指南》典型值）"
    },
    "suppliers": [
      {
        "name": "APP金光纸业",
        "grade": "金东铜版纸",
        "features": "国内铜版纸龙头，涂层均匀，色彩还原度高，CMF设计常用料"
      },
      {
        "name": "玖龙纸业",
        "grade": "海龙铜版纸",
        "features": "性价比高，157/200g现货充足，适合量产包装"
      },
      {
        "name": "芬欧汇川（UPM）",
        "grade": "UPM Finesse Classic 优光铜版纸",
        "features": "进口高端，低克重高挺度，适合高端画册/色卡"
      },
      {
        "name": "华泰纸业",
        "grade": "华泰铜版纸",
        "features": "国产高性价比，耐折性优异，适合折叠包装"
      }
    ],
    "alternatives": [
      "哑粉纸",
      "艺术纸",
      "白卡纸",
      "铸涂纸"
    ]
  },
  {
    "id": "mat-matte-paper",
    "type": "Material",
    "category": "纸",
    "name": "哑粉纸",
    "nameEn": "Matte Coated Paper (Matt Coated Offset Paper)",
    "description": "CMF设计“低敏质感”首选纸材，表面涂布哑光粉（二氧化硅/滑石粉），无反光、触感柔和，吸墨性优于铜版纸，色彩呈现沉稳内敛，适配高端产品画册、包装、CMF哑光效果展示，是极简风格设计的核心用材。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "哑光涂布纸",
      "无反光",
      "柔和触感",
      "极简设计",
      "画册",
      "包装",
      "CMF哑光展示"
    ],
    "properties": {
      "density": "0.80–1.05 g/cm³（GB/T 451.3-2005）",
      "grammage": "128–250 g/m²（CMF设计常用157/200 g/m²，GB/T 451.2-2002）",
      "whiteness": "80–88 ISO（GB/T 7974-2013）",
      "tensileStrength": "顺纹抗拉 3.2–4.8 kN/m（GB/T 12914-2008）",
      "burstStrength": "180–320 kPa（GB/T 454-2002）",
      "foldingResistance": "180–450 次（双折，GB/T 2679.5-2002）",
      "waterAbsorption": "8–20 g/m²（2min，GB/T 1540-2002）",
      "glossiness": "15–35 GU（ASTM D523）",
      "colorDeltaE": "ΔE*ab ≤ 1.2（同批次，ASTM D2244）",
      "opacity": "82–92%（GB/T 1543-2005）",
      "coatingAdhesion": "0级 (GB/T 2679.11-1996，蜡棒法，涂层无脱落)"
    },
    "appearance": "表面呈细腻哑光磨砂质感，无镜面反光，触感温润有纤维感，色彩柔和不刺眼，适合呈现莫兰迪色、大地色等低饱和度CMF色系，印刷文字清晰不晕染。",
    "processability": [
      "胶印印刷",
      "数码印刷",
      "压纹",
      "烫金（冷烫更适配）",
      "覆膜（哑膜/触感膜）",
      "模切",
      "激光雕刻"
    ],
    "cost": {
      "material": "9–20 元/kg（2026年国内市场均价，普通157g）；30–50 元/kg（进口哑光涂布纸）",
      "tooling": "低",
      "unit": "低-中等"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可降解",
      "certification": [
        "FSC",
        "PEFC",
        "RoHS"
      ],
      "carbonFootprint": "约0.7–1.4 kg CO₂/kg（中国造纸协会2025年《中国造纸行业碳足迹核算指南》典型值）"
    },
    "suppliers": [
      {
        "name": "金华盛纸业",
        "grade": "金华盛哑粉纸",
        "features": "国内哑光纸龙头，涂层细腻，无反光不均问题"
      },
      {
        "name": "太阳纸业",
        "grade": "太阳哑粉纸",
        "features": "高挺度，适合立体包装/折页"
      },
      {
        "name": "斯道拉恩索",
        "grade": "PPM Matt 哑粉纸",
        "features": "进口高端，触感优异，适合高端CMF色卡"
      },
      {
        "name": "博汇纸业",
        "grade": "博汇哑粉纸",
        "features": "性价比高，128g现货充足"
      }
    ],
    "alternatives": [
      "艺术纸（哑光）",
      "硫酸纸",
      "棉纸",
      "铜版纸（覆膜哑膜）"
    ]
  },
  {
    "id": "mat-white-cardboard",
    "type": "Material",
    "category": "纸",
    "name": "白卡纸",
    "nameEn": "White Cardboard (Coated White Board)",
    "description": "CMF设计硬质感核心用材，以漂白木浆为基料，双面涂布白涂层，挺度高、耐破性强、表面光洁，适配高端产品礼盒、名片、CMF材质样板、手提袋，是包装与展示结合的首选纸材。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "硬纸板",
      "高挺度",
      "双面涂布",
      "礼盒",
      "名片",
      "CMF样板",
      "手提袋"
    ],
    "properties": {
      "density": "0.90–1.15 g/cm³（GB/T 451.3-2005）",
      "grammage": "210–400 g/m²（CMF设计常用300/350/400 g/m²，超400g归入纸板范畴，GB/T 451.2-2002）",
      "whiteness": "88–95 ISO（GB/T 7974-2013）",
      "tensileStrength": "顺纹抗拉 4.5–6.8 kN/m（GB/T 12914-2008）",
      "burstStrength": "350–550 kPa（GB/T 454-2002）",
      "stiffness": "200–1200 mN·m（210g：200-400 mN·m；400g：800-1200 mN·m，GB/T 22364-2008）",
      "waterAbsorption": "3–10 g/m²（2min，GB/T 1540-2002）",
      "glossiness": "50–80 GU（正面，ASTM D523）；10–30 GU（背面，ASTM D523）",
      "colorDeltaE": "ΔE*ab ≤ 0.8（同批次，ASTM D2244）",
      "opacity": "98–100%（GB/T 1543-2005）",
      "coatingAdhesion": "0级 (GB/T 2679.11-1996，蜡棒法，涂层无脱落)"
    },
    "appearance": "双面洁白光洁，正面涂层细腻有光泽，背面略粗糙，挺度极高，弯折后不易回弹，可呈现纯色、烫金、压纹、UV等多样化CMF外观，质感扎实有分量感。",
    "processability": [
      "胶印印刷",
      "烫金/烫银/击凸",
      "模切",
      "压纹",
      "覆膜（触感膜/亮膜）",
      "糊盒",
      "激光雕刻"
    ],
    "cost": {
      "material": "12–28 元/kg（2026年国内市场均价，普通300g）；40–70 元/kg（进口高端350g/无酸白卡纸）",
      "tooling": "低",
      "unit": "中等"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，无酸白卡纸可长期保存（≥10年）",
      "certification": [
        "FSC",
        "PEFC",
        "GB 11680-1989（食品包装级）",
        "RoHS"
      ],
      "carbonFootprint": "约0.9–1.6 kg CO₂/kg（中国造纸协会2025年《中国造纸行业碳足迹核算指南》典型值）"
    },
    "suppliers": [
      {
        "name": "APP金光纸业",
        "grade": "宁波亚浆 宁亚白卡/酋长白卡",
        "features": "国内白卡纸标杆，涂层均匀无杂质，CMF设计常用料"
      },
      {
        "name": "玖龙纸业",
        "grade": "玖龙白卡纸",
        "features": "高性价比，300/350g现货充足，适合量产礼盒"
      },
      {
        "name": "斯道拉恩索",
        "grade": "Galaxy 银河白卡",
        "features": "进口无酸白卡纸，耐黄变，适合高端CMF样板"
      },
      {
        "name": "华泰纸业",
        "grade": "华泰白卡纸",
        "features": "耐破性优异，适合重型包装/手提袋"
      }
    ],
    "alternatives": [
      "灰底白卡纸",
      "牛卡纸",
      "硬纸板",
      "密度板（替代展示）"
    ]
  },
  {
    "id": "mat-kraft-paper",
    "type": "Material",
    "category": "纸",
    "name": "牛皮纸",
    "nameEn": "Kraft Paper (Kraft Linerboard)",
    "description": "CMF设计自然质感核心用材，以针叶木浆为基料，本色为浅棕褐色，纤维粗长、韧性极强，分普通牛皮纸与食品级牛皮纸两类。纹理粗犷、耐破耐撕性优异，适配工业风包装、手账、CMF材质对比展示、环保主题设计。",
    "image": "https://picsum.photos/seed/800/600",
    "tags": [
      "本色纸",
      "高韧性",
      "工业风",
      "环保",
      "包装",
      "手账",
      "CMF对比展示"
    ],
    "properties": {
      "density": "0.70–0.90 g/cm³（GB/T 451.3-2005）",
      "grammage": "80–300 g/m²（CMF设计常用120/150/200 g/m²，GB/T 451.2-2002）",
      "whiteness": "25–40 ISO（本色，GB/T 7974-2013）",
      "tensileStrength": "顺纹抗拉 6.0–10.5 kN/m（GB/T 12914-2008）",
      "burstStrength": "400–700 kPa（GB/T 454-2002）",
      "tearingResistance": "800–1000 mN（80-150g/m²，GB/T 455.1-2002）；1000–1800 mN（150-300g/m²，GB/T 455.2-2002）",
      "foldingResistance": "500–1200 次（双折，GB/T 2679.5-2002）",
      "waterAbsorption": "15–35 g/m²（2min，GB/T 1540-2002）",
      "glossiness": "5–15 GU（表面，ASTM D523）",
      "colorDeltaE": "ΔE*ab ≤ 2.0（同批次，ASTM D2244）",
      "opacity": "90–98%（GB/T 1543-2005）",
      "coatingAdhesion": "N/A (无原生涂层)"
    },
    "appearance": "呈自然浅棕褐色至深褐色，纤维纹理粗犷清晰，手感粗糙有韧性，无涂层质感，可通过染色、烫金、压纹实现个性化CMF效果，耐撕不易破损，自带复古工业风属性。",
    "processability": [
      "胶印印刷",
      "数码印刷",
      "烫金/烫银",
      "模切",
      "压纹",
      "覆膜",
      "激光雕刻",
      "染色"
    ],
    "cost": {
      "material": "6–15 元/kg（2026年国内市场均价，普通120g）；20–35 元/kg（进口食品级/全木浆牛皮纸）",
      "tooling": "低",
      "unit": "低"
    },
    "sustainability": {
      "recycling": "100%可回收再利用，可自然降解，再生料性能保留率≥80%",
      "certification": [
        "FSC",
        "PEFC",
        "GB 4806.8-2016（食品接触级）",
        "RoHS"
      ],
      "carbonFootprint": "约0.5–1.0 kg CO₂/kg（中国造纸协会2025年《中国造纸行业碳足迹核算指南》典型值）"
    },
    "suppliers": [
      {
        "name": "玖龙纸业",
        "grade": "玖龙牛皮纸",
        "features": "国内龙头，全木浆材质，现货充足，性价比高"
      },
      {
        "name": "理文造纸",
        "grade": "理文牛皮纸",
        "features": "高耐撕性，适合重型包装"
      },
      {
        "name": "斯道拉恩索",
        "grade": "Testliner 牛皮纸",
        "features": "进口食品级，无荧光剂，适合食品包装"
      },
      {
        "name": "太阳纸业",
        "grade": "太阳牛皮纸",
        "features": "国产高性价比，适合手账/文创设计"
      }
    ],
    "alternatives": [
      "牛卡纸",
      "再生牛皮纸",
      "黄卡纸",
      "特种艺术纸"
    ]
  }
];

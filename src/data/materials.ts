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
    id: 'mat-pom',
    type: 'Material',
    category: '塑料',
    name: 'POM(聚甲醛)',
    nameEn: 'Polyoxymethylene',
    description: '聚甲醛，俗称“赛钢”。具有极高的刚性和硬度，优异的自润滑性。',
    image: 'https://s41.ax1x.com/2026/04/03/peYYCyF.jpg',
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
    image: 'https://picsum.photos/seed/hdpe-polyethylene/800/600',
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
    image: 'https://picsum.photos/seed/pvc-material-industrial/800/600',
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
    cost: { material: '8–15 元/kg', tooling: '中等', unit: '低' }
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
    id: 'mat-silicone',
    type: 'Material',
    category: '橡胶',
    name: '硅橡胶',
    nameEn: 'Silicone Rubber',
    description: '优异的耐高低温性能，生理惰性，手感极佳。',
    image: 'https://picsum.photos/seed/silicone-rubber/800/600',
    tags: ['耐温', '亲肤', '食品级'],
    properties: {
      density: '1.1–1.3 g/cm³',
      hardness: '邵氏A 30–80'
    },
    appearance: '半透明或任意颜色，表面温润，防滑。',
    processability: ['模压', '液态射出 (LSR)', '挤出'],
    cost: { material: '40–120 元/kg', tooling: '中等', unit: '中等' }
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
];

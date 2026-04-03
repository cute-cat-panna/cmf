import { CMFItem } from '../types';

export const glossary: CMFItem[] = [
  {
    id: 'glo-cmf',
    type: 'Glossary',
    name: 'CMF',
    nameEn: 'Color, Material, Finish',
    description: 'CMF是工业设计中关于色彩、材料、表面处理的专业领域，是产品感官体验的核心。',
    image: 'https://picsum.photos/seed/cmf-design/800/600',
    tags: ['基础概念', '设计流程'],
  },
  {
    id: 'glo-pantone',
    type: 'Glossary',
    name: 'Pantone',
    nameEn: 'Pantone Matching System',
    description: '全球通用的色彩标准系统，通过编号确保不同工艺 and 材料间的颜色一致性。',
    image: 'https://picsum.photos/seed/pantone-swatch/800/600',
    tags: ['色彩标准', '色卡'],
  },
  {
    id: 'glo-vdi',
    type: 'Glossary',
    name: 'VDI 纹理',
    nameEn: 'VDI 3400 Texture',
    description: '德国工程师协会制定的火花纹标准，常用于模具表面粗糙度的量化定义。',
    image: 'https://picsum.photos/seed/vdi-texture/800/600',
    tags: ['粗糙度', '模具标准'],
  },
  {
    id: 'glo-draft',
    type: 'Glossary',
    name: '拔模斜度',
    nameEn: 'Draft Angle',
    description: '为了使塑胶件能顺利从模具中脱出，在设计时沿脱模方向设置的倾斜角度。',
    image: 'https://picsum.photos/seed/draft-angle/800/600',
    tags: ['结构设计', '注塑工艺'],
  },
  {
    id: 'glo-sinkmark',
    type: 'Glossary',
    name: '缩水/缩印',
    nameEn: 'Sink Mark',
    description: '由于壁厚不均或冷却不足，在塑胶件表面形成的局部凹陷现象。',
    image: 'https://picsum.photos/seed/sink-mark/800/600',
    tags: ['品质缺陷', '注塑'],
  }
];

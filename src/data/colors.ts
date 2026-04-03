import { CMFItem } from '../types';

export const colors: CMFItem[] = [
  {
    id: 'col-pantone-2024',
    type: 'Color',
    name: 'Peach Fuzz',
    description: 'PANTONE 2024 年度代表色。柔和、温润的桃色调，传达关怀与分享。',
    image: 'https://picsum.photos/seed/peach-fuzz/800/600',
    tags: ['年度色', '暖色调', '情感化'],
    colorData: {
      standard: 'PANTONE',
      code: '13-1023',
      hex: '#FFBE98',
      rgb: '255, 190, 152',
      lab: '82, 22, 26'
    }
  },
  {
    id: 'col-pantone-2023',
    type: 'Color',
    name: 'Viva Magenta',
    description: 'PANTONE 2023 年度代表色。充满活力与生机的洋红色，象征勇敢与无畏。',
    image: 'https://picsum.photos/seed/viva-magenta/800/600',
    tags: ['年度色', '活力', '洋红'],
    colorData: {
      standard: 'PANTONE',
      code: '18-1750',
      hex: '#BB2649',
      rgb: '187, 38, 73',
      lab: '40, 60, 15'
    }
  },
  {
    id: 'col-pantone-2022',
    type: 'Color',
    name: 'Very Peri',
    description: 'PANTONE 2022 年度代表色。融合了蓝色的忠诚与紫色的活力，展现无尽的创造力。',
    image: 'https://picsum.photos/seed/very-peri/800/600',
    tags: ['年度色', '创意', '蓝紫'],
    colorData: {
      standard: 'PANTONE',
      code: '17-3938',
      hex: '#6667AB',
      rgb: '102, 103, 171',
      lab: '46, 18, -38'
    }
  },
  {
    id: 'col-silver-tech',
    type: 'Color',
    name: '太空银',
    description: '具有强烈金属质感的银色，常用于 3C 产品，体现科技感与精密感。',
    image: 'https://picsum.photos/seed/tech-silver/800/600',
    tags: ['科技感', '金属色', '3C'],
    colorData: {
      standard: 'RAL',
      code: '9006',
      hex: '#A5A5A5',
      rgb: '165, 165, 165',
      lab: '68, 0, 0'
    }
  },
  {
    id: 'col-matte-black',
    type: 'Color',
    name: '曜石黑',
    description: '深邃的哑光黑色，低调奢华，广泛应用于高端电子产品和汽车内饰。',
    image: 'https://picsum.photos/seed/matte-black/800/600',
    tags: ['商务', '哑光', '经典'],
    colorData: {
      standard: 'Pantone',
      code: 'Black 6 C',
      hex: '#101820',
      rgb: '16, 24, 32',
      lab: '8, 0, -2'
    }
  },
  {
    id: 'col-titanium-gray',
    type: 'Color',
    name: '钛金灰',
    description: '模拟钛金属的深灰色，具有冷峻的工业美感。',
    image: 'https://picsum.photos/seed/titanium-gray/800/600',
    tags: ['工业风', '金属感', '耐看'],
    colorData: {
      standard: 'Pantone',
      code: 'Cool Gray 10 C',
      hex: '#63666A',
      rgb: '99, 102, 106',
      lab: '44, 0, -2'
    }
  }
];

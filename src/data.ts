import { CMFItem } from './types';
import { materials } from './data/materials';
import { colors } from './data/colors';
import { finishes } from './data/finishes';
import { glossary } from './data/glossary';

export const cmfData: CMFItem[] = [
  ...materials,
  ...colors,
  ...finishes,
  ...glossary
];

export { materials, colors, finishes, glossary };

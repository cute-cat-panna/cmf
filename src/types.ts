export type CMFType = 'Material' | 'Color' | 'Finish' | 'Glossary';

export interface CMFItem {
  id: string;
  type: CMFType;
  name: string;
  nameEn?: string;
  category?: string;
  description: string;
  image: string;
  tags: string[];
  
  // Material Specific
  properties?: {
    density?: string;
    hardness?: string;
    tensileStrength?: string;
    flexuralModulus?: string;
    impactStrength?: string;
    heatDistortionTemp?: string;
    thermalExpansion?: string;
    thermalConductivity?: string;
    meltingPoint?: string;
    yieldStrength?: string;
    elongation?: string;
    corrosionResistance?: string;
    adhesion?: string;
    pencilHardness?: string;
    glossRange?: string;
    colorDeltaE?: string;
    contactAngle?: string;
    modulus300?: string;
    operatingTemp?: string;
    elasticModulus?: string;
    abrasionResistance?: string;
    glassTransitionTemp?: string;
    compressiveStrength?: string;
    tensileModulus?: string;
    flexuralStrength?: string;
    tearStrength?: string;
    stress50?: string;
    stress100?: string;
  };
  appearance?: string;
  processability?: string[];
  cost?: {
    material: string;
    tooling: string;
    unit: string;
  };
  sustainability?: {
    recycling: string;
    certification: string[];
    carbonFootprint?: string;
  };
  suppliers?: {
    name: string;
    grade: string;
    features: string;
  }[];
  alternatives?: string[];

  // Color Specific
  colorData?: {
    standard: string;
    code: string;
    rgb?: string;
    hex: string;
    lab?: string;
  };

  // Finish Specific
  finishData?: {
    category: string;
    principle: string;
    substrate: string[];
    effects: string[];
    limitations: string[];
    economy: string;
    environment?: string;
  };
}

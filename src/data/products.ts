export type ProductStatus = 'Available' | 'In development' | 'Exploring';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  status: ProductStatus;
  url?: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'cyngent-chat',
    name: 'CYNGENT Chat',
    description: 'An intelligent conversational workspace powered by CYNGENT models.',
    category: 'Application',
    status: 'Available',
    url: '#cyngent-chat',
    featured: true,
  },
  {
    id: 'lingrel',
    name: 'LINGREL',
    description: 'General-purpose AI model designed for high-precision reasoning and logic.',
    category: 'AI Model',
    status: 'In development',
    featured: false,
  },
  {
    id: 'haivit',
    name: 'HAIVIT',
    description: 'CYNGENT experimental AI model architecture for multimodal processing.',
    category: 'AI Model',
    status: 'In development',
    featured: false,
  }
];

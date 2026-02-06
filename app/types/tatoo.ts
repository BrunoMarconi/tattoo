// types/tattoo.ts
export interface Tattoo {
  id: string;
  title: string;
  category: 'Blackwork' | 'Realism' | 'Traditional' | 'FineLine';
  imageUrl: string;
  description?: string;
}
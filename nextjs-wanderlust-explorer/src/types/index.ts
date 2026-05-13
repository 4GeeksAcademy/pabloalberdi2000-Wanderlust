export interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string; // "City, Country"
  price: number;
  rating: number;
  imageUrl: string;
}

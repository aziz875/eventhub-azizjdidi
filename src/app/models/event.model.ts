export interface EventItem {
  id: number;
  title: string;
  category: 'Atelier' | 'Conférence' | 'Rencontre' | 'Compétition';
  date: string;        // ISO date string
  place: string;
  price: number;       // 0 = gratuit
  imageUrl: string;
  description: string;
}

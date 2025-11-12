// Assets
import sanma1 from '../assets/gallery/bohalar.jpg';

// Tipos
export interface EventHighlightItem {
  src: string;
  type: 'image' | 'video';
  title: string;
  span?: string;
}

export interface EventDateItem {
  date: string;
  city: string;
  venue: string;
}

// Multimedia
export const eventHighlightItems: EventHighlightItem[] = [
  {
    src: sanma1 as string,
    type: 'image',
    title: 'San Mateo de Gallego, Zaragoza',
  },
];

export const eventDates: EventDateItem[] = [
  { date: '15 NOV 2025', city: 'Zaragoza', venue: 'Orera' },
  { date: '25 DIC 2025 - NOCHEBUENA', city: 'Zaragoza', venue: 'Zaragoza' },
  { date: '31 DIC 2025 - NOCHEVIEJA', city: 'Zaragoza', venue: 'Zaragoza' },
  { date: '06 ENE 2026 - NOCHE DE REYES', city: 'Zaragoza', venue: 'Zaragoza' },
];

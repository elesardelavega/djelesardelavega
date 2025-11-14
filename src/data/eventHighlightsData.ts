// Assets
import sanma1 from '../assets/gallery/bohalar.webp';

// Tipos
export interface EventHighlightItem {
  src: string
  type: 'image' | 'video'
  title: string
  span?: string
}

export interface EventDateItem {
  date: string
  city?: string
  venue?: string
  type?: string
  time?: string
}

// Multimedia
export const eventHighlightItems: EventHighlightItem[] = [
  {
    src: sanma1 as string,
    type: 'image',
    title: 'San Mateo de Gallego, Zaragoza',
  },
]

export const eventDates: EventDateItem[] = [
  {
    date: 'Sábado 15 NOV 2025',
    city: 'Orera',
    venue: 'Zaragoza',
    type: 'Discomovil',
    time: 'Despues de la orquesta',
  },
  {
    date: 'Sábado 06 DIC 2025',
    city: 'Aniñón',
    venue: 'Zaragoza',
    type: 'Tardeo',
    time: '19:30 - 22',
  },
  {
    date: 'Miércoles 24 DIC 2025',
    type: 'Discomovil Nochebuena',
    time: 'Reservada',
  },
  {
    date: 'Miércoles 31 DIC 2025',
    city: 'Aniñón',
    venue: 'Zaragoza',
    type: 'Discomovil Nochevieja',
    time: '01:00',
  },
  {
    date: 'Martes 06 ENE 2026',
    type: 'Discomovil Reyes',
    time: 'Libre',
  },
]
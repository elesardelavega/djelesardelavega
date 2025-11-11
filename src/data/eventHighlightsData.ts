// Assets
import sanma1 from '../assets/events/sanma.jpg'
import parros from '../assets/events/parros.jpg'
import aniñon from '../assets/events/aniñon.jpg'
import brutalAsset from '../assets/me/brutal.jpg'
import azuaraAsset from '../assets/events/azuara.jpg'
import monzalbarbaVideo from '../assets/events/monzalbarba.mp4'
import sanMateoVideo from '../assets/events/sanMateo.mp4'

// Tipos
export interface EventHighlightItem {
  src: string
  type: 'image' | 'video'
  title: string
  span?: string
}

// Datos
export const eventHighlightItems: EventHighlightItem[] = [
  {
    src: sanma1 as string,
    type: 'image',
    title: 'San Mateo de gallego, Zaragoza',
    span: 'md:col-span-2 lg:col-span-2 lg:row-span-1',
  },
  {
    src: brutalAsset as string,
    type: 'image',
    title: 'Brutal Bar, Tardeo',
    span: 'lg:col-span-1',
  },
  {
    src: monzalbarbaVideo as string,
    type: 'video',
    title: 'Monzalbarba, Zaragoza',
    span: 'lg:col-span-1',
  },
  {
    src: azuaraAsset as string,
    type: 'image',
    title: 'Azuara',
    span: 'lg:col-span-1',
  },
  {
    src: sanMateoVideo as string,
    type: 'video',
    title: 'San Mateo de gallego, Zaragoza (Video)',
    span: 'lg:col-span-1',
  },
  {
    src: parros as string,
    type: 'image',
    title: 'Parros, Zaragoza',
    span: 'lg:col-span-1',
  },
  {
    src: aniñon as string,
    type: 'image',
    title: 'Aniñon, Zaragoza',
    span: 'lg:col-span-1',
  },
];

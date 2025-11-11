// Assets
import darazuVideo from '../assets/videos/darazu.mp4'
import jaulaVideo from '../assets/videos/jaula.mp4'
import junglaZueraVideo from '../assets/videos/junglaZuera.mp4'
import luceniVideo from '../assets/videos/luceni.mp4'
import monzalbarbaVideo from '../assets/videos/monzalbarba.mp4'
import retasconVideo from '../assets/videos/retascon.mp4'
import villamayorVideo from '../assets/videos/villamayor.mp4'
import zaragozaVideo from '../assets/videos/zaragoza.mp4'

// Tipos
export interface VideoItem {
  src: string
  alt: string
  location: string
  event: string
  span?: string
}

// DATOS
export const videoItems: VideoItem[] = [
  {
    src: darazuVideo as string,
    alt: 'Aniñon',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
  },
  {
    src: jaulaVideo as string,
    alt: 'Azuara',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
  },
  {
    src: junglaZueraVideo as string,
    alt: 'Monzalbarba',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
  },
  {
    src: luceniVideo as string,
    alt: 'Darazu',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
  },
  {
    src: monzalbarbaVideo as string,
    alt: 'Bohalar',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
  },
  {
    src: retasconVideo as string,
    alt: 'La Jungla',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
  },
  {
    src: villamayorVideo as string,
    alt: 'Summer Party',
    location: 'Zaragoza',
    event: 'Festival',
    span: 'col-span-1',
  },
  {
    src: zaragozaVideo as string,
    alt: 'Monzalbarba',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
  },
]


export const chunkArray = (arr: VideoItem[], size: number) => {
  const chunkedArray = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size))
  }
  return chunkedArray
}

export const videosPerSlide = 4
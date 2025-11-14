// Assets
import aninonImg from '../assets/gallery/aniñon.webp';
import azuara1Img from '../assets/gallery/azuara1.webp';
import bohalarImg from '../assets/gallery/bohalar.webp';
import darazuImg from '../assets/gallery/darazu.webp'
import darazu1Img from '../assets/gallery/darazu1.webp'
import lajungla1Img from '../assets/gallery/lajungla1.webp'
import summerPartyImg from '../assets/gallery/summerParty.webp'
import monzalbarba1Img from '../assets/gallery/monzalbarba1.webp'
import monzalbarba3Img from '../assets/gallery/monzalbarba3.webp'
import villamayorImg from '../assets/gallery/villamayor.webp'
import villanuevaImg from '../assets/gallery/villanueva.webp'
import villanueva2Img from '../assets/gallery/villanueva2.webp'
import sanmateo4Img from '../assets/gallery/sanmateo4.webp'
import sanmateo6Img from '../assets/gallery/sanmateo6.webp'
import jaula2Img from '../assets/me/jaula2.webp'
import brutalImg from '../assets/me/brutal.webp'
import brutalbar2Img from '../assets/me/brutalbar2.webp'
import eventprivate1Img from '../assets/me/eventprivate1.webp'
import eventprivate2Img from '../assets/me/eventprivate2.webp'
import jaulaImg from '../assets/me/jaula.webp'

// Tipos
export interface PhotoItem {
  src: string
  alt: string
  location: string
  event: string
  span?: string
  showOnMobile?: boolean
}

// DATOS
export const photoItems: PhotoItem[] = [
  {
    src: aninonImg as string,
    alt: 'Aniñon',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-2',
    showOnMobile: false,
  },
  {
    src: azuara1Img as string,
    alt: 'Azuara',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: monzalbarba1Img as string,
    alt: 'Monzalbarba',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: darazuImg as string,
    alt: 'Darazu',
    location: 'Zuera',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: bohalarImg as string,
    alt: 'Bohalar',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: lajungla1Img as string,
    alt: 'La Jungla',
    location: 'Zuera',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: summerPartyImg as string,
    alt: 'Summer Party',
    location: 'Zaragoza',
    event: 'Festival',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: monzalbarba3Img as string,
    alt: 'Monzalbarba',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: villamayorImg as string,
    alt: 'Villamayor de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: villanuevaImg as string,
    alt: 'Villanueva de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: villanueva2Img as string,
    alt: 'Villanueva de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: sanmateo4Img as string,
    alt: 'San Mateo de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: brutalbar2Img as string,
    alt: 'Brutal Bar',
    location: 'San Mateo de Gállego',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: eventprivate1Img as string,
    alt: 'Evento Privado',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-2',
    showOnMobile: true,
  },
  {
    src: darazu1Img as string,
    alt: 'Darazu',
    location: 'Zuera',
    event: 'Discoteca',
    span: 'col-span-2',
    showOnMobile: true,
  },
  {
    src: jaulaImg as string,
    alt: 'San Mateo de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: brutalImg as string,
    alt: 'Brutal Bar',
    location: 'San Mateo de Gállego',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: eventprivate2Img as string,
    alt: 'Evento Privado',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: jaula2Img as string,
    alt: 'San Mateo de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: sanmateo6Img as string,
    alt: 'San Mateo de Gállego',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-2',
    showOnMobile: true,
  },
]

export const chunkArray = (arr: PhotoItem[], size: number) => {
  const chunkedArray = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size))
  }
  return chunkedArray
}

export const photosPerSlide = 7

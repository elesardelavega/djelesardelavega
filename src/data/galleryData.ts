// Assets
import aninonImg from '../assets/gallery/aniñon.jpg'
import azuara1Img from '../assets/gallery/azuara1.jpg'
import bohalarImg from '../assets/gallery/bohalar.jpg'
import darazuImg from '../assets/gallery/darazu.jpg'
import darazu1Img from '../assets/gallery/darazu1.jpg'
import lajungla1Img from '../assets/gallery/lajungla1.jpg'
import summerPartyImg from '../assets/gallery/summerParty.jpg'
import monzalbarba1Img from '../assets/gallery/monzalbarba1.jpg'
import monzalbarba3Img from '../assets/gallery/monzalbarba3.jpg'
import villamayorImg from '../assets/gallery/villamayor.jpg'
import villanuevaImg from '../assets/gallery/villanueva.jpg'
import villanueva2Img from '../assets/gallery/villanueva2.jpg'
import sanmateo4Img from '../assets/gallery/sanmateo4.jpg'
import sanmateo6Img from '../assets/gallery/sanmateo6.jpg'
import jaula2Img from '../assets/me/jaula2.jpg'
import brutalImg from '../assets/me/brutal.jpg'
import brutalbar2Img from '../assets/me/brutalbar2.jpg'
import eventprivate1Img from '../assets/me/eventprivate1.jpg'
import eventprivate2Img from '../assets/me/eventprivate2.jpg'
import jaulaImg from '../assets/me/jaula.jpg'

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
    location: 'Zaragoza',
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
    location: 'Zaragoza',
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
    alt: 'Villamayor',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: villanuevaImg as string,
    alt: 'Villanueva',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: villanueva2Img as string,
    alt: 'Villanueva',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: sanmateo4Img as string,
    alt: 'San Mateo',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: false,
  },
  {
    src: brutalbar2Img as string,
    alt: 'Brutal Bar',
    location: 'Zaragoza',
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
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-2',
    showOnMobile: true,
  },
  {
    src: jaulaImg as string,
    alt: 'San Mateo',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: brutalImg as string,
    alt: 'Brutal',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: eventprivate2Img as string,
    alt: 'Brutal',
    location: 'Zaragoza',
    event: 'Discoteca',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: jaula2Img as string,
    alt: 'San Mateo',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-1',
    showOnMobile: true,
  },
  {
    src: sanmateo6Img as string,
    alt: 'San Mateo',
    location: 'Zaragoza',
    event: 'Pueblo',
    span: 'col-span-2',
    showOnMobile: true,
  },
];

export const chunkArray = (arr: PhotoItem[], size: number) => {
  const chunkedArray = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size))
  }
  return chunkedArray;
};

export const photosPerSlide = 7

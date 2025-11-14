import { IconMusic, IconUser, IconPhoto } from '@tabler/icons-react'

import photoMe from '../assets/fotos/1n.webp';
import photoGallery from '../assets/gallery/monzalbarba12.webp'
import photoJaula from '../assets/me/jaula.webp'

export const features = [
  {
    icon: IconMusic,
    title: 'MÚSICA',
    description: 'Explora los últimos sets y producciones.',
    color: 'primary',
    href: '/musica',
    image: photoJaula,
    imageAlt: 'Actuación en cabina',
  },
  {
    icon: IconUser,
    title: 'SOBRE MÍ',
    description: 'Descubre el estilo, trayectoria, setup y eventos.',
    color: 'primary',
    href: '/sobre-mi',
    image: photoMe,
    imageAlt: 'Foto de retrato personal',
  },
  {
    icon: IconPhoto,
    title: 'GALERÍA',
    description: 'Momentos en escena.',
    color: 'primary',
    href: '/galeria',
    image: photoGallery,
    imageAlt: 'Foto de evento',
  },
];

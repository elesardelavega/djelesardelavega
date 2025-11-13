import { IconMusic, IconUser, IconPhoto } from '@tabler/icons-react'

import photoMe from '../assets/fotos/1n.png'
import photoGallery from '../assets/gallery/monzalbarba12.jpg'
import photoJaula from '../assets/me/jaula.jpg'

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

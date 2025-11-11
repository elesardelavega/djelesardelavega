import { IconMusic, IconUser, IconPhoto } from '@tabler/icons-react'

import photoMe from '../assets/me/foto.png'
import photoGallery from '../assets/events/aniñon.jpg'
import photoJaula from '../assets/me/jaula.jpg'

export const features = [
  {
    icon: IconMusic,
    title: 'MÚSICA',
    description: 'Explora mis últimos sets y producciones.',
    color: 'primary',
    href: '/musica',
    image: photoJaula,
    imageAlt: 'Actuación en cabina',
  },
  {
    icon: IconUser,
    title: 'SOBRE MÍ',
    description: 'Descubre mi estilo, trayectoria, setup y eventos.',
    color: 'secondary',
    href: '/sobre-mi',
    image: photoMe,
    imageAlt: 'Foto de retrato personal',
  },
  {
    icon: IconPhoto,
    title: 'GALERÍA',
    description: 'Mira mis mejores fotos actuando.',
    color: 'primary',
    href: '/galeria',
    image: photoGallery,
    imageAlt: 'Foto de evento',
  },
]

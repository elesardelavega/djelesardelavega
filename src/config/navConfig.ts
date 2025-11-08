// src/config/navConfig.ts

import {
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react';

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

// (Header)
export const HEADER_NAV_LINKS: NavItem[] = [
  { href: '/sobre-mi', label: 'Sobre Mí' },
  { href: '/musica', label: 'Música' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

// (Footer)
export const LEGAL_LINKS: NavItem[] = [
  { href: '/politica-privacidad', label: 'Privacidad' },
  { href: '/terminos-servicio', label: 'Términos Legales' },
  { href: '/politica-cookies', label: 'Política de Cookies' },
];

// (Redes sociales)
export const SOCIAL_LINKS = [
  {
    icon: IconBrandInstagram,
    href: 'https://www.instagram.com/elesardelavega/',
    label: 'Instagram',
  },
  { icon: IconBrandSoundcloud, href: 'https://soundcloud.com/elesardelavega', label: 'Soundcloud' },
  { icon: IconBrandYoutube, href: 'https://www.youtube.com/@DJelesardelavega', label: 'Youtube' },
  { icon: IconBrandTiktok, href: 'https://www.tiktok.com/@elesardelavega', label: 'Tiktok' },
];

// (acceso rápido)
export const HERO_BUTTON_LINK: NavItem = {
  href: '/musica',
  label: 'Música',
};

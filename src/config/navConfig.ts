// src/config/navConfig.ts

import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandSpotify,
  IconMail,
} from '@tabler/icons-react'

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
  { icon: IconBrandInstagram, href: 'URL_INSTAGRAM', label: 'Instagram' },
  { icon: IconBrandFacebook, href: 'URL_FACEBOOK', label: 'Facebook' },
  { icon: IconBrandSpotify, href: 'URL_SPOTIFY', label: 'Spotify' },
  { icon: IconMail, href: 'mailto:EMAIL_CONTACTO', label: 'Email' },
];

// (acceso rápido)
export const HERO_BUTTON_LINK: NavItem = {
  href: '/musica',
  label: 'Música',
};

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
  { href: '/politica-privacidad', label: 'Política de privacidad' },
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

//media sounCloud
export const FEATURED_MEDIA_CONFIG = {
  title: 'Música',
  description: 'Escucha la última sesion.',
  badge: {
    label: 'Fuerza Bruta - Sesión Techno Crossfitt',
    href: 'https://soundcloud.com/elesardelavega/fuerza-bruta-sesion-techno-crossfit-bajo-gallego',
    color: 'secondary',
  },

  embedUrl: `
<iframe loading="lazy" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2201826939&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/elesardelavega" title="Dj Elesar De La Vega" target="_blank" style="color: #cccccc; text-decoration: none;">Dj Elesar De La Vega</a> · <a href="https://soundcloud.com/elesardelavega/fuerza-bruta-sesion-techno-crossfit-bajo-gallego" title="Fuerza Bruta - Sesión Techno Crossfit Bajo Gallego ElesarDeLaVega" target="_blank" style="color: #cccccc; text-decoration: none;">Fuerza Bruta - Sesión Techno Crossfit Bajo Gallego ElesarDeLaVega</a></div>
  `,
};

// (acceso rápido)
export const MUSIC_LINK: NavItem = {
  href: '/musica',
  label: 'Música',
};

export const CONTACT_LINK: NavItem = {
  href: '/contacto',
  label: 'Contacto',
};

export const GALLERY_LINK: NavItem = {
  href: '/galeria',
  label: 'Galería',
};

export const ABOUT_LINK: NavItem = {
  href: '/sobre-mi',
  label: 'Sobre Mí',
};

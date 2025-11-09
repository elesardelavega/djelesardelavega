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

//media sounCloud
// TODO: script/codigo desde el servidor para actualizar automaticamente desde mi perfil de soundcloud (FINAL DE LA WEB ANTES DEL LANZAMIENTO)
export const FEATURED_MEDIA_CONFIG = {
  title: 'Mi Última Producción',
  description: 'Escucha mi última producción. El set que marcó la temporada.',
  badge: {
    label: 'Kassandra Feeling (Mashup) – ElesarDeLaVega',
    href: 'https://soundcloud.com/elesardelavega/kassandra-feeling-mashup-elesardelavega',
    color: 'secondary',
  },

  embedUrl: `
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2207046271&color=%233a86ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&theme_color=dark"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/elesardelavega" title="Dj Elesar De La Vega" target="_blank" style="color: #cccccc; text-decoration: none;">Dj Elesar De La Vega</a> · <a href="https://soundcloud.com/elesardelavega/kassandra-feeling-mashup-elesardelavega" title="Kassandra Feeling (Mashup) – ElesarDeLaVega (FILTRADA)" target="_blank" style="color: #cccccc; text-decoration: none;">Kassandra Feeling (Mashup) – ElesarDeLaVega (FILTRADA)</a></div>
  `,
};

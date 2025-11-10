// src/hooks/useNavigation.ts
import {
  HEADER_NAV_LINKS,
  LEGAL_LINKS,
  MUSIC_LINK,
  SOCIAL_LINKS,
  FEATURED_MEDIA_CONFIG,
  CONTACT_LINK,
  GALLERY_LINK,
  ABOUT_LINK,
} from '../config/navConfig';

export const useNavigation = () => {
  return {
    headerLinks: HEADER_NAV_LINKS,
    legalLinks: LEGAL_LINKS,
    socialLinks: SOCIAL_LINKS,
    musicLink: MUSIC_LINK,
    featuredMediaConfig: FEATURED_MEDIA_CONFIG,
    contactLink: CONTACT_LINK,
    galleryLink: GALLERY_LINK,
    aboutLink: ABOUT_LINK,
  };
};

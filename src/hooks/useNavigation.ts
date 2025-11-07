// src/hooks/useNavigation.ts
import { HEADER_NAV_LINKS, LEGAL_LINKS, HERO_BUTTON_LINK, SOCIAL_LINKS } from '../config/navConfig'

export const useNavigation = () => {
  return {
    headerLinks: HEADER_NAV_LINKS,
    legalLinks: LEGAL_LINKS,
    socialLinks: SOCIAL_LINKS,
    heroButton: HERO_BUTTON_LINK,
  };
};

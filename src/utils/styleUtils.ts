interface NavLinkClassProps {
  isActive: boolean
  isMobile?: boolean;
}

/**
 * @param {boolean} isActive 
 * @param {boolean} isMobile
 * @returns {string}
 */
export const getNavLinkClasses = ({ isActive, isMobile = false }: NavLinkClassProps): string => {
  //  base: Transición, padding condicional
  const baseClasses = `transition duration-300 ${isMobile ? 'py-2' : ''}`

  //  color: Muted-foreground por defecto, Primary  activo
  const colorClasses = isActive
    ? 'text-[hsl(var(--primary))]' 
    : 'text-[hsl(var(--muted-foreground))]'

  //  Hover: Foreground
 const hoverClasses = 'hover:text-[hsl(var(--primary))]'

  return `${baseClasses} ${colorClasses} ${hoverClasses}`
}

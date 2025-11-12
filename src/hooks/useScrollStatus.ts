import { useState, useEffect, useRef } from 'react'

/**
 *  useRef 
 * @returns {boolean} 
 */
export const useScrollStatus = (scrollThreshold: number = 50): boolean => {
  // Estado
  const [scrolled, setScrolled] = useState(false)

  const scrolledRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const isCurrentlyScrolled = window.scrollY > scrollThreshold

      //  actualiza estado
      if (isCurrentlyScrolled !== scrolledRef.current) {
        setScrolled(isCurrentlyScrolled)
        scrolledRef.current = isCurrentlyScrolled
      }
    }

    // listener y ejecutar una vez para el estado inicial
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    // Limpiar
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollThreshold])

  return scrolled
}

// src/hooks/useDrawer.ts
import { useState, useRef, useEffect } from 'react'

/**
 * @returns {object}
 */

export const useDrawer = () => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // cerrar el drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node

      // Ignora el clic si dentro
      if (
        (drawerRef.current && drawerRef.current.contains(targetNode)) ||
        (buttonRef.current && buttonRef.current.contains(targetNode))
      ) {
        return
      }

      setDrawerOpened(false)
    }

    if (drawerOpened) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [drawerOpened])

  //  alternar el estado
  const toggleDrawer = () => {
    setDrawerOpened((prev) => !prev)
  }

  //  cerrar el drawer
  const closeDrawer = () => {
    setDrawerOpened(false)
  }

  return {
    drawerOpened,
    toggleDrawer,
    closeDrawer,
    drawerRef,
    buttonRef,
  }
}

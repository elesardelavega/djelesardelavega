// src/components/Drawer.tsx

import React from 'react'
// 💡 Cambiamos la importación de Link por NavLink
import { NavLink } from 'react-router-dom'
import { getNavLinkClasses } from '../utils/styleUtils'

interface DrawerProps {
    drawerOpened: boolean
    closeDrawer: () => void
    drawerRef: React.RefObject<HTMLDivElement | null>
    navLinks: { href: string; label: string }[]
}

export const Drawer: React.FC<DrawerProps> = ({
    drawerOpened,
    closeDrawer,
    drawerRef,
    navLinks
}) => {
    return (
        <>
            {/* Overlay (sin cambios) */}
            {drawerOpened && (
                <div
                    className="fixed inset-0 top-16 bg-black/50 z-40"
                    onClick={closeDrawer}
                />
            )}

            {/* Drawer lateral derecho */}
            <div
                ref={drawerRef}
                className={`fixed top-20 right-0 z-50 w-full sm:w-1/3 h-[calc(100%-4rem)] bg-[hsl(var(--background))] border-l border-[hsl(var(--border))] shadow-md flex flex-col p-4 transform transition-transform duration-300 ${drawerOpened ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Contenido del drawer */}
                {navLinks.map(link =>
                    <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={closeDrawer}
                        className={({ isActive }) => getNavLinkClasses({ isActive, isMobile: true })}
                    >
                        {link.label}
                    </NavLink>
                )}
            </div>
        </>
    )
}
// src/components/Header.tsx
import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Logos } from '../config/assets'
import { Drawer } from './Drawer'
import { getNavLinkClasses } from '../utils/styleUtils'
import { useDrawer } from '../hooks/useDrawer'
import { useScrollStatus } from '../hooks/useScrollStatus'
import { useNavigation } from '../hooks/useNavigation'

export const Header: React.FC = () => {
    const {
        drawerOpened,
        toggleDrawer,
        closeDrawer,
        drawerRef,
        buttonRef
    } = useDrawer();

    const scrolled = useScrollStatus(50)
    const { headerLinks } = useNavigation()

    const headerClasses = `sticky top-0 z-50 w-full border-b transition-shadow duration-300 ${scrolled
        ? 'bg-[hsl(var(--background)/95%)] shadow-xl border-[hsl(var(--foreground))]'
        : 'bg-[hsl(var(--background))] border-[hsl(var(--border))]'
        }`

    return (
        <>
            {/* Header */}
            <header className={headerClasses}>
                <div
                    className="mx-auto max-w-[1440px] flex h-20 items-center justify-between px-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center text-[hsl(var(--foreground))] opacity-0 animate-fade-in-up delay-[1000ms]">
                        <img
                            src={Logos.logoBlancoBorde}
                            alt="Logo Elesar De La Vega"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Navegación Desktop */}
                    <nav className="hidden md:flex items-center gap-6 animate-slide-in-right delay-[1000ms]">
                        {headerLinks.map(link =>
                            <NavLink
                                key={link.href}
                                to={link.href}
                                className={({ isActive }) => getNavLinkClasses({ isActive })}
                            >
                                {link.label}
                            </NavLink>
                        )}
                    </nav>
                    {/* Botón hamburguesa */}
                    <button
                        ref={buttonRef}
                        className="md:hidden text-[hsl(var(--foreground))] text-2xl relative z-50 animate-slide-in-right delay-[1000ms]"
                        onClick={toggleDrawer}
                    >
                        {drawerOpened ? '✕' : '☰'}
                    </button>
                </div>
            </header>

            <Drawer
                drawerOpened={drawerOpened}
                closeDrawer={closeDrawer}
                drawerRef={drawerRef}
                navLinks={headerLinks}
            />

        </>
    );
};
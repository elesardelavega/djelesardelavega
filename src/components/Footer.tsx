// src/components/Footer.tsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconBrandInstagram, IconBrandFacebook, IconBrandSpotify, IconMail } from '@tabler/icons-react'
import { Logos } from '../config/assets'
import { getNavLinkClasses } from '../utils/styleUtils'

const socialLinks = [
    { icon: IconBrandInstagram, href: 'URL_INSTAGRAM', label: 'Instagram' },
    { icon: IconBrandFacebook, href: 'URL_FACEBOOK', label: 'Facebook' },
    { icon: IconBrandSpotify, href: 'URL_SPOTIFY', label: 'Spotify' },
    { icon: IconMail, href: 'mailto:EMAIL_CONTACTO', label: 'Email' },
]

const legalLinks = [
    { href: '/politica-privacidad', label: 'Privacidad' },
    { href: '/terminos-servicio', label: 'Términos Legales' },
    { href: '/politica-cookies', label: 'Política de Cookies' },
]

export const Footer: React.FC = () => {
    const currentYear = 2025
    const footerTextColor = 'text-[hsl(var(--muted-foreground))]'
    const hoverColor = 'hover:text-[hsl(var(--primary))]'

    return (
        <footer className="w-full bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] mt-auto">
            <div className="mx-auto max-w-[1440px] px-8 py-6 flex flex-col space-y-8 md:space-y-0">

                {/* Logo (Izq) | Redes Sociales (Drcha) */}
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logos.logoBlancoBorde}
                            alt="Elesar De La Vega Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Redes Sociales */}
                    <div className="flex space-x-6">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${footerTextColor} ${hoverColor} transition duration-300`}
                                aria-label={`Enlace a ${item.label}`}
                            >
                                <item.icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright (Izq) | Legales */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-4">

                    {/* Derechos de autor */}
                    <p className={`text-sm ${footerTextColor} font-sans mb-4 md:mb-0 order-2 md:order-1`}>
                        &copy; {currentYear} Elesar De La Vega. Todos los derechos reservados.
                    </p>

                    {/* Enlaces Legales */}
                    <div className="flex flex-wrap space-x-4 text-sm order-1 md:order-2">
                        {legalLinks.map((link) => (
                            <NavLink 
                                key={link.href}
                                to={link.href}
                                className={({ isActive }) => getNavLinkClasses({ isActive })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
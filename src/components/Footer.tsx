// src/components/Footer.tsx
import React from 'react';
// Importamos Link de React Router para enlaces internos
import { Link } from 'react-router-dom';
import { IconBrandInstagram, IconBrandFacebook, IconBrandSpotify, IconMail } from '@tabler/icons-react';
import { Logos } from '../config/assets';

const socialLinks = [
    { icon: IconBrandInstagram, href: 'URL_INSTAGRAM', label: 'Instagram' },
    { icon: IconBrandFacebook, href: 'URL_FACEBOOK', label: 'Facebook' },
    { icon: IconBrandSpotify, href: 'URL_SPOTIFY', label: 'Spotify' },
    { icon: IconMail, href: 'mailto:EMAIL_CONTACTO', label: 'Email' },
];

// Rutas sugeridas para los enlaces legales (debes añadirlas a App.tsx)
const legalLinks = [
    { href: '/politica-privacidad', label: 'Privacidad' },
    { href: '/terminos-servicio', label: 'Términos Legales' },
    { href: '/politica-cookies', label: 'Política de Cookies' },
];

export const Footer: React.FC = () => {
    const currentYear = 2025;
    const footerTextColor = 'text-[hsl(var(--muted-foreground))]';
    const hoverColor = 'hover:text-[hsl(var(--primary))]';

    return (
        <footer className="w-full bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] mt-auto">
            <div className="mx-auto max-w-[1440px] px-8 py-6 flex flex-col space-y-8 md:space-y-0">

                {/* FILA SUPERIOR: Logo (Izq) | Redes Sociales (Drcha) */}
                <div className="flex justify-between items-center">

                    {/* ARRIBA IZQUIERDA: Logo (Blanco) - Usamos Link de Router */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logos.logoBlancoBorde}
                            alt="Elesar De La Vega Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* ARRIBA DERECHA: Enlaces a Redes Sociales (usamos <a> ya que son enlaces externos) */}
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

                {/* FILA INFERIOR: Copyright (Izq) | Legales (Drcha) */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-4">

                    {/* ABAJO IZQUIERDA: Derechos de autor */}
                    <p className={`text-sm ${footerTextColor} font-sans mb-4 md:mb-0 order-2 md:order-1`}>
                        &copy; {currentYear} Elesar De La Vega. Todos los derechos reservados.
                    </p>

                    {/* ABAJO DERECHA: Enlaces Legales - Usamos Link de Router */}
                    <div className={`flex flex-wrap space-x-4 text-sm ${footerTextColor} order-1 md:order-2`}>
                        {legalLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`${footerTextColor} hover:text-[hsl(var(--foreground))] transition duration-300`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
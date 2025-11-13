import React from 'react'
import { LegalPage } from '../LegalPage'

export const CookiePolicyPage: React.FC = () => {
    return (
        <LegalPage title="Política de Cookies">
            <section className="min-h-screen w-full bg-[hsl(var(--background))] flex justify-center items-start py-16">
                <div
                    className="
                        w-full max-w-[1440px] mx-auto p-10 
                        bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg
                        shadow-none transition-all
                        hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                        space-y-6
                    "
                >
                    <h1 className="text-3xl font-bold text-white mb-6">
                        Política de Cookies
                    </h1>

                    <p>
                        En <strong>Elesar de la Vega</strong> informamos acerca del uso de cookies en nuestro sitio web.
                        Las cookies son archivos que se pueden descargar en tu dispositivo y que permiten almacenar y recuperar
                        información sobre tus hábitos de navegación. Dependiendo de la información obtenida, pueden utilizarse
                        para reconocerte y mejorar el servicio ofrecido.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Tipos de cookies</h2>
                    <p>Según la entidad que las gestione:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookies propias:</strong> enviadas desde nuestro dominio y necesarias para el servicio.</li>
                        <li><strong>Cookies de terceros:</strong> enviadas desde dominios externos (ej. Google, Spotify, redes sociales).</li>
                    </ul>

                    <p className="mt-4">Según el tiempo de permanencia:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookies de sesión:</strong> se borran al cerrar el navegador.</li>
                        <li><strong>Cookies persistentes:</strong> permanecen en tu dispositivo durante un periodo definido.</li>
                    </ul>

                    <p className="mt-4">Según su finalidad:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Técnicas:</strong> permiten la navegación y el uso de servicios básicos.</li>
                        <li><strong>Personalización:</strong> recuerdan tus preferencias (idioma, región, navegador).</li>
                        <li><strong>Análisis:</strong> permiten medir la actividad y mejorar el sitio.</li>
                        <li><strong>Publicitarias:</strong> gestionan espacios publicitarios.</li>
                        <li><strong>Publicidad comportamental:</strong> muestran anuncios basados en tu perfil de navegación.</li>
                        <li><strong>Redes sociales externas:</strong> facilitan la interacción con plataformas como Facebook, Instagram o YouTube.</li>
                    </ul>

                    <h2 className="mt-6 text-xl font-semibold text-white">Desactivación y eliminación</h2>
                    <p>
                        Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de tu navegador.
                        Ten en cuenta que al desactivar cookies algunos servicios pueden dejar de funcionar correctamente.
                    </p>
                    <p className="mt-4">Enlaces de ayuda para gestionar cookies en navegadores comunes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=es">Guía oficial</a></li>
                        <li>Firefox: <a href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">Guía oficial</a></li>
                        <li>Safari: <a href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/">Guía oficial</a></li>
                        <li>Edge: <a href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies">Guía oficial</a></li>
                    </ul>

                    <h2 className="mt-6 text-xl font-semibold text-white">Aceptación de la política</h2>
                    <p>
                        Al navegar en nuestro sitio web, asumimos que aceptas el uso de cookies. No obstante, mostramos un aviso
                        informativo en cada inicio de sesión para que seas consciente y puedas modificar tu configuración en cualquier momento.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Contacto</h2>
                    <p>
                        Si tienes dudas sobre esta política de cookies, puedes escribirnos a: <strong>elesarvega@gmail.com</strong>.
                    </p>
                </div>
            </section>
        </LegalPage>
    )
}

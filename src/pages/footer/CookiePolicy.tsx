// src/pages/CookiePolicy.tsx
import React from 'react'
import { LegalPage } from '../LegalPage'

export const CookiePolicyPage: React.FC = () => {
    return (
        <LegalPage title="Política de Cookies">
            <p>Este sitio web utiliza cookies para mejorar la experiencia del usuario, analizar el tráfico y personalizar el contenido.</p>
            <p>Las cookies son pequeños archivos de datos almacenados en tu dispositivo. Al continuar navegando, aceptas el uso de cookies.</p>
            {/* Aquí iría el texto completo de tu política de cookies */}
        </LegalPage>
    )
}
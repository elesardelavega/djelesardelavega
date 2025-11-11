import React from 'react'
import { LegalPage } from '../LegalPage'

export const TermsOfServicePage: React.FC = () => {
    return (
        <LegalPage title="Términos Legales">
            <p>Estos términos y condiciones rigen el uso de los servicios proporcionados por Elesar De La Vega.</p>
            <p>Al acceder a este sitio, aceptas estar sujeto a estos Términos y Condiciones de Uso, todas las leyes y regulaciones aplicables.</p>
            {/* Aquí iría el texto completo de tus términos */}
        </LegalPage>
    )
}
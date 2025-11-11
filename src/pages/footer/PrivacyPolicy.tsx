import React from 'react'
import { LegalPage } from '../LegalPage'

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <LegalPage title="Política de Privacidad">
            <p>Fecha de última actualización: 7 de Noviembre de 2025.</p>
            <p>Tu privacidad es importante para nosotros. Esta política detalla cómo Elesar De La Vega recopila, usa y protege tu información personal.</p>
            <p>Los datos recogidos son utilizados exclusivamente para la mejora del servicio y el envío de newsletters, si has dado tu consentimiento explícito.</p>
            {/* Aquí iría el texto completo de tu política */}
        </LegalPage>
    )
}
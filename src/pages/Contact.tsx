import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import {MediaDownloadCard} from '../components/contact/MediaDownloadCard'

export const ContactPage: React.FC = () => {
    return (
        <>
            {/* Formulario */}
            <ContactForm />

            {/* Fotos y Logos */}
            <MediaDownloadCard />
        </>
    )
}
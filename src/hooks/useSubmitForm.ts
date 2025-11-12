import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const useSubmitForm = (phoneNumber: string) => {
  const [submitted, setSubmitted] = useState(false)

  const sendToWhatsApp = (formData: any) => {
    const message = `
    📩 Nueva solicitud de booking:

    👤 Nombre: ${formData.nombre}
    📞 Teléfono: ${formData.telefono}
    🎉 Evento: ${formData.evento}
    💰 Presupuesto: ${formData.presupuesto}
    📝 Mensaje: ${formData.mensaje}`

    const encodedMessage = encodeURIComponent(message.trim())
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')

    setSubmitted(true)
  }

  const sendToEmail = async (formData: any) => {
    try {
      await emailjs.send(
        'service_v8ln55v',
        'template_76myucb',
        {
          nombre: formData.nombre,
          telefono: formData.telefono,
          evento: formData.evento,
          presupuesto: formData.presupuesto,
          mensaje: formData.mensaje,
          to_email: 'elesarvega@gmail.com',
        },
        '214-nV7fs_Dqxut8s'
      )
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return { submitted, sendToWhatsApp, sendToEmail }
}

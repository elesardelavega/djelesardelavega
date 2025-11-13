import {
    Card, Text, TextInput, Textarea, Select, Button, Stack, Transition,
} from "@mantine/core"
import { IconSend, IconPhone } from "@tabler/icons-react"
import { useSubmitForm } from "../../hooks/useSubmitForm"

const cardBaseClasses = `
  h-auto
  lg:max-h-[400px]
  bg-[hsl(var(--card))] border-[hsl(var(--border))]
  shadow-none transition-all
  hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
  opacity-0 animate-fade-in-up text-white
`

export const ContactFormCard = () => {
    const { submitted, sendToWhatsApp, sendToEmail } = useSubmitForm("+34691069240")

    const getFormData = (form: HTMLFormElement) => {
        const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)?.value.trim()
        const telefono = (form.elements.namedItem("telefono") as HTMLInputElement)?.value.trim()
        const evento = (form.elements.namedItem("evento") as HTMLSelectElement)?.value.trim()
        const presupuesto = (form.elements.namedItem("presupuesto") as HTMLInputElement)?.value.trim()
        const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement)?.value.trim()

        if (!nombre || !telefono || !evento || !presupuesto) {
            alert("Por favor, rellena todos los campos antes de enviar.")
            return null
        }
        return { nombre, telefono, evento, presupuesto, mensaje }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = getFormData(e.currentTarget)
        if (!data) return
        sendToEmail(data)
    }

    const handleWhatsApp = (form: HTMLFormElement) => {
        const data = getFormData(form)
        if (!data) return
        sendToWhatsApp(data)
    }

    const primaryColor = 'bg-[hsl(var(--primary))]'
    const primaryForeground = '!text-[hsl(var(--background))]'
    const primaryBorder = 'border-[hsl(var(--primary))]'

    return (
        <Card shadow="md" radius="md" withBorder className={cardBaseClasses} p="xl">
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <Stack className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <TextInput
                                name="nombre"
                                label="Nombre"
                                placeholder="Nombre comercial o del evento"
                                required
                                className="w-full"
                            />
                            <TextInput
                                name="telefono"
                                label="Teléfono de contacto"
                                placeholder="Teléfono"
                                type="tel"
                                required
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <Select
                                name="evento"
                                label="Tipo de Evento"
                                placeholder="Selecciona uno"
                                data={[
                                    { value: "club", label: "Club / Discoteca" },
                                    { value: "festival", label: "Festival" },
                                    { value: "privado", label: "Evento privado" },
                                    { value: "corporativo", label: "Evento corporativo" },
                                    { value: "pueblo", label: "Pueblo" },
                                ]}
                                required
                                className="w-full"
                            />
                            <TextInput
                                name="presupuesto"
                                label="Presupuesto estimado"
                                placeholder="Ej. 1500 €"
                                type="number"
                                required
                                className="w-full"
                            />
                        </div>

                        <Textarea
                            name="mensaje"
                            label="Mensaje"
                            placeholder="Cuéntame más sobre tu evento..."
                            minRows={4}
                            className="w-full"
                        />

                        <div className="mt-4 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                            {/* Texto a la izquierda */}
                            <Text
                                size="sm"
                                color="dimmed"
                                className="text-[hsl(var(--foreground))] sm:text-left text-center"
                            >
                                Respondemos lo antes posible. Solo bookings profesionales
                            </Text>

                            {/* Botones a la derecha */}
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 w-full">
                                <Button
                                    type="button"
                                    onClick={() => handleWhatsApp(document.querySelector("form")!)}
                                    variant="filled"
                                    radius="md"
                                    rightSection={<IconPhone className="h-4 w-4" />}
                                    className={`inline-flex items-center justify-center rounded-lg px-8 py-2 sm:text-md font-bold shadow-lg 
                                    ${primaryColor} ${primaryForeground} ${primaryBorder}
                                    transition duration-300 transform ease-in-out
                                    animate-pulse-shadow hover:shadow-2xl`}
                                >
                                    WhatsApp
                                </Button>

                                <Button
                                    type="submit"
                                    variant="filled"
                                    radius="md"
                                    rightSection={<IconSend className="h-4 w-4" />}
                                    className={`inline-flex items-center justify-center rounded-lg px-8 py-2 sm:text-md font-bold shadow-lg 
                                    ${primaryColor} ${primaryForeground} ${primaryBorder}
                                    transition duration-300 transform ease-in-out
                                    animate-pulse-shadow hover:shadow-2xl`}
                                >
                                    Correo
                                </Button>
                            </div>


                        </div>


                    </Stack>
                </form>
            ) : (
                <Transition mounted={submitted} transition="fade" duration={500} timingFunction="ease">
                    {(styles) => (
                        <div
                            style={styles}
                            className="flex items-center justify-center h-full w-full text-center"
                        >
                            <Text size="lg" color="teal">
                                ✅ ¡Solicitud enviada! Gracias por tu interés, te responderemos lo antes posible.
                            </Text>
                        </div>
                    )}
                </Transition>

            )
            }
        </Card >
    )
}

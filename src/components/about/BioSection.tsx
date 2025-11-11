import React from 'react'
import { Title, Text, Button, Card } from '@mantine/core'
import { Link } from 'react-router-dom'
import { rem } from '@mantine/core'
import foto from '../../assets/me/jaula2.jpg'
import { useNavigation } from '../../hooks/useNavigation'
import { IconPhone } from '@tabler/icons-react'

// Datos 
const NombreArtista = "Elesar de la Vega"

const BioSection: React.FC = () => {
    // Clases definidas para consistencia
    const primaryColor = 'bg-[hsl(var(--primary))]'
    const primaryForeground = '!text-[hsl(var(--background))]'
    const primaryBorder = 'border-[hsl(var(--primary))]'
    const { contactLink } = useNavigation()

    const responsiveTextSize = 'text-sm desk:text-sm desktop:text-lg'

    return (
        <section className="w-full py-20 bg-[hsl(var(--background))]">
            <div className="mx-auto max-w-[1440px] px-8">

                {/* Card principal */}
                <Card
                    shadow="xl"
                    padding="xl"
                    radius="lg"
                    withBorder
                    className="
                        group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))] 
                        shadow-none transition-all duration-500 cursor-pointer 
                        hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))] 
                        opacity-0 animate-fade-in-up
                    "
                    style={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                    }}
                >
                    <div className="flex flex-col desk:flex-row items-center justify-between gap-12">

                        {/* Biografía */}
                        <div className="desk:w-7/12 flex flex-col space-y-4 text-center desk:text-left">
                            <Title
                                order={2}
                                className="text-4xl font-serif text-[hsl(var(--foreground))]"
                            >
                                Biografía
                            </Title>

                            {/* Párrafo 1 con tamaño responsivo */}
                            <Text size="lg" className={`text-[hsl(var(--muted-foreground))] font-sans pt-2 pb-2 ${responsiveTextSize}`}>
                                {NombreArtista} es una figura consolidada de la escena musical española, reconocido por su capacidad de conectar con el público a través de sesiones de alta energía. Originario de Zaragoza, comenzó su trayectoria con un enfoque más comercial, evolucionando con el tiempo hacia un sonido versátil que combina techno, urbano y reggaetón, adaptándose a cada fiesta y escenario.
                            </Text>

                            {/* Párrafo 2 con tamaño responsivo */}
                            <Text size="lg" className={`text-[hsl(var(--muted-foreground))] font-sans pb-2 ${responsiveTextSize}`}>
                                A lo largo de su carrera, Elesar ha llevado su música a pueblos clave de Aragón como Aniñón, Uncastillo, San Mateo de Gállego, Villanueva de Gállego, Villamayor de Gállego, Zuera, Monzón, Castejón de Monegros, Alagón y Azuara, entre muchos otros, conquistando también discotecas de referencia como Parros, Mamanucca, La Casa del Loco, Oasis y Discoteca Darazú en Zaragoza.
                            </Text>

                            {/* Párrafo 3 con tamaño responsivo */}
                            <Text size="lg" className={`text-[hsl(var(--muted-foreground))] font-sans pb-6 ${responsiveTextSize}`}>
                                Su talento y versatilidad le han permitido convertirse en un DJ capaz de adaptarse a festivales, pubs y fiestas locales, siempre manteniendo intensidad y conexión con el público, consolidándose como un referente de la música en la región.
                            </Text>

                            {/* CTA */}
                            <div className="inline-block opacity-0 animate-fade-in-up delay-[1000ms]">
                                <Button
                                    component={Link}
                                    to={contactLink.href}
                                    className={`inline-flex items-center rounded-lg px-8 py-2 text-lg font-bold shadow-lg 
                                        ${primaryColor} ${primaryForeground} ${primaryBorder}
                                        transition duration-300 transform ease-in-out
                                        animate-pulse-shadow hover:shadow-2xl`}
                                    variant="filled"
                                    radius="md"
                                    rightSection={<IconPhone className="h-5 w-5" />}
                                    classNames={{
                                        inner: 'flex items-center gap-[10px] !w-auto',
                                    }}
                                >
                                    {contactLink.label}
                                </Button>
                            </div>
                        </div>

                        {/* Imagen con efecto hover */}
                        <div className="desk:w-5/12 flex justify-center pt-8 desk:pt-0">
                            <img
                                src={foto}
                                alt={`Retrato destacado de ${NombreArtista}`}
                                className="transition-transform duration-700 ease-out group-hover:scale-95"
                                style={{
                                    width: '100%',
                                    maxWidth: rem(500),
                                    height: 'auto',
                                    borderRadius: rem(10),
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default BioSection
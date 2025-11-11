import React from 'react'
import { Title, Text, Card } from '@mantine/core'
import { rem } from '@mantine/core'

// Tipos
interface EventHighlightImage {
    src: string
    title: string
    description: string
    // La propiedad span ahora debe llevar prefijos de breakpoint (ej: 'lg:col-span-2 lg:row-span-2')
    span?: string
}

// DATOS: Se añaden prefijos 'lg:' a todos los spans para activarlos solo en pantallas grandes
const eventHighlightImages: EventHighlightImage[] = [
    {
        src: '/assets/events/event-1.jpg',
        title: 'Sesión en Discoteca Oasis',
        description: 'Una noche de techno y vibraciones intensas en uno de los clubes más emblemáticos de Zaragoza. Energía pura hasta el amanecer.',
        span: 'lg:col-span-2 lg:row-span-2', // Aplicar solo a partir de LG
    },
    {
        src: '/assets/events/event-2.jpg',
        title: 'Actuación en Summer Party',
        description: 'El escenario principal de la Summer Party, donde los beats resonaron bajo las estrellas. Un festival inolvidable.',
        span: 'lg:col-span-1', // Definición estándar
    },
    {
        src: '/assets/events/event-3.jpg',
        title: 'Multitud en Festival Local',
        description: 'Conectando con la energía del público en un festival en Teruel, donde la fusión de estilos mantuvo a todos bailando.',
        span: 'lg:col-span-1 lg:row-span-2', // Aplicar solo a partir de LG
    },
    {
        src: '/assets/events/event-4.jpg',
        title: 'Controlando la Mesa',
        description: 'Enfoque y precisión en cada mezcla. La pasión por el DJing en su máxima expresión.',
        span: 'lg:col-span-1',
    },
    {
        src: '/assets/events/event-5.jpg',
        title: 'Sesión al aire libre',
        description: 'Un set fresco y vibrante en un evento privado, disfrutando del buen tiempo y la mejor música.',
        span: 'lg:col-span-1',
    },
    {
        src: '/assets/events/event-6.jpg',
        title: 'B2B con Invitados',
        description: 'Compartiendo cabina y fusionando estilos con otros DJs, creando una experiencia única para la audiencia.',
        span: 'lg:col-span-1',
    },
    {
        src: '/assets/events/event-7.jpg',
        title: 'Momentos en Directo',
        description: 'Varios ángulos de una de mis últimas actuaciones, capturando la esencia de la fiesta y la conexión con el público.',
        span: 'lg:col-span-2',
    },
];

const EventHighlights: React.FC = () => {
    return (
        <section className="w-full pb-20 bg-[hsl(var(--background))]" id="actuaciones">
            <div className="mx-auto max-w-[1440px] px-8">
                {/* imágenes */}
                {/* NOTA: lg:grid-cols-4 asumo que es tu 'desk' breakpoint (1024px) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {eventHighlightImages.map((item, index) => (
                        <Card
                            key={index}
                            shadow="xl"
                            padding="lg"
                            radius="lg"
                            withBorder
                            className={`
                                group bg-[hsl(var(--card))] border-[hsl(var(--border))] 
                                shadow-none transition-all duration-500 cursor-pointer 
                                hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))] 
                                opacity-0 animate-fade-in-up 
                                ${item.span ? item.span : ''}
                            `}
                            style={{
                                borderColor: 'hsl(var(--border))',
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '250px',
                                    objectFit: 'cover',
                                    borderRadius: rem(8),
                                    marginBottom: rem(16),
                                }}
                            />
                            <Title order={4} className="text-[hsl(var(--foreground))]" mb="xs">
                                {item.title}
                            </Title>
                            <Text size="sm" className="text-[hsl(var(--muted-foreground))]">
                                {item.description}
                            </Text>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventHighlights;
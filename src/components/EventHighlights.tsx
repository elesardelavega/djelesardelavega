import React from 'react'
import { Title, Text, Card } from '@mantine/core'
import { rem } from '@mantine/core'

import sanma1 from '../assets/events/sanma.jpg'
import parros from '../assets/events/parros.jpg'
import aniñon from '../assets/events/aniñon.jpg'
import brutalAsset from '../assets/me/brutal.jpg'
import azuaraAsset from '../assets/events/azuara.jpg'
import monzalbarbaVideo from '../assets/events/monzalbarba.mp4'
import sanMateoVideo from '../assets/events/sanMateo.mp4'

// Tipos
interface EventHighlightImage {
    src: string
    type: 'image' | 'video'
    title: string
    span?: string
}

const eventHighlightItems: EventHighlightImage[] = [
    {
        src: sanma1,
        type: 'image',
        title: 'San Mateo de gallego, Zaragoza',
        span: 'lg:col-span-2 lg:row-span-1',
    },
    {
        src: brutalAsset,
        type: 'image',
        title: 'Brutal Bar, Tardeo',
        span: 'lg:col-span-1',
    },
    {
        src: monzalbarbaVideo,
        type: 'video',
        title: 'Monzalbarba, Zaragoza',
        span: 'lg:col-span-1 lg:row-span-1',
    },
    {
        src: azuaraAsset,
        type: 'image',
        title: 'Azuara',
        span: 'lg:col-span-1 row-span-1',
    },
    {
        src: sanMateoVideo,
        type: 'video',
        title: 'San Mateo de gallego, Zaragoza',
        span: 'lg:col-span-1',
    },
    {
        src: parros,
        type: 'image',
        title: 'Parros, Zaragoza',
        span: 'lg:col-span-1',
    },
    {
        src: aniñon,
        type: 'image',
        title: 'Aniñon, Zaragoza',
        span: 'lg:col-span-1',
    },
]

const EventHighlights: React.FC = () => {
    return (
        <section className="w-full pb-20 bg-[hsl(var(--background))]" id="actuaciones">
            <div className="mx-auto max-w-[1440px] px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {eventHighlightItems.map((item, index) => (
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
                            {/* Imagen o Video */}
                            {(item.type === 'image' || item.type === 'video') && (
                                <div style={{
                                    width: '100%',
                                    height: '400px',
                                    overflow: 'hidden',
                                    borderRadius: rem(8),
                                    marginBottom: rem(16),
                                }}>
                                    {item.type === 'image' ? (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            controls
                                            muted
                                            loop
                                            autoPlay
                                            preload="metadata"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                            }}
                                        >
                                            Tu navegador no soporta el tag de video.
                                        </video>
                                    )}
                                </div>
                            )}

                            <Title order={4} className="text-[hsl(var(--foreground))] !mb-0" mb="xs">
                                {item.title}
                            </Title>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventHighlights;
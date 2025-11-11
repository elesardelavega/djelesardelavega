import React from 'react'
import { Title, Card } from '@mantine/core'
import { rem } from '@mantine/core'
import { type EventHighlightItem } from '../../data/eventHighlightsData'

interface EventCardProps {
    item: EventHighlightItem
    index: number
}

const EventCard: React.FC<EventCardProps> = ({ item, index }) => {
    return (
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
                opacity-0 animate-fade-in-up delay-[${600 + index * 100}ms] 
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
                    overflow: 'hidden',
                    borderRadius: rem(8),
                    marginBottom: rem(16),
                    position: 'relative',
                }}
                    className="h-auto lg:h-[400px]"
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <video
                            src={item.src}
                            controls
                            muted
                            autoPlay
                            loop
                            preload="metadata"
                            disablePictureInPicture
                            controlsList="nodownload nofullscreen"
                            className="w-full h-full"
                            style={{
                                objectFit: 'cover',
                            }}
                        >
                            Tu navegador no soporta el tag de video.
                        </video>
                    )}
                </div>
            )}

            {/* Título y Descripción */}
            <Title order={4} className="text-[hsl(var(--foreground))] !mb-0" mb="xs">
                {item.title}
            </Title>
        </Card>
    )
}

export default EventCard
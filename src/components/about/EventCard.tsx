import React from 'react'
import { Card } from '@mantine/core'
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
                group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))] 
                shadow-none transition-all cursor-pointer 
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
                    overflow: 'hidden',
                    borderRadius: rem(8),
                    position: 'relative',
                }}
                    className="h-auto"
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full"
                            loading="eager"
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
        </Card>
    )
}

export default EventCard
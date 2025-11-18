import React from 'react'
import { Card, rem } from '@mantine/core'

interface PhotoItem {
    src: string
    alt: string
    span?: string
    location?: string 
}

interface PhotoCardListProps {
    photos: PhotoItem[]
    openLightbox: (image: PhotoItem) => void
}

const PhotoCardList: React.FC<PhotoCardListProps> = ({ photos, openLightbox }) => (
    <>
        {photos.map((photo, index) => (
            <Card
                key={index}
                shadow="md"
                padding="xs"
                radius="md"
                withBorder
                onClick={() => openLightbox(photo)}
                className={`
                    group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))]
                    shadow-none transition-all cursor-pointer
                    hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                    opacity-0 animate-fade-in-up h-full
                    col-span-1
                    ${photo.span ? photo.span : ''} 
                `}
            >
                <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full max-h-[300px] lg:max-h-[400px] object-cover transition duration-300 group-hover:opacity-85"
                    style={{ borderRadius: rem(6) }}
                    loading='lazy'
                />
            </Card>
        ))}
    </>
)

export default PhotoCardList
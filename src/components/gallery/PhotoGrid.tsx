import React, { useState, useMemo } from 'react'
import { Title } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'

import PhotoCardList from './PhotoCardList'
import ImageLightbox from './ImageLightbox'

import { photoItems, chunkArray, photosPerSlide } from '../../data/galleryData'

interface PhotoItem {
    src: string
    alt: string
    span?: string
    location?: string
}

const GRID_COLUMNS_MOBILE = 'grid-cols-2'
const GRID_COLUMNS_DESKTOP = 'lg:grid-cols-4'

const PhotoGrid: React.FC = () => {
    const isDesktopOrTablet = useMediaQuery('(min-width: 768px)')

    // Lightbox State
    const [opened, setOpened] = useState(false)
    const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null)

    const chunkedPhotos = useMemo(() => chunkArray(photoItems, photosPerSlide), [photoItems])

    const openLightbox = (image: PhotoItem) => {
        setSelectedImage(image)
        setOpened(true)
    }

    return (
        <section className="w-full py-10 bg-[hsl(var(--background))] " id="galeria">
            <div className="mx-auto max-w-[1440px] px-8">

                {/* TÍTULO */}
                <Title order={2} ta="center" mb="xl" className="text-4xl font-serif text-[hsl(var(--foreground))]  opacity-0 animate-fade-in-up" >
                    Galería 📸
                </Title>

                {isDesktopOrTablet ? (

                    // CARRUSEL para Desktop/Tablet
                    <Carousel
                        slideSize="100%"
                        slideGap="md"
                        controlsOffset="xs"
                        classNames={{
                            root: '!px-16',
                            controls: 'absolute left-0 right-0 top-0 bottom-0',
                            control: 'bg-transparent text-white hover:shadow-none !border-none !rounded-none',
                        }}
                        nextControlIcon={<IconChevronRight size={32} />}
                        previousControlIcon={<IconChevronLeft size={32} />}
                    >
                        {chunkedPhotos.map((photoChunk, chunkIndex) => (
                            <Carousel.Slide key={chunkIndex}>
                                <div className={`grid ${GRID_COLUMNS_DESKTOP} gap-4 auto-rows-min pb-4`}>
                                    <PhotoCardList photos={photoChunk} openLightbox={openLightbox} />
                                </div>
                            </Carousel.Slide>
                        ))}
                    </Carousel>

                ) : (

                    // GRID para Mobile
                    <div className={`grid ${GRID_COLUMNS_MOBILE} gap-4 auto-rows-min pb-4`}>
                        <PhotoCardList photos={photoItems} openLightbox={openLightbox} />
                    </div>

                )}
            </div>

            {/* LIGHTBOX */}
            <ImageLightbox
                opened={opened}
                onClose={() => setOpened(false)}
                selectedImage={selectedImage}
            />
        </section>
    )
}

export default PhotoGrid
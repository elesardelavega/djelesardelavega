import React, { useState, useMemo } from 'react'
import { Title, Card, Text, Button, Modal } from '@mantine/core'
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'

import { photoItems, chunkArray, photosPerSlide } from '../../data/galleryData'

const GRID_COLUMNS_MOBILE = 'grid-cols-2'
const GRID_COLUMNS_DESKTOP = 'lg:grid-cols-4'

interface RenderCardProps {
    photos: typeof photoItems
    openLightbox: (image: { src: string; alt: string }) => void
}

const PhotoCardList: React.FC<RenderCardProps> = ({ photos, openLightbox }) => (
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

const PhotoGrid: React.FC = () => {
    const isDesktopOrTablet = useMediaQuery('(min-width: 768px)')

    // Lightbox
    const [opened, setOpened] = useState(false)
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; location?: string } | null>(null)

    const chunkedPhotos = useMemo(() => chunkArray(photoItems, photosPerSlide), [photoItems])

    const openLightbox = (image: { src: string; alt: string }) => {
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

                    // (CARRUSEL)
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

                    // MOBILE
                    <div className={`grid ${GRID_COLUMNS_MOBILE} gap-4 auto-rows-min pb-4`}>
                        <PhotoCardList photos={photoItems} openLightbox={openLightbox} />
                    </div>

                )}
            </div>

            {/*  LIGHTBOX  */}
            <Modal
                opened={opened}
                withCloseButton={false}
                onClose={() => setOpened(false)}
                size="80%"
                centered
                overlayProps={{
                    backgroundOpacity: 0.75,
                    blur: 1,
                }}
                classNames={{
                    content: 'bg-[hsl(var(--background))]',
                }}
            >
                {selectedImage && (
                    <>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '80vh',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <Button
                            onClick={() => setOpened(false)}
                            variant="subtle"
                            color="gray"
                            style={{
                                position: 'absolute',
                                top: rem(10),
                                right: rem(10),
                                zIndex: 10
                            }}
                        >
                            <IconX size="1.5rem" />
                        </Button>
                        <Text size="lg" ta="center" mt="sm" className="text-[hsl(var(--foreground))]">
                            {selectedImage.alt} - {selectedImage.location}
                        </Text>
                    </>
                )}
            </Modal>
        </section>
    )
}

export default PhotoGrid
import React, { useState, useMemo } from 'react';
import { Title, Card, Text, Button, Modal } from '@mantine/core';
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { photoItems, chunkArray, photosPerSlide } from '../../data/galleryData';

const PhotoGrid: React.FC = () => {
    // Lightbox 
    const [opened, setOpened] = useState(false)
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

    const chunkedPhotos = useMemo(() => chunkArray(photoItems, photosPerSlide), [photoItems])

    const openLightbox = (image: { src: string; alt: string }) => {
        setSelectedImage(image)
        setOpened(true)
    }

    return (
        <section className="w-full py-20 bg-[hsl(var(--background))]" id="galeria">
            <div className="mx-auto max-w-[1440px] px-8">

                {/* TÍTULO */}
                <Title
                    order={2}
                    ta="center"
                    mb="xl"
                    className="text-4xl font-serif text-[hsl(var(--foreground))]"
                >
                    Galería 📸
                </Title>

                {/* CARRUSEL DE GRIDS */}
                <Carousel
                    slideSize="100%"
                    slideGap="md"
                    controlsOffset="xs"
                    classNames={{
                        root: '!px-14',
                        controls: '!inset-y-0',
                        control: 'bg-transparent text-white hover:shadow-none !border-none !rounded-none',
                    }}
                    nextControlIcon={<IconChevronRight size={24} />}
                    previousControlIcon={<IconChevronLeft size={24} />}
                >
                    {chunkedPhotos.map((photoChunk, chunkIndex) => (
                        <Carousel.Slide key={chunkIndex}>

                            {/* CLAVE */}
                            <div className="grid grid-cols-4 gap-4 auto-rows-min pb-4">

                                {photoChunk.map((photo, index) => (
                                    <Card
                                        key={index}
                                        shadow="md"
                                        padding="xs"
                                        radius="md"
                                        withBorder
                                        onClick={() => openLightbox(photo)}
                                        className={`
                                            group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))]
                                            shadow-none transition-all duration-500 cursor-pointer
                                            hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                                            opacity-0 animate-fade-in-up h-full
                                            ${photo.span ? photo.span : 'col-span-1'} 
                                        `}
                                    >
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-[400px] object-cover transition duration-300 group-hover:opacity-85"
                                            style={{ borderRadius: rem(6) }}
                                        />
                                    </Card>
                                ))}

                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>

            {/* LIGHTBOX */}
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
                            {selectedImage.alt}
                        </Text>
                    </>
                )}
            </Modal>
        </section>
    )
}

export default PhotoGrid
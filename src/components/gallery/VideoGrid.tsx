import React, { useState, useMemo } from 'react';
import { Card, Text, Button, Modal } from '@mantine/core';
import { IconX, IconChevronLeft, IconChevronRight, IconPlayerPlay } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { videoItems, chunkArray, videosPerSlide } from '../../data/videosGalleryData';

const VideoGrid: React.FC = () => {
    // Lightbox 
    const [opened, setOpened] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState<{ src: string; alt: string } | null>(null)

    const chunkedVideos = useMemo(() => chunkArray(videoItems, videosPerSlide), [videoItems])

    const openLightbox = (video: { src: string; alt: string }) => {
        setSelectedVideo(video)
        setOpened(true)
    }

    return (
        <section className="w-full pb-20 bg-[hsl(var(--background))]" id="galeria">
            <div className="mx-auto max-w-[1440px] px-8">

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
                    {chunkedVideos.map((videoChunk, chunkIndex) => (
                        <Carousel.Slide key={chunkIndex}>

                            {/* CLAVE */}
                            <div className="grid grid-cols-4 gap-4 auto-rows-min pb-2">

                                {videoChunk.map((video, index) => (
                                    <Card
                                        key={index}
                                        shadow="md"
                                        padding="xs"
                                        radius="md"
                                        withBorder
                                        className={`
                                            group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))]
                                            shadow-none transition-all duration-500 cursor-pointer
                                            hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                                            opacity-0 animate-fade-in-up h-full
                                            ${video.span ? video.span : 'col-span-1'} 
                                        `}
                                    >
                                        <video
                                            src={video.src}
                                            controls
                                            muted
                                            loop
                                            preload="metadata"
                                            className="w-full h-full object-cover transition duration-300"
                                            style={{
                                                objectFit: 'cover',
                                            }}
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
                {selectedVideo && (
                    <>
                        <img
                            src={selectedVideo.src}
                            alt={selectedVideo.alt}
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
                            <IconX size={24} />
                        </Button>
                        <Text size="lg" ta="center" mt="sm" className="text-[hsl(var(--foreground))]">
                            {selectedVideo.alt}
                        </Text>
                    </>
                )}
            </Modal>
        </section>
    )
}

export default VideoGrid
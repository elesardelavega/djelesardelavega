import React from 'react'
import { Card } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'

import { videoItems } from '../../data/videosGalleryData'

const getVideosPerView = (isMobile: boolean) => isMobile ? 1 : 4

const VideoGrid: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const videosPerView = getVideosPerView(isMobile)

    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]" id="galeria">
            <div className="mx-auto max-w-[1440px] px-8">

                {/* CARRUSEL DE GRIDS */}
                <Carousel
                    slideSize={videosPerView === 1 ? "100%" : "25%"}
                    slideGap="md"
                    controlsOffset="xs"
                    classNames={{
                        root: '!px-16',
                        controls: 'absolute left-0 right-0 top-0 bottom-0',
                        control: 'bg-transparent text-white !border-none !shadow-none hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]',
                    }}
                    nextControlIcon={<IconChevronRight size={24} />}
                    previousControlIcon={<IconChevronLeft size={24} />}
                >
                    {videoItems.map((video, index) => (
                        <Carousel.Slide key={index} className='pb-4'>
                            <Card
                                shadow="md"
                                padding="xs"
                                radius="md"
                                withBorder
                                className={`
                                    group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))]
                                    shadow-none transition-all duration-500 cursor-pointer
                                    hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                                    opacity-0 animate-fade-in-up h-full pb-4
                                `}
                            >
                                <video
                                    src={video.src}
                                    controls
                                    muted
                                    loop
                                    preload="metadata"
                                    disablePictureInPicture
                                    controlsList="nodownload nofullscreen"
                                    className="w-full  h-full max-h-[600px] md:max-h-[500px] object-cover transition duration-300"
                                    style={{ borderRadius: rem(6) }}
                                >
                                    Tu navegador no soporta el video.
                                </video>
                            </Card>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default VideoGrid
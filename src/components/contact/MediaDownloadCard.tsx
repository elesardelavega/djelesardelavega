import {
    Card,
    Title,
    Button,
    Stack,
} from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import { fotos, logos, fotosZipUrl, logosZipUrl } from "../../data/media"

const cardBaseClasses = `
  max-h-[400px]
  h-full
  bg-[hsl(var(--card))] border-[hsl(var(--border))]
  shadow-none transition-all
  hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
  opacity-0 animate-fade-in-up text-white
`

export const MediaDownloadCard = () => {
    const primaryColor = 'bg-[hsl(var(--primary))]'
    const primaryForeground = '!text-[hsl(var(--background))]'
    const primaryBorder = 'border-[hsl(var(--primary))]'

    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]" id="media">
            <div className="mx-auto max-w-[1440px] px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Slide izquierda */}
                <Card shadow="md" radius="md" withBorder className={cardBaseClasses} p="xl">
                    <Stack className="space-y-4 items-center">
                        <Title order={3} className="text-white mb-0">
                            Fotos
                        </Title>

                        <Carousel
                            height={200}
                            slideGap="md"
                            controlsOffset="xs"
                            slideSize="100%"
                            classNames={{
                                controls: 'absolute left-6 sm:left-24 right-6 sm:right-24 top-0 bottom-0',
                                control: 'bg-transparent text-white hover:shadow-none !border-none !rounded-none',
                            }}
                        >
                            {fotos.map((src, i) => (
                                <Carousel.Slide key={i}>
                                    <img src={src} alt={`Foto ${i + 1}`} className="w-full h-full object-contain rounded-md" loading="eager" />
                                </Carousel.Slide>
                            ))}
                        </Carousel>

                        <div className="flex gap-4 mt-4">
                            <Button
                                component="a"
                                href={fotosZipUrl}
                                download
                                variant="filled"
                                radius="md"
                                className={`inline-flex items-center rounded-lg px-8 py-2 text-MD font-bold shadow-lg 
                                     ${primaryColor} ${primaryForeground} ${primaryBorder}
                                     transition duration-300 transform ease-in-out
                                     animate-pulse-shadow hover:shadow-2xl`}
                            >
                                Descargar
                            </Button>
                        </div>
                    </Stack>
                </Card>

                {/* Slide derecha */}
                <Card shadow="md" radius="md" withBorder className={cardBaseClasses} p="xl">
                    <Stack className="space-y-4 items-center">
                        <Title order={3} className="text-white mb-0">
                            Logos
                        </Title>

                        <Carousel
                            height={200}
                            slideGap="md"
                            slideSize="100%"
                            controlsOffset="xs"
                            withControls
                            classNames={{
                                root: '!px-4 sm:!px-12 md:!px-32',
                                controls: 'absolute left-2 sm:left-6 right-2 sm:right-6 top-0 bottom-0',
                                control: 'bg-transparent text-white hover:shadow-none !border-none !rounded-none',
                            }}
                        >

                            {logos.map((src, i) => (
                                <Carousel.Slide
                                    key={i}
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={src}
                                        alt={`Logo ${i + 1}`}
                                        className="w-[160px] sm:w-[200px] md:w-[240px] h-auto object-contain"
                                        loading="eager"
                                    />
                                </Carousel.Slide>

                            ))}
                        </Carousel>

                        <div className="flex gap-4 mt-4">
                            <Button
                                component="a"
                                href={logosZipUrl}
                                download
                                variant="filled"
                                radius="md"
                                className={`inline-flex items-center rounded-lg px-8 py-2 text-MD font-bold shadow-lg 
                                     ${primaryColor} ${primaryForeground} ${primaryBorder}
                                     transition duration-300 transform ease-in-out
                                     animate-pulse-shadow hover:shadow-2xl`}
                            >
                                Descargar
                            </Button>
                        </div>
                    </Stack>
                </Card>

            </div>
        </section>
    )
}

import { Card, Title, Text } from "@mantine/core"
import { sesiones } from "../../data/musicData"

export const MusicSesionBlock = () => {
    const primaryForeground = "text-[hsl(var(--foreground))]"
    const mutedForeground = "text-[hsl(var(--muted-foreground))]"

    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]" id="music-sesiones">
            <div className="mx-auto max-w-[1440px] px-8 opacity-0 animate-fade-in-up">

                {/* Título */}
                <Title order={2} className={`text-2xl font-serif text-center mb-12 ${primaryForeground}`}>
                    Sesiones 🎧
                </Title>

                {/* Sesiones */}
                <div
                    className={
                        sesiones.length < 3
                            ? "flex justify-around gap-10 flex-wrap"
                            : "grid gap-10"
                    }
                    style={
                        sesiones.length < 3
                            ? undefined
                            : { gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }
                    }
                >
                    {sesiones.map((track, i) => (
                        <Card
                            key={i}
                            component="a"
                            href={track.link}
                            target="_blank"
                            shadow="xl"
                            radius="lg"
                            withBorder
                            padding="lg"
                            className={`
                                group w-full h-auto max-w-[380px] bg-[hsl(var(--card))] border-[hsl(var(--border))]
                                shadow-none transition-all cursor-pointer
                                hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                                opacity-0 animate-fade-in-up
                            `}
                        >
                            <img
                                src={track.cover}
                                alt={`Portada de ${track.title}`}
                                className="rounded-md mb-4 w-full object-cover"
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                            />
                            <Title order={4} className={`text-md font-bold mb-2 ${primaryForeground} line-clamp-2 min-h-[3rem]`}>
                                {track.title}
                            </Title>
                            <Text className={mutedForeground}>{track.artist}</Text>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MusicSesionBlock

import { Card, Title, Text } from "@mantine/core"
import { remixes } from "../../data/musicData"

export const MusicRemixBlock = () => {
    const primaryForeground = "text-[hsl(var(--foreground))]"
    const mutedForeground = "text-[hsl(var(--muted-foreground))]"

    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]" id="music-remixes">
            <div className="mx-auto max-w-[1440px] px-8 opacity-0 animate-fade-in-up">

                {/* Título */}
                <Title order={2} className={`text-2xl font-serif text-center mb-12 ${primaryForeground}`}>
                    Remix 🎶
                </Title>

                {/* remixes */}
                <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                    {remixes.map((track, i) => (
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
                            group w-full h-auto bg-[hsl(var(--card))] border-[hsl(var(--border))]
                            shadow-none transition-all cursor-pointer
                            hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                            opacity-0 animate-fade-in-up
                        `}
                        >
                            <img
                                src={track.cover}
                                alt={`Portada de ${track.title}`}
                                className="rounded-md mb-4 w-full object-cover"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                            <Title
                                order={4}
                                className={`text-md font-bold mb-2 ${primaryForeground}`}
                            >
                                {track.title}
                            </Title>
                            <Text className={`text-sm ${mutedForeground}`}>{track.artist}</Text>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MusicRemixBlock

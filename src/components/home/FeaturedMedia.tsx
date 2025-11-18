import React from 'react'
import { Title, Text, Badge } from '@mantine/core'
import { useNavigation } from '../../hooks/useNavigation'

export const FeaturedMedia: React.FC = () => {
    const { featuredMediaConfig } = useNavigation()

    const iframeCode = featuredMediaConfig.embedUrl.replace(
        '<iframe',
        '<iframe class="w-full h-[190px] border-none" loading="lazy"'
    )

    const primaryColor = 'bg-[hsl(var(--primary))]'
    const primaryForeground = '!text-[hsl(var(--background))]'
    const primaryBorder = 'border-[hsl(var(--primary))]'

    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]">
            <div className="mx-auto max-w-[1440px] px-8 flex flex-col desk:flex-row items-center justify-between gap-12">

                {/* Contenido y CTA */}
                <div className="desk:w-1/3 flex flex-col space-y-4 text-center desk:text-left opacity-0 animate-fade-in-up">
                    <Title order={2} className="text-4xl font-serif text-[hsl(var(--foreground))]">
                        {featuredMediaConfig.title}
                    </Title>

                    <Text size="lg" className="text-[hsl(var(--muted-foreground))] font-sans pt-2 pb-4">
                        {featuredMediaConfig.description}
                    </Text>

                    {/* Badge y Enlace */}
                    <button
                        type="button"
                        className={`inline-flex items-center justify-center rounded-lg py-2 px-2 shadow-lg 
                        ${primaryColor} ${primaryForeground} ${primaryBorder}
                        transition duration-300 transform ease-in-out
                        animate-pulse-shadow hover:shadow-2xl cursor-pointer`}
                        onClick={() => window.open(featuredMediaConfig.badge.href, '_blank')}
                    >
                        <Badge
                            variant="filled"
                            radius="sm"
                            size="lg"
                            className={`w-auto px-2 py-1 text-xs
                            ${primaryColor} ${primaryForeground} ${primaryBorder}
                            transition duration-300 transform ease-in-out
                            animate-pulse-shadow hover:shadow-2xl cursor-pointer`}
                        >
                            {featuredMediaConfig.badge.label}
                        </Badge>
                    </button>


                </div>

                {/* Reproductor */}
                <div
                    className="desk:w-2/3 w-full shadow-2xl rounded-lg overflow-hidden border border-[hsl(var(--border))] opacity-0 animate-fade-in-up delay-[200ms]"
                    dangerouslySetInnerHTML={{ __html: iframeCode }}
                />
            </div>
        </section>
    )
}
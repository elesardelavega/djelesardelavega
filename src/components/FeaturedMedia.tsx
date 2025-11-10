// src/components/FeaturedMedia.tsx
import React from 'react';
import { Title, Text, Badge } from '@mantine/core';
import { useNavigation } from '../hooks/useNavigation';

export const FeaturedMedia: React.FC = () => {
    const { featuredMediaConfig } = useNavigation();

    const iframeCode = featuredMediaConfig.embedUrl.replace(
        '<iframe',
        '<iframe class="w-full h-[190px] border-none" loading="lazy"'
    );

    return (
        <section className="w-full py-20 bg-[hsl(var(--background))]">
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
                    <a
                        href={featuredMediaConfig.badge.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-center desk:self-start transition duration-300 hover:scale-[1.03]"
                    >
                        <Badge
                            variant="filled"
                            radius="sm"
                            size="lg"
                            className={`bg-[hsl(var(--${featuredMediaConfig.badge.color}))] text-[hsl(var(--secondary-foreground))]`}
                        >
                            {featuredMediaConfig.badge.label}
                        </Badge>
                    </a>
                </div>

                {/* Reproductor, TODO: editar componente de iframe a color negro y cuadrar estilos y responisve con mi paleta de colores etc... */}
                <div
                    className="desk:w-2/3 w-full shadow-2xl rounded-lg overflow-hidden border border-[hsl(var(--border))] opacity-0 animate-fade-in-up delay-[200ms]"
                    dangerouslySetInnerHTML={{ __html: iframeCode }}
                />
            </div>
        </section>
    );
};
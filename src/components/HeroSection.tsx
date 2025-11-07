// src/components/HeroSection.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'

import heroImage from '../assets/hero-bg.webp';
import { IconMusic } from '@tabler/icons-react'
import { useNavigation } from '../hooks/useNavigation'

export const HeroSection: React.FC = () => {
    const { heroButton } = useNavigation()
    const primaryColor = 'bg-[hsl(var(--primary))]';
    const primaryForeground = 'text-[hsl(var(--background))]';
    const primaryBorder = 'border-[hsl(var(--primary))]';

    return (
        <section
            className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-brightness-97" />

            {/* Contenido Centrado */}
            <div className="relative z-10 text-center text-[hsl(var(--foreground))]">

                {/* Logo/Título */}
                <h1 className="text-6xl md:text-8xl font-serif font-extrabold mb-4 drop-shadow-lg opacity-0 animate-fade-in-up">
                    Elesar De La Vega
                </h1>

                {/* Subtítulo */}
                <p className="text-xl md:text-2xl mb-8 font-sans tracking-wide opacity-0 animate-fade-in-up delay-[200ms]">
                    Crafting Sonic Journeys for the Modern Age.
                </p>

                {/* Botón  */}
                <div className="inline-block opacity-0 animate-fade-in-up delay-[400ms]">
                    <Button
                        component={Link}
                        to={heroButton.href}
                        className={`inline-flex items-center rounded-lg px-8 py-2 text-lg font-bold shadow-lg 
                                     ${primaryColor} ${primaryForeground} ${primaryBorder}
                                     transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl
                                     animate-pulse-shadow`}
                        variant="filled"
                        radius="md"
                        rightSection={<IconMusic className="h-5 w-5" />}
                        classNames={{
                            inner: 'flex items-center gap-[10px] !w-auto',
                        }}
                    >
                        Música
                    </Button>
                </div>
            </div>
        </section>
    );
};
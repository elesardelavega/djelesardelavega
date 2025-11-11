import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'

import heroImage from '../../assets/hero-bg.webp'
import { IconMusic } from '@tabler/icons-react'
import { useNavigation } from '../../hooks/useNavigation'

export const HeroSection: React.FC = () => {
    const { musicLink } = useNavigation()
    const primaryColor = 'bg-[hsl(var(--primary))]'
    const primaryForeground = '!text-[hsl(var(--background))]'
    const primaryBorder = 'border-[hsl(var(--primary))]'

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
                <h1 className="text-6xl sm:text-7xl desk:text-8xl font-serif font-extrabold mb-4 drop-shadow-lg opacity-0 animate-fade-in-up">
                    Elesar <br />
                    De La Vega
                </h1>

                {/* Subtítulo */}
                <p className="text-xl sm:text-2xl mb-8 font-sans tracking-wide opacity-0 animate-fade-in-up delay-[1000ms]">
                    A state of trance
                </p>

                {/* Botón  */}
                <div className="inline-block opacity-0 animate-fade-in-up delay-[1000ms]">
                    <Button
                        component={Link}
                        to={musicLink.href}
                        className={`inline-flex items-center rounded-lg px-8 py-2 text-lg font-bold shadow-lg 
                                     ${primaryColor} ${primaryForeground} ${primaryBorder}
                                     transition duration-300 transform ease-in-out
                                     animate-pulse-shadow hover:shadow-2xl`}
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
    )
}
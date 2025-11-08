// src/components/FeatureCards.tsx
import React from 'react'
import { IconMusic, IconUser, IconPhoto } from '@tabler/icons-react'
import { FeatureCardItem } from './FeatureCardItem'

import photoMe from '../assets/me/foto.png'
import photoGallery from '../assets/gallery/aniñon.jpg'
import photoJaula from '../assets/me/jaula.jpg'

const features = [
    {
        icon: IconMusic,
        title: 'MÚSICA',
        description: 'Explora mis últimos sets y producciones.',
        color: 'primary',
        href: '/musica',
        image: photoJaula,
        imageAlt: 'Actuación en cabina',
    },
    {
        icon: IconUser,
        title: 'SOBRE MÍ',
        description: 'Descubre mi estilo, trayectoria, setup y eventos.',
        color: 'secondary',
        href: '/sobre-mi',
        image: photoMe,
        imageAlt: 'Foto de retrato personal',
    },
    {
        icon: IconPhoto,
        title: 'GALERÍA',
        description: 'Mira mis mejores fotos actuando.',
        color: 'primary',
        href: '/galeria',
        image: photoGallery,
        imageAlt: 'Foto de evento',
    },
];

export const FeatureCards: React.FC = () => {

    const items = features.map((feature, index) => (
        <FeatureCardItem
            key={index}
            data={feature}
        />
    ));

    return (
        <section className="w-full bg-[hsl(var(--background))]">
            <div className="mx-auto max-w-[1440px] px-8 py-20 flex flex-col">
                <div
                    className="grid grid-cols-1 gap-8 
                               sm:grid-cols-2 
                               md:grid-cols-3"
                >
                    {items}
                </div>
            </div>
        </section>
    );
};
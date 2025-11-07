// src/pages/About.tsx
import React from 'react';

export const AboutPage: React.FC = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Sobre Mí (Elesar De La Vega)</h2>
            <p className="text-[hsl(var(--muted-foreground))]">
                Aquí irá la información biográfica y la historia del artista.
            </p>
        </div>
    );
};
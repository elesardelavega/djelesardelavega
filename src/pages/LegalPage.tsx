// src/pages/LegalPage.tsx
import React, { type FC } from 'react';

interface LegalPageProps {
    title: string;
    children: React.ReactNode;
}

export const LegalPage: FC<LegalPageProps> = ({ title, children }) => {
    return (
        <div className="p-8 mx-auto max-w-[1440px]">
            {/* Título */}
            <h1 className="text-4xl font-serif font-bold mb-8 text-[hsl(var(--foreground))]">
                {title}
            </h1>

            {/* Contenido */}
            <div className="text-[hsl(var(--muted-foreground))] space-y-4">
                {children}
            </div>
        </div>
    );
};
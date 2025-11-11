import React, { type FC } from 'react'

interface LegalPageProps {
    title: string
    children: React.ReactNode
}

export const LegalPage: FC<LegalPageProps> = ({ title, children }) => {
    return (
        <section className="min-h-[calc(100vh-4rem)]">
            {/* Título */}
            <h1 className="text-4xl font-serif font-bold mb-8 text-[hsl(var(--foreground))]">
                {title}
            </h1>

            {/* Contenido */}
            <div className="text-[hsl(var(--muted-foreground))] space-y-4">
                {children}
            </div>
        </section>
    )
}
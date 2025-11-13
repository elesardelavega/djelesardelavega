import React, { type FC } from 'react'

interface LegalPageProps {
    title: string
    children: React.ReactNode
}

export const LegalPage: FC<LegalPageProps> = ({ title, children }) => {
    return (
        <section className="min-h-[calc(100vh-4rem)]">
            {/* Contenido */}
            <div className="text-[hsl(var(--muted-foreground))] space-y-4">
                {children}
            </div>
        </section>
    )
}
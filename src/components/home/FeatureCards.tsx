import React from 'react'
import { FeatureCardItem } from './FeatureCardItem'
import { features } from '../../data/cardsHome'

export const FeatureCards: React.FC = () => {

    const items = features.map((feature, index) => (
        <FeatureCardItem
            key={index}
            data={feature}
        />
    ))

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
    )
}
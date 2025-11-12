import React from 'react'
import { HeroSection } from '../components/home/HeroSection'
import { FeatureCards } from '../components/home/FeatureCards'
import { FeaturedMedia } from '../components/home/FeaturedMedia'

export const HomePage: React.FC = () => {
    return (
        <>
            {/* Principal */}
            <HeroSection />

            {/* Cards */}
            <FeatureCards />

            {/* Media */}
            <FeaturedMedia />
        </>
    )
}
// src/pages/Home.tsx
import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { FeatureCards } from '../components/FeatureCards'
import { FeaturedMedia } from '../components/FeaturedMedia'

export const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeatureCards />
            <FeaturedMedia />
        </>
    )
}
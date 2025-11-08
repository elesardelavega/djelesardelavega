// src/pages/Home.tsx
import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { FeatureCards } from '../components/FeatureCards'

export const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeatureCards />
        </>
    );
};
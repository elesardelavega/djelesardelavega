// src/pages/About.tsx
import React from 'react'
import BioSection from '../components/BioSection.tsx'
import EventHighlights from '../components/EventHighlights.tsx'

export const AboutPage: React.FC = () => {
    return (
        <>
            {/* Biografía*/}
            <BioSection />

            {/* Actuaciones*/}
            <EventHighlights />
        </>

    );
};
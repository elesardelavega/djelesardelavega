import React from 'react'
import BioSection from '../components/about/BioSection.tsx'
import EventHighlights from '../components/about/EventHighlights.tsx'
import SetupGear from '../components/about/SetupGear.tsx'

export const AboutPage: React.FC = () => {
    return (
        <>
            {/* Biografía*/}
            <BioSection />

            {/* Actuaciones*/}
            <EventHighlights />

            {/* Equipamiento*/}
            <SetupGear />
        </>

    )
}
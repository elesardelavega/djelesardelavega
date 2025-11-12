import React from 'react'
import MusicMashupBlock from '../components/music/MusicMashupsBlock'
import MusicRemixBlock from '../components/music/MusicRemixBlock'
import MusicSesionBlock from '../components/music/MusicSesionBlock'

export const MusicPage: React.FC = () => {
    return (
        <>
            {/* Mashups */}
            <MusicMashupBlock />

            {/* Remix */}
            <MusicRemixBlock />

            {/* Sesiones */}
            <MusicSesionBlock />
        </>
    )
}
import React from 'react'
import PhotoGrid from '../components/gallery/PhotoGrid'
import VideoGrid from '../components/gallery/VideoGrid'

export const GalleryPage: React.FC = () => {
    return (
        <>
            {/* Grid fotos */}
            <PhotoGrid />

            {/* Grid videos */}
            <VideoGrid />
        </>
    )
}
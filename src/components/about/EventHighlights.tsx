import React from 'react'
import EventCard from './EventCard'
import { eventHighlightItems } from '../../data/eventHighlightsData'

const EventHighlights: React.FC = () => {
    return (
        <section className="w-full pb-20 bg-[hsl(var(--background))]" id="actuaciones">
            <div className="mx-auto max-w-[1440px] px-8">

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {eventHighlightItems.map((item, index) => (
                        <EventCard
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventHighlights
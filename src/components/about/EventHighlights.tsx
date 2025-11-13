import React from 'react'
import EventCard from './EventCard'
import { eventHighlightItems, eventDates } from '../../data/eventHighlightsData'
import { Title, Card } from '@mantine/core'

const EventHighlights: React.FC = () => {
    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]" id="actuaciones">
            <div className="mx-auto max-w-[1440px] px-8 flex flex-col lg:flex-row gap-12 items-stretch min-h-[400px]">

                {/* imagen */}
                <div className="w-full lg:w-2/3 flex flex-col">
                    <EventCard item={eventHighlightItems[0]} index={0} />
                </div>

                {/* calendario */}
                <div className="w-full lg:w-1/3 flex">
                    <Card
                        shadow="xl"
                        radius="lg"
                        withBorder
                        padding="lg"
                        className={`
                        flex-1 h-full
                        group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))] 
                        shadow-none transition-all cursor-pointer 
                        hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))] 
                        opacity-0 animate-fade-in-up
                    º`}
                    >
                        <Title order={3} className="text-[hsl(var(--foreground))] mb-6">
                            Próximos Eventos 📅
                        </Title>
                        <div className="space-y-4">
                            {eventDates.map((event, i) => (
                                <div key={i} className="border-b border-[hsl(var(--border))] pb-4">
                                    <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))] uppercase">
                                        <span>{event.date}</span>
                                        <span>{event.city} - {event.venue}</span>
                                    </div>
                                    <div className="flex justify-between text-md text-[hsl(var(--foreground))] font-semibold">
                                        <span>{event.type ?? 'Evento'}</span>
                                        <span>{event.time ?? 'Hora por confirmar'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

            </div>
        </section>

    )
}

export default EventHighlights

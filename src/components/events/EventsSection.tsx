"use client";

import SectionTitle from "./SectionTitle";
import EventCardItem from "./EventCardItem";

interface EventItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface EventsSectionProps {
    title: string;
    items: EventItem[];
}

export default function EventsSection({ title, items }: EventsSectionProps) {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title={title} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
                    {items.map((item) => (
                        <EventCardItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

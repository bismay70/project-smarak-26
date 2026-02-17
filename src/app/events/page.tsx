"use client";

import Slider from "@/components/slider";
import { events, workshops } from "@/app/config/events";
import { HeroSection, EventsSection } from "@/components/events/index";

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-[url('/images/bg.png')]  bg-center">
            <HeroSection
                title="upcoming events"
                description="Discover and register for exciting events. Join us for competitions, workshops, and more to enhance your skills and expand your network."
            />

            <EventsSection title="Flagship Events" items={events} />
            <Slider />
            <div className="pt-20" />

            <EventsSection title="Workshop & Seminar" items={workshops} />

            <Slider />
        </div>
    );
}

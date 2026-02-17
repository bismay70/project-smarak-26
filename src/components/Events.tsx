"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { events } from "@/app/config/events";
import EventCardItem from "./events/EventCardItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            containScroll: false,
            slidesToScroll: 1,
        },
        [
            Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
            }),
        ],
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section
            className="relative w-full min-h-[65vh] md:min-h-screen overflow-x-hidden flex flex-col items-center justify-start gap-6 sm:gap-8 md:gap-12 pb-12 bg-cover bg-center bg-no-repeat py-20"
            style={{ backgroundImage: "url('/images/events.png')" }}
        >
            <div className="absolute inset-0 bg-white/10 z-0"></div>

            <h1 className="font-saman text-6xl  lg:text-[6rem] xl:pt-16 font-light text-[#980204] font-samarkan tracking-wide drop-shadow-[4px_4px_0px_rgba(246,164,64,1)]">
                Events
            </h1>

            <div className="relative w-full z-10">
                {/* Left Arrow Button */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-[#980204] hover:bg-[#7a0103] text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F6A440] focus:ring-offset-2"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                    onClick={scrollNext}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-[#980204] hover:bg-[#7a0103] text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F6A440] focus:ring-offset-2"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <div className="w-full mx-auto py-20 px-2" ref={emblaRef}>
                    <div className="flex">
                        {events.map((event, i) => (
                            <div
                                key={i}
                                className="flex-[0_0_100%] lg:flex-[0_0_45%] min-w-0 px-4 lg:px-[5vw] xl:px-[8vw]"
                            >
                                <EventCardItem
                                    id={event.id}
                                    title={event.title}
                                    description={event.description}
                                    image={event.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

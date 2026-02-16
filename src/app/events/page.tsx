import { EventsGrid, EventsHero } from "@/components/events/index";
import Slider from "@/components/slider";

interface EventItem {
    id: number;
    title: string;
    description: string;
}

const events: EventItem[] = [
    {
        id: 1,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 2,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 3,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 4,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 5,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
    {
        id: 6,
        title: "स्पर्धा",
        description:
            "Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.",
    },
];

const workshops: EventItem[] = [
    {
        id: 1,
        title: "STAAD Pro & Revit Workshop",
        description:
            "In this training session participants will dive into modern 3D modelling, design automation, structural load analysis, and real-world engineering applications. The session empowers learners with industry-ready skills to analyse, optimize, and model building structures. ",
    },
    {
        id: 2,
        title: "BIS Seminar",
        description:
            "This seminar offers students in-depth exposure to the Bureau of Indian Standards (BIS) and its significance in civil engineering. It covers essential industrial parameters, regulatory guidelines, and compliance requirements for construction materials and daily-use products. By understanding these standards, students will develop a strong foundation in safety, quality control, and industry best practices.",
    },
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-[url('/images/bg.png')]  bg-center overflow-hidden">
            <EventsHero />
            <EventsGrid title="Flagship Events" events={events} />
            <Slider />
            <div className="mt-20"></div>
            <EventsGrid title="Workshop & Seminar" events={workshops} />
            <Slider />
        </div>
    );
}

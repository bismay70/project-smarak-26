"use client";

interface HeroSectionProps {
    title: string;
    description: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
    return (
        <section className="relative py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                    style={{
                        fontFamily: "Saman, serif",
                        color: "#8B1A1A",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    {title}
                </h1>
                <p className="text-lg md:text-2xl text-[#8B1A1A] max-w-3xl mx-auto leading-relaxed font-serif mt-10">
                    {description}
                </p>
            </div>
        </section>
    );
}

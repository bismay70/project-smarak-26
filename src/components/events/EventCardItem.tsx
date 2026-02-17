"use client";

import Image from "next/image";

interface EventCardItemProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function EventCardItem({
    title,
    description,
    image,
}: EventCardItemProps) {
    return (
        <div className="bg-gradient-to-br bg-[#f6a440] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-lg mx-auto">
            <div className="relative rounded-xl h-44 md:h-64 mb-4 border-2 border-[#E89654] overflow-hidden bg-[#FBD4A8]">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <h3 className="text-3xl font-bold text-[#5A1A0F] mb-3 font-saman">
                {title}
            </h3>
            <p className="text-base font-poppins text-[#5A1A0F] mb-4 leading-relaxed">
                {description}
            </p>
            {/* <button className="bg-[#8B1A1A] text-white px-6 py-2 rounded-full hover:bg-[#6B1515] transition-colors font-medium text-sm">
                Explore Now
            </button> */}
        </div>
    );
}

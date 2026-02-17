"use client";

import Image from "next/image";

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="flex items-center justify-center mb-12 gap-4">
            <Image
                src="/images/arrow-left.png"
                alt="arrow left"
                width={150}
                height={30}
                className="object-contain"
            />
            <div>
                <h2
                    className={`px-4 text-3xl md:text-4xl font-semibold text-[#8B1A1A] font-poppins text-center`}
                >
                    {title}
                </h2>
            </div>
            <Image
                src="/images/arrow-right.png"
                alt="arrow right"
                width={150}
                height={30}
                className="object-contain"
            />
        </div>
    );
}

"use client";
import Image from "next/image";

export default function ComingSoon() {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[url('/images/bg.png')] bg-center bg-cover">
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center px-6 text-center">
                {/* Coming Soon Text */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#980204] tracking-wide drop-shadow-lg mb-4">
                    Coming Soon
                </h1>

                {/* Tagline */}
                <p className="text-sm sm:text-lg md:text-xl text-[#980204] font-serif font-semibold tracking-wider max-w-2xl mb-8 drop-shadow-sm">
                    &ldquo;Shaping Architecture Through Engineering
                    Thought&rdquo;
                </p>

                {/* Date */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block w-16 md:w-24 opacity-80">
                        <Image
                            src="/images/arrow-left.png"
                            alt=""
                            width={200}
                            height={200}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <p className="text-xl sm:text-2xl md:text-3xl text-[#980204] font-serif font-bold whitespace-nowrap drop-shadow-md">
                        13 - 15 March 2026
                    </p>

                    <div className="hidden sm:block w-16 md:w-24 opacity-80">
                        <Image
                            src="/images/arrow-right.png"
                            alt=""
                            width={200}
                            height={200}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-[#980204]/40 my-8 rounded-full" />

                {/* Stay tuned message */}
                <p className="text-base sm:text-lg text-[#980204]/80 font-serif italic">
                    Stay tuned for something amazing
                </p>
            </div>
        </div>
    );
}

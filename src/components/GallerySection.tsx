"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { galleryImages } from "../app/config/gallery";

export default function GallerySection() {
    return (
      
        <div className="relative font-saman w-full overflow-hidden bg-[#F0EAD6] h-auto py-8 lg:h-screen lg:py-0">

  
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://res.cloudinary.com/dxi7mifgc/image/upload/v1771082363/image_284_fwwnpj.jpg"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-100"
                />
            </div>

      
            <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-2 md:space-y-4">
   
                <h2 className="text-5xl md:text-7xl font-bold text-[#980204] font-samarkan tracking-wide drop-shadow-[4px_4px_0px_rgba(246,164,64,1)]">
                    gallery
                </h2>

          
                <div className="flex w-full">
                    <Marquee pauseOnHover={true} speed={90} gradient={false} className="overflow-y-visible py-6 md:py-16">
                        {galleryImages.map((img: string, i: number) => (
                            <div
                                key={i}
                                className="relative mx-4 h-[300px] w-[220px] md:mx-8 md:h-[400px] md:w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-[10px] md:border-[16px] border-[#f5ac40] bg-[#F6A440] shadow-2xl transition-all duration-300 hover:z-50 hover:-translate-y-4 hover:scale-110"
                            >
                                <div className="relative h-full w-full rounded-sm border-[1px] border-[#1e1e1e]">
                                    <Image
                                        src={img}
                                        alt={`Gallery ${i}`}
                                        fill
                                        sizes="(max-width: 768px) 220px, 300px"
                                        className="object-cover sepia-[0.2]"
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
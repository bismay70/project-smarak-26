"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { galleryImages } from "../app/config/gallery";

export default function GallerySection() {
    return (
        <div
            id="gallery"
            className="relative w-full overflow-hidden bg-[#F0EAD6]"
        >
            <div className="relative w-full py-16 lg:h-screen lg:py-0 flex flex-col justify-center">
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src="https://res.cloudinary.com/dxi7mifgc/image/upload/v1771153409/Gemini_Generated_Image_wehiqnwehiqnwehi_nrvpxn.png"
                        alt="Background"
                        fill
                        priority
                        quality={75}
                        sizes="100vw"
                        className="object-cover opacity-60"
                        style={{ objectPosition: "center" }}
                    />
                </div>

                <div className="relative z-10 flex w-full flex-col items-center justify-center space-y-8 md:space-y-12">
                    <h1 className="font-saman text-6xl lg:text-[6rem] py-20 font-light text-[#980204] font-samarkan tracking-wide drop-shadow-[4px_4px_0px_rgba(246,164,64,1)]">
                        gallery
                    </h1>

                    <div className="flex w-full overflow-hidden">
                        <Marquee
                            pauseOnHover={true}
                            speed={80}
                            gradient={false}
                            className="overflow-y-visible py-10 md:py-16 pb-20"
                        >
                            {galleryImages.map((img: string, i: number) => (
                                <div
                                    key={i}
                                    className="transform-gpu backface-hidden will-change-transform relative mx-4 flex-shrink-0 cursor-pointer transition-all duration-300 hover:z-50 hover:scale-110 
                                    h-[200px] w-[218px] 
                                    md:mx-8 md:h-[340px] md:w-[350px] 
                                    xl:w-[408px] xl:h-[390px]
                                    rounded-xl border-[10px] md:border-[23px] border-[#F6A440] bg-[#F6A440] 
                                    shadow-xl hover:shadow-2xl"
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-sm border-[1px] border-[#1e1e1e]">
                                        <Image
                                            src={img}
                                            alt={`Gallery item ${i}`}
                                            fill
                                            sizes="(max-width: 768px) 250px, (max-width: 1200px) 400px, 500px"
                                            className="object-cover sepia-[0.2]"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

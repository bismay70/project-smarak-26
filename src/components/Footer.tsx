"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { footerCards } from "../config/contact";

const Footer = () => {
    return (
        <footer
            className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-hidden"
            id="contact"
        >
            <div className="absolute inset-0 bg-[#f5e6cc]/5"></div>

            {/* Top Cards */}
            <div className="relative z-20 py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {footerCards.map((card) => {
                    const CardContent = (
                        <div className="rounded-3xl overflow-hidden shadow-lg border-[6px] border-[#f5b461] hover:scale-105 transition-transform cursor-pointer">
                            {/* Image */}
                            <div className="relative h-56">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Title */}
                            <div className="bg-gradient-to-b from-[#f5b461] to-[#e8a047] py-4">
                                <h3 className="text-center text-[#7a1a0f] text-3xl tracking-wide font-saman">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    );

                    return card.link ? (
                        <Link
                            key={card.id}
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {CardContent}
                        </Link>
                    ) : (
                        <div key={card.id}>{CardContent}</div>
                    );
                })}
            </div>

            {/* Bottom Section */}
            <div className="relative z-20 bg-[#980204] text-white mt-8">
                <div className="max-w-[1900px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-40 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
                        {/* Address */}
                        <div className="text-center md:text-left space-y-5">
                            <h4 className="text-[#f5b461] font-saman text-4xl tracking-wide">
                                Address
                            </h4>
                            <p className="font-serif text-lg text-gray-200 leading-relaxed">
                                National Institute of Technology Rourkela <br />
                                Odisha, India - 769008
                            </p>
                        </div>

                        {/* Logo */}
                        <div className="flex flex-col items-center space-y-5">
                            <Image
                                src="/nit-logo.svg"
                                alt="NIT Logo"
                                width={130}
                                height={130}
                            />
                            <p className="font-serif text-sm text-[#f5b461] text-center">
                                © 2026 CEST Club, NITR. All rights reserved.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="text-center md:text-right space-y-5">
                            <h4 className="text-[#f5b461] font-saman text-4xl tracking-wide">
                                Contact Us
                            </h4>

                            <div className="font-serif text-lg text-gray-200 space-y-2">
                                <p>
                                    <Link
                                        href={
                                            "https://whatsapp.com/channel/0029Vb7M5irLNSZwg8uMJC0m"
                                        }
                                        target="_blank"
                                        className="hover:text-[#F6A440] hover:underline underline-offset-4 transition-colors"
                                    >
                                        Join our WhatsApp Channel
                                    </Link>
                                </p>

                                <p>
                                    <a
                                        href="mailto:smaraknitrourkela@gmail.com"
                                        className="hover:text-[#F6A440] transition-colors hover:underline underline-offset-4"
                                    >
                                        smaraknitrourkela@gmail.com
                                    </a>
                                </p>

                                <p>
                                    <a
                                        href="tel:+918260651321"
                                        className="hover:text-[#F6A440] transition-colors hover:underline underline-offset-4"
                                    >
                                        Diptesh : 8260651321
                                    </a>
                                </p>

                                <p>
                                    <a
                                        href="tel:+919451572754"
                                        className="hover:text-[#F6A440] transition-colors hover:underline underline-offset-4"
                                    >
                                        Rishabh : 9451572754
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 py-5 text-center">
                    <p className="font-poppins text-sm">
                        Made with ❤️ by Team Webwiz
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

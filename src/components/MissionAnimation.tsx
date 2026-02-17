"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { missionImages, getMissionCurveData } from "../app/config/mission";

// Define Keyframes
const styles = `
  @keyframes spin-circle {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes counter-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  @keyframes z-index-pulse {
    0% { z-index: 10; }
    50% { z-index: 10; }
    60% { z-index: 50; } 
    85% { z-index: 50; } 
    100% { z-index: 10; }
  }
`;

interface CurveData {
    d: string;
    width: number;
    opacity: number;
}

// Optimized SVG Component
const MissionSVGLines = React.memo(
    ({ showLines, count }: { showLines: boolean; count: number }) => {
        if (!showLines) return null;
        const curves = useMemo(
            () =>
                Array.from({ length: count }).map((_, i) =>
                    getMissionCurveData(i, count),
                ),
            [count],
        );

        return (
            <div className="absolute inset-0 pointer-events-none animate-[spin-circle_40s_linear_infinite] will-change-transform">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 800 800"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {curves.map((group, i) => (
                        <g key={i}>
                            {group.map((curve: CurveData, idx: number) => (
                                <path
                                    key={idx}
                                    d={curve.d}
                                    stroke="#5D4037"
                                    strokeWidth={curve.width}
                                    fill="none"
                                    strokeLinecap="round"
                                    style={{ opacity: curve.opacity }}
                                />
                            ))}
                        </g>
                    ))}
                </svg>
            </div>
        );
    },
);
MissionSVGLines.displayName = "MissionSVGLines";

export default function MissionAnimation() {
    const [radius, setRadius] = useState<number>(260);
    const [centerSize, setCenterSize] = useState<number>(192);
    const [itemSize, setItemSize] = useState<number>(224);
    const [showLines, setShowLines] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setRadius(105);
                setCenterSize(100);
                setItemSize(150);
                setShowLines(false);
            } else if (width < 1024) {
                setRadius(240);
                setCenterSize(160);
                setItemSize(200);
                setShowLines(true);
            } else {
                setRadius(320);
                setCenterSize(192);
                setItemSize(250);
                setShowLines(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const DURATION = 40; // Seconds

    return (
        <div
            id="mission"
            className="py-40 bg-[#F0EAD6] relative overflow-hidden"
        >
            <style>{styles}</style>

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://res.cloudinary.com/dxi7mifgc/image/upload/v1771091634/Desktop_-_28_egjvfo.svg"
                    alt="Mission Background"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-100 mix-blend-multiply"
                    priority
                />
            </div>

            {/* Main Container */}
            <div className="relative font-saman flex w-full items-center justify-center h-auto min-h-[500px] lg:h-[900px]">
                <div className="relative z-10 flex items-center justify-center -mt-4 lg:-mt-30">
                    <div
                        className="absolute z-20 flex items-center justify-center rounded-full bg-[#980204] text-center shadow-[0_0_40px_rgba(154,14,18,0.5)] border-1 border-[#F89823] ring-4 ring-[#9a0e12] ring-offset-2 ring-offset-[#F89823]"
                        style={{ width: centerSize, height: centerSize }}
                    >
                        <div className="flex flex-col items-center justify-center space-y-1">
                            <span className="text-xl sm:text-2xl lg:text-3xl font-light text-[#F89823] font-samarkan drop-shadow-sm">
                                our
                            </span>
                            <span className="text-xl sm:text-3xl lg:text-4xl font-light text-[#F89823] font-samarkan drop-shadow-md">
                                mission
                            </span>
                        </div>
                    </div>

                    <div
                        className="relative flex items-center justify-center will-change-transform"
                        style={{
                            width: radius * 2 + itemSize,
                            height: radius * 2 + itemSize,
                        }}
                    >
                        <MissionSVGLines
                            showLines={showLines}
                            count={missionImages.length}
                        />

                        <div
                            className="absolute inset-0 animate-[spin-circle_40s_linear_infinite]"
                            style={{ animationDuration: `${DURATION}s` }}
                        >
                            {missionImages.map((img: string, i: number) => {
                                const angle = (i * 360) / missionImages.length;

                                const delay =
                                    -1 * (DURATION / missionImages.length) * i;

                                return (
                                    <div
                                        key={i}
                                        className="absolute rounded-full"
                                        style={{
                                            width: itemSize,
                                            height: itemSize,
                                            top: "50%",
                                            left: "50%",

                                            transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,

                                            animation: `z-index-pulse ${DURATION}s linear infinite`,
                                            animationDelay: `${delay}s`,
                                        }}
                                    >
                                        <div
                                            className="w-full h-full relative animate-[counter-spin_40s_linear_infinite] will-change-transform"
                                            style={{
                                                animationDuration: `${DURATION}s`,
                                            }}
                                        >
                                            <div className="absolute inset-0 rounded-full scale-110" />
                                            <div
                                                className="relative w-full h-full overflow-hidden rounded-full border-4 border-[#e8cfa0] shadow-2xl ring-4 ring-[#6C412B]"
                                                style={{
                                                    width: itemSize - 16,
                                                    height: itemSize - 16,
                                                    margin: "8px",
                                                }}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Mission ${i}`}
                                                    fill
                                                    sizes="(max-width: 768px) 150px, 250px"
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import the images and the helper function
import { missionImages, getMissionCurveData } from "../app/config/mission";

// Interface for the curve data returned by the helper function
interface CurveData {
  d: string;
  width: number;
  opacity: number;
}

export default function MissionAnimation() {
  const [radius, setRadius] = useState<number>(260);
  const [centerSize, setCenterSize] = useState<number>(192);
  const [itemSize, setItemSize] = useState<number>(224);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: Tight dimensions to fit nicely
        setRadius(85);
        setCenterSize(90);
        setItemSize(100);
      } else if (width < 1024) {
        // Tablet
        setRadius(200);
        setCenterSize(160);
        setItemSize(180);
      } else {
        // Desktop
        setRadius(260);
        setCenterSize(192);
        setItemSize(224);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative font-saman flex w-full items-center justify-center overflow-hidden bg-[#F0EAD6] h-auto min-h-[350px] py-12 lg:h-[900px] lg:py-0">
      
      {/* Background Image Replacement */}
      <div className="absolute inset-0 z-0">
        <Image
          // Using a paper/parchment texture to match the theme
          src="https://res.cloudinary.com/dxi7mifgc/image/upload/v1771091634/Desktop_-_28_egjvfo.svg"
          alt="Mission Background"
          fill
          sizes="100vw"
          className="object-cover opacity-100 mix-blend-multiply" // Low opacity to blend
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-center -mt-4 lg:-mt-30">
        {/* Central Hub (Static) */}
        <div
          className="absolute z-20 flex items-center justify-center rounded-full bg-[#980204] text-center shadow-[0_0_40px_rgba(154,14,18,0.5)] border-1 border-[#F89823] ring-4 ring-[#9a0e12] ring-offset-2 ring-offset-[#F89823]"
          style={{ width: centerSize, height: centerSize }}
        >
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#F89823] font-samarkan drop-shadow-sm">
              our
            </span>
            <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#F89823] font-samarkan drop-shadow-md">
              mission
            </span>
          </div>
        </div>

        {/* Rotating Flower Structure */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            width: radius * 2 + itemSize,
            height: radius * 2 + itemSize,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* SVG Curve Connections Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="h-full w-full"
              viewBox="0 0 800 800"
              preserveAspectRatio="xMidYMid meet"
            >
              {missionImages.map((_, i: number) => (
                <g key={i}>
                  {getMissionCurveData(i, missionImages.length).map(
                    (curve: CurveData, idx: number) => (
                      <path
                        key={idx}
                        d={curve.d}
                        stroke="#5D4037"
                        strokeWidth={curve.width}
                        fill="none"
                        strokeLinecap="round"
                        className="transition-all duration-500"
                        style={{ opacity: curve.opacity }}
                      />
                    )
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Images (Petals) */}
          {missionImages.map((img: string, i: number) => {
            const angle = (i * 360) / missionImages.length;
            return (
              <motion.div
                key={i}
                className="absolute flex items-center justify-center rounded-full bg-[#F0EAD6]"
                style={{
                  width: itemSize,
                  height: itemSize,
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div className="absolute inset-0 rounded-full scale-110" />
                <div
                  className="relative overflow-hidden rounded-full border-4 border-[#e8cfa0] shadow-2xl ring-4 ring-[#6C412B]"
                  style={{ width: itemSize - 16, height: itemSize - 16 }}
                >
                  <motion.div
                    className="h-full w-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 40,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Mission ${i}`}
                      className="h-full w-full object-cover transform scale-105"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
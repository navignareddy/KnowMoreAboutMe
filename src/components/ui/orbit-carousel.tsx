"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface ImageItem {
  id: string | number;
  url: string;
  label: string;
}

interface OrbitCarouselProps {
  images: ImageItem[];
  speed?: number;
  zDepth?: number;
  imageSize?: number;
  borderRadius?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function OrbitCarousel({
  images,
  speed = 0.5,
  zDepth = 350,
  imageSize = 175,
  borderRadius = 12,
  pauseOnHover = true,
  className,
}: OrbitCarouselProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const numImages = images.length;
  const angleSlice = 360 / numImages;

  React.useEffect(() => {
    if (isHovering && pauseOnHover) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + speed) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isHovering, pauseOnHover, speed]);

  const handleImageClick = (index: number) => {
    const targetRotation = -index * angleSlice;
    setRotation(targetRotation % 360);
  };

  return (
    <div
      className={`relative w-full min-h-[600px] flex items-center justify-center overflow-hidden ${className || ""}`}
    >
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="relative"
          style={{
            width: imageSize * 2,
            height: imageSize * 2,
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateY: rotation }}
          transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
        >
          {images.map((image, index) => {
            const angle = (index * angleSlice * Math.PI) / 180;
            const x = Math.cos(angle) * zDepth;
            const z = Math.sin(angle) * zDepth;

            return (
              <motion.div
                key={image.id}
                className="absolute cursor-pointer"
                style={{
                  width: imageSize,
                  height: imageSize,
                  left: "50%",
                  top: "50%",
                  marginLeft: -imageSize / 2,
                  marginTop: -imageSize / 2,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                animate={{
                  x,
                  z,
                  rotateY: -rotation,
                }}
                transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
                onClick={() => handleImageClick(index)}
                whileHover={{ scale: 1.15 }}
              >
                <div
                  className={`w-full h-full rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-transform ${
                    isDark ? "ring-2 ring-border" : "ring-2 ring-border"
                  }`}
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <img
                    src={image.url}
                    alt={image.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-white text-center font-bold text-lg drop-shadow-lg">
                      {image.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

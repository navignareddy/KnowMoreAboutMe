"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

interface ImageItem {
  id: string | number;
  url: string;
  label: string;
  category?: string;
  href?: string;
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
  const router = useRouter();
  const isDark = theme === "dark";
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const handleImageClick = (image: ImageItem, index: number) => {
    const targetRotation = -index * angleSlice;
    setRotation(targetRotation % 360);
    
    // Navigate if category or href is provided
    if (image.href) {
      router.push(image.href);
    } else if (image.category) {
      router.push(`/projects?category=${image.category}`);
    }
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
                className="absolute cursor-pointer group"
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
                onClick={() => handleImageClick(image, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.15 }}
              >
                <div
                  className={`w-full h-full rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all relative ${
                    isDark ? "ring-2 ring-border" : "ring-2 ring-border"
                  } ${hoveredIndex === index ? "ring-primary ring-4" : ""}`}
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <img
                    src={image.url}
                    alt={image.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400/1f2937/9ca3af?text=${encodeURIComponent(image.label)}`;
                    }}
                  />
                  {/* Always visible label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3">
                    <div className="text-white text-center font-bold text-sm md:text-base drop-shadow-lg">
                      {image.label}
                    </div>
                  </div>
                  {/* Hover overlay for additional emphasis */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}>
                    <div className="text-white text-center font-bold text-lg md:text-xl drop-shadow-lg bg-black/40 px-4 py-2 rounded-lg">
                      Click to explore
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

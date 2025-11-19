"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 16,
  reverse = false,
  speed = 50,
  speedOnHover = 20,
  className,
}: InfiniteSliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const animationRef = React.useRef<number>();
  const translateX = React.useRef(0);

  React.useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const scrollSpeed = isHovered ? speedOnHover : speed;
    const direction = reverse ? -1 : 1;

    const animate = () => {
      translateX.current += scrollSpeed * direction * 0.01;
      
      const maxTranslate = inner.scrollWidth / 2;
      if (translateX.current >= maxTranslate) {
        translateX.current = 0;
      } else if (translateX.current <= -maxTranslate) {
        translateX.current = 0;
      }

      if (inner) {
        inner.style.transform = `translateX(${translateX.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reverse, speed, speedOnHover, isHovered]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white,white,transparent)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={innerRef}
        className="flex shrink-0 items-center will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {React.Children.map(children, (child) => child)}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {React.Children.map(children, (child) => child)}
        </div>
      </div>
    </div>
  );
}

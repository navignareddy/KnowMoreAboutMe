"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  blurIntensity?: number;
  direction?: "left" | "right";
}

export function ProgressiveBlur({
  blurIntensity = 1,
  direction = "left",
  className,
  ...props
}: ProgressiveBlurProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        direction === "left"
          ? "bg-gradient-to-r from-background via-background/80 to-transparent"
          : "bg-gradient-to-l from-background via-background/80 to-transparent",
        className
      )}
      style={{
        backdropFilter: `blur(${blurIntensity * 8}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 8}px)`,
      }}
      {...props}
    />
  );
}

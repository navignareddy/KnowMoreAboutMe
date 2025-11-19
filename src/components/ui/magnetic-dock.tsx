"use client";

import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect,
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const MouseContext = createContext({ x: 0, y: 0 });

interface DockIconProps {
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function DockIcon({ icon, href, onClick }: DockIconProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);
  const spring = useSpring(distance, { stiffness: 100, damping: 15 });
  const scale = useTransform(spring, [0, 100], [1.5, 1]);

  useEffect(() => {
    const updateDistance = () => {
      if (!ref.current) {
        distance.set(Infinity);
        return;
      }

      const iconRect = ref.current.getBoundingClientRect();
      const containerRect = ref.current.parentElement?.parentElement?.getBoundingClientRect();
      if (!containerRect) {
        distance.set(Infinity);
        return;
      }

      const iconCenterX = iconRect.left + iconRect.width / 2;
      const mouseXAbsolute = containerRect.left + mouse.x;
      const dist = Math.abs(mouseXAbsolute - iconCenterX);
      distance.set(dist);
    };

    updateDistance();
    const interval = setInterval(updateDistance, 16);
    return () => clearInterval(interval);
  }, [mouse, distance]);

  const Component = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <motion.div style={{ scale }} className="origin-bottom">
      <Component
        ref={ref as any}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
        {...props}
      >
        {icon}
      </Component>
    </motion.div>
  );
}

interface MagneticDockProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticDock({ children, className }: MagneticDockProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <MouseContext.Provider value={mouse}>
      <div
        ref={containerRef}
        className={`flex items-center justify-center gap-4 p-4 rounded-2xl bg-background/80 backdrop-blur-lg border border-border shadow-lg w-fit mx-auto ${className || ""}`}
      >
        {children}
      </div>
    </MouseContext.Provider>
  );
}

export { DockIcon };

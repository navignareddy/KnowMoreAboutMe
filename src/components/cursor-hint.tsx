"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CursorHintProps {
  message?: string;
  showDelay?: number;
  hideAfterClick?: boolean;
}

export function CursorHint({ 
  message = "Click on the bubbles to explore",
  showDelay = 2000,
  hideAfterClick = true 
}: CursorHintProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Show hint after delay
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, showDelay);

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasClicked) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleClick = () => {
      if (hideAfterClick) {
        setHasClicked(true);
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [hasClicked, hideAfterClick, showDelay]);

  if (hasClicked && hideAfterClick) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x + 20}px`,
            top: `${position.y - 40}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="px-4 py-2 bg-black/90 backdrop-blur-md text-white text-sm font-medium rounded-lg shadow-xl border border-white/20 whitespace-nowrap">
            {message}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

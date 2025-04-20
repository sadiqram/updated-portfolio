"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticProps {
  children: ReactNode;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const element = magnetic.current;
    let xTo: gsap.QuickToFunc;
    let yTo: gsap.QuickToFunc;

    try {
      xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
    } catch (error) {
      console.error("GSAP initialization error:", error);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!element) return;
      
      const { clientX, clientY } = event;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={magnetic} className="magnetic">
      {children}
    </div>
  );
};

export default Magnetic; 
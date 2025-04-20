"use client"
import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import Magnetic from "@/components/Magnetic";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    if (timeline.current && buttonRef.current) {
      timeline.current.to(buttonRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (timeline.current) {
      timeline.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (timeline.current) {
      timeline.current.reverse();
    }
  };

  return (
    <Magnetic>
      <div className="relative rounded-full overflow-hidden" style={{ overflow: "hidden" }}
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </Magnetic>
  );
}
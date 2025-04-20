"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

interface MagneticProps {
    children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        magnetic.current?.addEventListener("mousemove", handleMouseMove);
        magnetic.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            magnetic.current?.removeEventListener("mousemove", handleMouseMove);
            magnetic.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={magnetic}>
            {children}
        </div>
    );
}
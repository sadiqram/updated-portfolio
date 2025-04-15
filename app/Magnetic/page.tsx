"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

export default function Magnetic({ children }: { children: ReactNode }) {
    const magneticRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

    const xTo = gsap.quickTo(magneticRef.current, "x", {duration: 1, ease: "elastic.out(1, 0.3"} )
    const yTo = gsap.quickTo(magneticRef.current, "y", {duration: 1, ease: "elastic.out(1, 0.3"} )

        magneticRef.current?.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e
            const rect = magneticRef.current?.getBoundingClientRect()
            if (!rect) return
            const { width, height, left, top } = rect
            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)

            xTo(x * 0.5)
            yTo(y * 0.5)

        })
        magneticRef.current?.addEventListener("mouseleave", (e) => {
            xTo(0)
            yTo(0)
        })
    },[])

    return React.cloneElement(children as React.ReactElement<any>, {
        ref: magneticRef,
    })
}
"use client"
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import Magnetic from "@/app/Magnetic/page";

export default function Button({ children, backgroundColor="#ff004f", ...attributes }: { children: ReactNode, backgroundColor?: string, [key: string]: any }) {
    
    const circle = useRef(null)
    const timeline = useRef<gsap.core.Timeline | null>(null)
    let timeoutId: NodeJS.Timeout | null = null


    useEffect(() => {
        timeline.current = gsap.timeline({paused:true}) 
        timeline.current
        .to(circle.current, {tpo: "-25%", width: "150%", duration:0.4, ease:"power3.in"}, "enter")
        .to(circle.current, {tpo: "-150%", width: "125%", duration:0.25}, "exit")



    }, [])
const manageMouseEnter = () => {
    if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
    }
    timeline.current?.tweenFromTo("enter", "exit")
}
const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
        timeline.current?.play()
    }, 300)
}

return (
    <Magnetic>
    <div className="relative rounded-full overflow-hidden" style={{overflow: "hidden"}} {...attributes}
    onMouseEnter={manageMouseEnter} onMouseLeave={manageMouseLeave}
    >
    {children}
    <div ref={circle} className="absolute inset-0 pointer-events-none rounded-full bg-primary" />
    </div>
    </Magnetic>




)



}
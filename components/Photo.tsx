'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'


export default function Photo() {
    return (
        <div className='w-full h-full relative'>
             <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition :{
                delay: 2,
                duration: 0.4,
                ease: "easeIn"
            }}}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition :{
                delay: 2.4,
                duration: 0.4,
                ease: "easeInOut"
            }}}>
                <div className='w-[290px] h-[290px] xl:w-[490px] xl:h-[490px] absolute overflow-hidden rounded-full'>
                    <Image src="/img/close_up_img_sadiq_no_bg2.png" alt="Photo" priority quality = {100} fill className='object-cover' />
                </div>
            </motion.div>

            {/* Circle effect */}
            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] " 
            fill='transparent'
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg" > 
                <motion.circle cx="253" cy="253" r="250" stroke="#ff004f" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial = {{strokeDasharray: "24 10 0 0" }}
                animate = {
                    {
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],

                    }
                }
                transition = {{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                />
            </motion.svg>
            </motion.div>
            
        </div>
    )
}
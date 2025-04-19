import Link from "next/link";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "@/components/Button";

const socials = [
    {
        name: "Github",
        icon: <FaGithub className="w-6 h-6" />,
        href: "https://github.com/sadiqram"
    },
    {
        name: "Twitter",
        icon: <FaXTwitter className="w-6 h-6" />,
        href: "https://x.com/wyla_Stiffla"
    },
    {
        name: "Youtube",
        icon: <FaYoutube className="w-6 h-6" />,
        href: "https://www.youtube.com/@SadiqRam"
    },
    {   
        name: "Linkedin",
        icon: <FaLinkedin className="w-6 h-6" />,
        href: "https://www.linkedin.com/in/ramanu-sadiq"
    }
]

export default function Social({containerStyles, iconStyles}: {containerStyles?: string, iconStyles?: string}) {
    return (
        <div className={`flex gap-8 items-center justify-center ${containerStyles || ''}`}>
            {socials.map((item,index) => {
                return (
                    <Button key={index}>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center justify-center text-primary border border-primary rounded-full p-3 hover:bg-primary hover:text-white transition-colors duration-300">
                            {item.icon}
                        </a>
                    </Button>
                )
            })}
        </div>
     ) 
}
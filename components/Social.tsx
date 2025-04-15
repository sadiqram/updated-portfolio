import Link from "next/link";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const socials = [
    {
        name: "Github",
        icon: <FaGithub />,
        href: "https://github.com/sadiqram"
    },
    {
        name: "Twitter",
        icon: <FaXTwitter />,
        href: "https://x.com/wyla_Stiffla"
    },
    {
        name: "Youtube",
        icon: <FaYoutube />,
        href: "https://www.youtube.com/@SadiqRam"
    },
    {   
        name: "Linkedin",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/ramanu-sadiq"
    }
]

export default function Social({containerStyles, iconStyles}: {containerStyles?: string, iconStyles?: string}) {
    return (
        <div className={containerStyles}>
            {socials.map((item,index) => {
                return < Link key={index} href={item.href} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
     ) 
}
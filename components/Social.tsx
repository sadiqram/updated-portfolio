import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";


const socials = [
    {
        name: "Github",
        icon: <FaGithub />,
        href: "https://github.com/sadiqram"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        href: "https://twitter.com/sadiqramanu"
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
'use client';

// import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Button from "@/components/Button";

interface SocialProps {
    containerStyles: string;
    iconStyles?: string;
}

export default function Social({ containerStyles, iconStyles }: SocialProps) {
    const socialLinks = [
        {
            name: "Twitter",
            icon: <FaXTwitter />,
            link: "https://twitter.com/yourusername",
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            link: "https://instagram.com/yourusername",
        },
        {
            name: "YouTube",
            icon: <FaYoutube />,
            link: "https://youtube.com/yourusername",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://linkedin.com/in/ramanu-sadiq",
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
            link: "https://github.com/sadiqram",
        },
    ];

    return (
        <div className={containerStyles}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-color-primary hover:text-primary/60 transition-colors duration-300 ${iconStyles || ''}`}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
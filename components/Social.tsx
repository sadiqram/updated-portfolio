'use client';

// import Link from "next/link";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Button from "@/components/Button";

interface SocialProps {
    containerStyles: string;
    iconStyles?: string;
}

export default function Social({ containerStyles, iconStyles }: SocialProps) {
    const socialLinks = [
        {
            name: "Twitter",
            icon: <FaTwitter />,
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
            link: "https://linkedin.com/in/yourusername",
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
                    className="text-primary hover:text-primary/60 transition-colors duration-300"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
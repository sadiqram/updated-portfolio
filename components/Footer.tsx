'use client'

import Button from "@/components/Button"
// import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6"
import Social from "@/components/Social"

// TODO: Let's work together with link to email
// TODO: Add social media icons to connect with me

export default function Footer() {
    return (
        <footer className="bg-background md:pb-12">
            <div className="container mx-auto px-4 xl:px-0 py-12">
                <h2 className="mb-4 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Let&apos;s Work Together
                </h2>
                <span className="block mb-12 text-center text-muted-foreground">
                    <i>Get in touch</i>
                </span>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                <div className="flex flex-col items-center">
                        <p className="mb-6 text-primary">Let&apos;s work together</p>
                        <Button>
                            <a
                                href="mailto:your.email@example.com"
                                className="inline-flex items-center justify-center border border-primary rounded-full px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                sadiq.ramanu@gmail.com
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="mb-6 text-primary">Connect with me on</h2>
                        <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:transition-all duration-500"/>
                    </div>
                </div>

                <div className="border-t border-border pt-8">
                    <div className="flex justify-center items-center">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Sadiq Ramanu. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
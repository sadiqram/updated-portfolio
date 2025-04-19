'use client'

import Button from "@/components/Button"
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6"
// TODO: Let's work together with link to email
// TODO: Add social media icons to connect with me

export default function Contact() {
    return (
        <section className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 xl:px-0">
                <h2 className="mb-4 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Contact
                </h2>
                <span className="block mb-12 text-center text-muted-foreground">
                    <i>Get in touch</i>
                </span>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Work Together */}
                    <div className="bg-card rounded-2xl p-8 shadow-lg">
                        <p className="  mb-6 text-primary">Let's work together</p>
                        <Button>
                            <a
                                href="mailto:your.email@example.com"
                                className="inline-flex items-center justify-center  border border-primary rounded-full px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                Send me an email
                            </a>
                        </Button>
                    </div>

                    {/* Right Column - Social Links */}
                    <div className="bg-card rounded-2xl p-8 shadow-lg flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Connect with me on</h3>
                        <div className="flex gap-8 items-center justify-center">
                            <Button>
                                <a href="https://twitter.com/your_handle" target="_blank" rel="noopener noreferrer" 
                                   className="inline-flex items-center justify-center text-white border border-primary rounded-full p-3 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <FaXTwitter className="w-6 h-6" />
                                </a>
                            </Button>
                            <Button>
                                <a href="https://instagram.com/your_handle" target="_blank" rel="noopener noreferrer" 
                                   className="inline-flex items-center justify-center text-white border border-primary rounded-full p-3 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                            </Button>
                            <Button>
                                <a href="https://youtube.com/@your_channel" target="_blank" rel="noopener noreferrer" 
                                   className="inline-flex items-center justify-center text-white border border-primary rounded-full p-3 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <FaYoutube className="w-6 h-6" />
                                </a>
                            </Button>
                            <Button>
                                <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer" 
                                   className="inline-flex items-center justify-center text-white border border-primary rounded-full p-3 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client";

import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="mb-4 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Contact
        </h2>
        <span className="block mb-12 text-center text-muted-foreground">
          <i>Let&apos;s work together</i>
        </span>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">Email</h3>
            <p className="mb-6 text-muted-foreground">Feel free to reach out for any inquiries or opportunities.</p>
            <Button>
              <a
                href="mailto:your.email@example.com"
                className="inline-block text-primary px-4 py-2 text-sm"
              >
                Send Email
                <i className="ri-arrow-right-line"></i>
              </a>
            </Button>
          </div>

          {/* Social Media Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">Connect with me</h3>
            <p className="mb-6 text-muted-foreground">Follow me on social media for updates and more.</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://youtube.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
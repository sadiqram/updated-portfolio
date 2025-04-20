"use client";

import { FaGithub } from "react-icons/fa";
import "remixicon/fonts/remixicon.css";
import Button from "@/components/Button"
import Image from "next/image"

type SkillKey = "HTML" | "Python" | "Go" | "JavaScript" | "TypeScript" | "SQL" | "PHP" | 
                "Docker" | "Git" | "Linux" | "Google Cloud" | "AWS" | "Maven" | "Nginx" | 
                "Firebase" | "React" | "Tailwind CSS" | "Next.js";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  source: string;
  stack: SkillKey[];
}

export default function Projects() {
  const skills: Record<SkillKey, string> = {
    "HTML": "html-svgrepo-com.svg" ,
    "Python": "python-svgrepo-com.svg" ,
    "Go": "go-svgrepo-com.svg" ,
    "JavaScript": "js-svgrepo-com.svg" ,
    "TypeScript": "typescript-logo-svgrepo-com.svg" ,
    "SQL": "sql-svgrepo-com.svg" ,
    "PHP": "php-svgrepo-com.svg" ,
    "Docker": "docker-svgrepo-com.svg" ,
    "Git": "git-svgrepo-com.svg" ,
    "Linux": "linux-svgrepo-com.svg" ,
    "Google Cloud": "gcp-svgrepo-com.svg" ,
    "AWS": "aws-svgrepo-com.svg" ,
    "Maven": "maven-svgrepo-com.svg" ,
    "Nginx": "nginx-svgrepo-com.svg" ,
    "Firebase": "firebase-svgrepo-com.svg" ,
    "React": "react-svgrepo-com.svg" ,
    "Tailwind CSS": "tailwind-svgrepo-com.svg" ,
    "Next.js": "next-dot-js-svgrepo-com.svg" ,
  };

  const projects: Project[] = [
    {
      name: "Youtube Clone",
      description: "A full-stack video streaming platform built with modern web technologies and cloud services. This project demonstrates a microservices architecture for video processing, storage, and delivery.",
      image: "/img/yt_clone.png",
      link: "https://yt-web-client-676928624913.us-central1.run.app/",
      source: "https://github.com/sadiqram/yt-clone-app",
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Firebase", "Google Cloud", "Docker"],
    },
  ];

  return (
    <section className="min-h-[50vh] py-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="mb-2 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Projects
        </h2>
        <span className="block mb-6 text-center text-muted-foreground">
          <i>My recent works</i>
        </span>

        {/* Responsive grid for project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-card rounded-2xl overflow-hidden shadow-lg transition transform flex flex-col items-center text-center"
            >
              {/* Project image */}
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project details */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.stack.map((skill: SkillKey) => (
                    <div key={skill} className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src={`/img/${skills[skill]}`}
                        alt={skill}
                        width={24}
                        height={24}
                        className={`w-6 h-6 object-contain ${skill === "Next.js" ? "dark:invert" : ""}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <Button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary px-4 py-2 text-sm"
                    >
                      View Project
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </Button>
                  <Button>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 text-primary hover:text-primary/60 transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
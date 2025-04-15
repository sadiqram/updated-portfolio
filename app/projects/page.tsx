import { FaGithub } from "react-icons/fa";
import Magnetic from "@/app/Magnetic/page"
import Button from "@/components/Button"


export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1",
      image: "/images/project1.jpg",
      link: "https://example.com/project1",
      source: "https://github.com/example/project1",
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      image: "/images/project2.jpg",
      link: "https://example.com/project2",
      source: "https://github.com/example/project2",
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Project 3",
      description: "Description of Project 3",
      image: "/images/project3.jpg",
      link: "https://example.com/project3",
      source: "https://github.com/example/project3",
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="mb-4 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Projects
        </h2>
        <span className="block mb-12 text-center text-muted-foreground">
          <i>My recent works</i>
        </span>

        {/* Responsive grid for project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-card rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105"
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <Button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary border border-primary rounded px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </Button>
                  <Button>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 border border-primary rounded hover:bg-primary hover:text-white transition-colors duration-300"
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

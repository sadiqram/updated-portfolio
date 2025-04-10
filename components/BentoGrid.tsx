// components/ProjectBentoGrid.tsx
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  size: "small" | "large" | "wide" | "tall";
};

const projects: Project[] = [
  {
    title: "Chat App",
    description: "Real-time messaging app with MongoDB and WebSockets.",
    image: "/images/chat-app.png",
    size: "large",
  },
  {
    title: "Portfolio Site",
    description: "My personal developer portfolio built with Next.js.",
    image: "/images/portfolio.png",
    size: "small",
  },
  {
    title: "AI Image Generator",
    description: "DALL·E-style tool to generate art from prompts.",
    image: "/images/ai-gen.png",
    size: "wide",
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack MERN app with Stripe integration.",
    image: "/images/store.png",
    size: "tall",
  },
];

const sizeClasses = {
  small: "col-span-1 row-span-1",
  large: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
};

export default function ProjectBentoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4 p-4">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`relative bg-gray-800 text-white rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ${sizeClasses[project.size]}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute bottom-0 p-4 bg-black/50 backdrop-blur-sm w-full">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

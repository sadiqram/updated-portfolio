import { RiBracesLine, RiCpuLine, } from "react-icons/ri";
import { FaSitemap } from 'react-icons/fa';

export default function Skills() {
  const languages = [
    { name: "HTML", iconSvg: "html-svgrepo-com.svg" },
    { name: "Python", iconSvg: "python-svgrepo-com.svg" },
    { name: "Go", iconSvg: "go-svgrepo-com.svg" },
    { name: "JavaScript", iconSvg: "js-svgrepo-com.svg" },
    { name: "TypeScript", iconSvg: "typescript-logo-svgrepo-com.svg" },
    { name: "SQL", iconSvg: "sql-svgrepo-com.svg" },
    { name: "PHP", iconSvg: "php-svgrepo-com.svg" },
  ];

  // Technologies array (tools, platforms, and services)
  const technologies = [
    { name: "Docker", iconSvg: "docker-svgrepo-com.svg" },
    { name: "Git", iconSvg: "git-svgrepo-com.svg" },
    { name: "Linux", iconSvg: "linux-svgrepo-com.svg" },
    { name: "Google Cloud", iconSvg: "gcp-svgrepo-com.svg" },
    { name: "AWS", iconSvg: "aws-svgrepo-com.svg" },
    { name: "Maven", iconSvg: "maven-svgrepo-com.svg" },
    { name: "Nginx", iconSvg: "nginx-svgrepo-com.svg" },
    { name: "Firebase", iconSvg: "firebase-svgrepo-com.svg" },
  ];

  // Frameworks array (libraries and frameworks)
  const frameworks = [
    { name: "React", iconSvg: "react-svgrepo-com.svg" },
    { name: "Next.js", iconSvg: "next-dot-js-svgrepo-com.svg" },
    { name: "Tailwind CSS", iconSvg: "tailwind-svgrepo-com.svg" },
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="mb-1 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Skills
        </h2>
        <span className="block mb-12 text-center text-muted-foreground">
          <i>tools and technologies I use</i>
        </span>

        {/* Skills Container */}
        <div className="grid gap-8 md:gap-12">
          {/* Languages Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center text-primary">
              <RiBracesLine className="mr-2" />
              Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {languages.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:bg-muted hover:scale-105"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <img
                      src={`/img/${skill.iconSvg}`}
                      alt={skill.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center text-primary">
              <RiCpuLine className="mr-2" />
              Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:bg-muted hover:scale-105"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <img
                      src={`/img/${skill.iconSvg}`}
                      alt={skill.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center text-primary">
            
              <FaSitemap className="mr-2" />
              Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {frameworks.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:bg-muted hover:scale-105"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <img
                      src={`/img/${skill.iconSvg}`}
                      alt={skill.name}
                      className={`w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 ${
            skill.name === "Next.js" ? "dark:invert" : ""
          }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



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
        { name: "CSS", iconSvg: "css-svgrepo-com.svg" },
        { name: "Docker", iconSvg: "docker-svgrepo-com.svg" },
        { name: "Git", iconSvg: "git-svgrepo-com.svg" },
        { name: "Linux", iconSvg: "linux-svgrepo-com.svg" },
        { name: "Google Cloud", iconSvg: "google-cloud-svgrepo-com.svg" },
        { name: "AWS", iconSvg: "aws-svgrepo-com.svg" },
        { name: "Maven", iconSvg: "maven-svgrepo-com.svg" },
        { name: "Nginx", iconSvg: "nginx-svgrepo-com.svg" },
        { name: "Firebase", iconSvg: "firebase-svgrepo-com.svg" },
      ];
      
      // Frameworks array (libraries and frameworks)
      const frameworks = [
        { name: "React", iconSvg: "react-svgrepo-com.svg" },
        { name: "Next.js", iconSvg: "nextjs-svgrepo-com.svg" },
        { name: "Tailwind CSS", iconSvg: "tailwind-svgrepo-com.svg" },
      ];


  return (
    <section className="h-full py-12">
      <h2 className="mb-1 text-center text-2xl font-bold">Skills</h2>
      <span className="block mb-8 text-center text-muted-foreground">
        <i>tools and technologies I use</i>
      </span>
        {/* skills container    */}
      <div className="container mx-auto px-4 xl:px-0">
        {/* languages grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {languages.map((skill) => (
            <div key={skill.name} className="skills__blob flex flex-col items-center justify-center">
              <img
                src={`/img/${skill.iconSvg}`}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* technologies grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((skill) => (
            <div key={skill.name} className="skills__blob flex flex-col items-center justify-center">
              <img  
                src={`/img/${skill.iconSvg}`}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* frameworks grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {frameworks.map((skill) => (
            <div key={skill.name} className="skills__blob flex flex-col items-center justify-center">
              <img
                src={`/img/${skill.iconSvg}`}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
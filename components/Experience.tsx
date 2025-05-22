"use client";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="min-h-[50vh] py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="mb-4 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Experience
        </h2>
        <span className="block mb-12 text-center text-muted-foreground">
          <i>My journey so far</i>
        </span>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center text-primary">
              <FaGraduationCap className="mr-2" />
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-primary"></div>
                <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                <p className="text-muted-foreground">University at Buffalo</p>
                <p className="text-sm text-muted-foreground">2021 - Present</p>
                
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center text-primary">
              <FaBriefcase className="mr-2" />
              Work Experience
            </h3>
            {/* <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-primary"></div>
                <h4 className="text-lg font-semibold">Software Engineer</h4>
                <p className="text-muted-foreground">Google</p>
                <p className="text-sm text-muted-foreground">2022 - Present</p>
                <p className="mt-2 text-muted-foreground">
                  Working on cloud infrastructure and distributed systems
                </p>
              </div>
            </div> */}
            No relevant experience yet.
          </div>
        </div>
      </div>
    </section>
  );
} 
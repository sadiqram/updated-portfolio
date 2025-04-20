"use client";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="min-h-[30vh] py-2 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="mb-1 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Experience
        </h2>
        <span className="block mb-2 text-center text-muted-foreground">
          <i>My qualifications and work experience</i>
        </span>

        <div className="grid md:grid-cols-2 gap-2">
          {/* Education Section */}
          <div className="bg-card rounded-2xl p-2 shadow-lg">
            <div className="flex items-center gap-1 mb-1">
              <FaGraduationCap className="text-primary text-xl" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-1">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary"></div>
                <div className="absolute left-[3px] top-2 h-full w-[2px] bg-primary"></div>
                <div>
                  <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                  <p className="text-muted-foreground">University at Buffalo</p>
                  <p className="text-sm text-muted-foreground">2018 - 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-card rounded-2xl p-2 shadow-lg">
            <div className="flex items-center gap-1 mb-1">
              <FaBriefcase className="text-primary text-xl" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-1">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary"></div>
                <div className="absolute left-[3px] top-2 h-full w-[2px] bg-primary"></div>
                <div>
                  <h4 className="font-semibold">Software Engineer</h4>
                  <p className="text-muted-foreground">Google</p>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
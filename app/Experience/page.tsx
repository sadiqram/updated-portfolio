'use client'

import { FaGraduationCap, FaBriefcase } from "react-icons/fa"

export default function Experience() {
    return (
        <section className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 xl:px-0">
                <h2 className="mb-1 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Qualifications
                </h2>
                <span className="block mb-12 text-center text-muted-foreground">
                    <i>Education and Experience</i>
                </span>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <div className="bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 mb-6">
                            <FaGraduationCap className="text-primary text-2xl" />
                            <h3 className="text-xl font-bold text-primary">Education</h3>
                        </div>
                        <div className="relative pl-6 border-l-2 border-primary">
                            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
                            <h4 className="font-semibold">BSc Computer Science</h4>
                            <p className="text-sm text-muted-foreground">University at Buffalo</p>
                            <p className="text-xs text-primary">September 2021 - Present</p>
                        </div>
                    </div>

                    {/* Work Experience Section */}
                    <div className="bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 mb-6">
                            <FaBriefcase className="text-primary text-2xl" />
                            <h3 className="text-xl font-bold text-primary">Work Experience</h3>
                        </div>
                        <div className="relative pl-6 border-l-2 border-primary">
                            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
                            <h4 className="font-semibold">Software Engineer</h4>
                            <p className="text-sm text-muted-foreground">Google</p>
                            <p className="text-xs text-primary">June 2024 - August 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}   
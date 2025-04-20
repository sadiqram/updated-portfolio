// import { Button } from "@/components/ui/button"
// import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"

export default function Home() {
  return(
    <section className="h-full space-y-0 md:space-y-1 pt-20 md:pt-24">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center  order-2 ">
            <span className="text-xl block mb-2">Software Engineer</span>
            <h1 className="h1 mb-4"> Hi,I&apos;m <br /><span className="text-[#ff004f]">Sadiq</span>  </h1>
            <p className="max-w-[500px] mb-8 text-[var(--color-text-muted)] transition-colors duration-300">
              I&apos;m a software engineer with a passion for building scalable and efficient systems. I&apos;m currently NOT working as a software engineer at <span className="text-color-primary">Google</span> and <span className="text-color-primary">Facebook</span>.
            </p>
            {/* social media icons */}
            <div className="flex flex-col items-center gap-6">
              <div className="mb-4 ">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-[#ff004f] rounded-full flex items-center justify-center hover:bg-[#ff004f] hover:text-white hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1  mb-8 ">
            <Photo />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div id="skills">
            <Skills />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div id="experience">
            <Experience />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div id="projects">
            <Projects />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div id="contact">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  ) 
}

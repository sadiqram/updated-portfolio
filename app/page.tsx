// import { Button } from "@/components/ui/button"
// import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
export default function Home() {
  return (
    <section className="h-full space-y-0 md:space-y-1 pt-20 md:pt-24">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center  order-2 ">
            
            {/* <span className="text-xl block mb-2">Software Engineer</span> */}
            <h1 className="text-4xl font-bold mb-4">
              Hi,I&apos;m{" "}
              {/* <Typewriter
                words={["Sadiq","a Software Engineer", "a Frontend Developer", "a Back-End Developer"]}
                className="text-primary"
              /> */}
            </h1>
            <h1 className="text-4xl font-bold mb-4">
            <Typewriter
                words={["Sadiq","a Software Engineer", "a Frontend Developer", "a Back-End Developer"]}
                className="text-primary"
              />
            </h1>
            <p className="max-w-[500px] mb-8 text-[var(--color-text-muted)] transition-colors duration-300">
              I&apos;m a Computer Science student with a passion for building scalable
              and efficient systems. I specialize in both Frontend Development and Backend Development. I enjoy solving complex problems and creating efficient solutions. I am currently enhancing my skills in distributed systems, mainly through personal projects.
            </p>
            {/* social media icons */}
            <div className="flex flex-col items-center gap-6">
              <div className="mb-4 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#ff004f] rounded-full flex items-center justify-center hover:bg-[#ff004f] hover:text-white hover:transition-all duration-500"
                />
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
  );
}

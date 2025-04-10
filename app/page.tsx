import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"



export default function Home() {
  return(
    <section className="h-full">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">Software Engineer</span>
        <h1 className="h1 mb-6"> Hi,I&apos;m <br /><span className="text-[#ff004f]">Sadiq</span>  </h1>
        <p className="max-w-[500px] mb-9 text-white/80">
          I&apos;m a software engineer with a passion for building scalable and efficient systems. I&apos;m currently NOT working as a software engineer at <span className="text-color-primary">Google</span> and <span className="text-color-primary">Facebook</span>.
        </p>
        {/* social media icons */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline" size="lg" className="flex items-center gap-2 border border-[#ff004f] text-[#ff004f] hover:bg-[#ff004f] hover:text-white transition-colors duration-300">
            <span>Download Resume</span>
            <FiDownload className="text-xl" />
          </Button>
          <div className="mb-8 xl:mb-0">
            <Social  containerStyles="flex gap-6" iconStyles = "w-9 h-9 border border-[#ff004f] rounded-full flex items-center justify-center hover:bg-[#ff004f] hover:text-white hover:transition-all duration-500"/>

          </div>
        </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      
    </div>

{/* about me section */}
    <div className="container mx-auto"> 
      <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h2 className="h2 mb-6">About Me</h2>
        </div>
      </div>
    </div>  


    {/* skills section */}
    <div className="container mx-auto"> 
      <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h2 className="h2 mb-6">Skills</h2>
        </div>
      </div>
    </div>

    {/* Experience and Qualifications section */}
    <div className="container mx-auto"> 
      <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h2 className="h2 mb-6">Experience and Qualifications</h2>
        </div>
      </div>
    </div>

    {/* projects section */}
    <div className="container mx-auto"> 
      <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h2 className="h2 mb-6">Projects</h2>
          
        </div>
      </div>
    </div>

    {/* contact section */}
    <div className="container mx-auto"> 
      <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h2 className="h2 mb-6">Contact</h2>
        </div>
      </div>
    </div>
    </section>

   




  ) 
  
}

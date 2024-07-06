import { Element } from "react-scroll"
import { Text, Button, Img } from "../../Components";

function About() {

  return (
    <Element id="about" name="about" className="">
        <section className={`w-full text-white font-poppins`}>
            <div className="w-full h-full max-w-[133rem] mx-auto flex flex-col min-h-screen">
            <div className="w-full flex flex-col items-center pt-32 gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-32">
                <div className="flex justify-center mt-4">
                    <div className="clip w-72 h-72"></div>
                </div>
                <div className="flex flex-col">
                    <Text as="h2" className=" text-3xl font-bold text-green text-center lg:text-start">WHO AM I ?</Text>
                    <Text className="mt-4 max-w-[23rem] text-center lg:text-start">
                    As a passionate Front-End Developer hailing from <span className="text-green">Canada</span>, Im deeply immersed in the ever-evolving landscape of web development. My journey in this field has been driven by a profound love for creating <span className="text-green">intuitive, responsive, and visually appealing web experiences.</span> My commitment to continuous learning and staying ahead of the curve ensures that I bring innovative solutions to every project I undertake.
                    </Text>
                </div>
            </div>
            <div className="w-full mt-24 flex flex-col items-center">
               <Button className="button" data-text="Awesome">
                    <span className="actual-text">&nbsp;TECHSTACK&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;TECHSTACK&nbsp;</span>
                </Button>
                <div className="grid grid-cols-2 gap-8 place-items-center sm:grid-cols-3 lg:grid-cols-6 sm:gap-10 mt-10">
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=html,css" alt="html-5--v1"/>
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=tailwindcss,materialui" alt="" />
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=javascript,react" alt="" />                    
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=nodejs,express" alt="" />
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=postgres,supabase" alt="" />
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=git,vercel" alt="" />
                </div>
            </div>
            </div>
            
        </section>
    </Element>
        
  )
}

export default About;

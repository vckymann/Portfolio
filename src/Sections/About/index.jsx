import { Element } from "react-scroll"
import { useMediaQuery } from "@mui/material";
import { Text, Button, Img } from "../../Components";

function About() {

    const snap = useMediaQuery("(min-width: 1024px)");

  return (
    <Element id="about" name="about" className="">
        <section className={`${snap ? "snap" : ""} w-full text-white font-poppins`}>
            <div className="w-full h-full max-w-[133rem] mx-auto flex flex-col min-h-screen">
            <div className="w-full flex flex-col items-center pt-32 gap-12 md:flex-row md:items-start md:justify-center md:gap-32">
                <div className="flex justify-center mt-4">
                    <div className="clip w-72 h-72"></div>
                </div>
                <div className="flex flex-col">
                    <Text as="h2" className=" text-3xl font-bold text-purple-600 text-center md:text-start">WHO AM I ?</Text>
                    <Text className="mt-4 max-w-[23rem] text-center md:text-start">
                    As a passionate Front-End Developer hailing from Canada, Im deeply immersed in the ever-evolving landscape of web development. My journey in this field has been driven by a profound love for creating intuitive, responsive, and visually appealing web experiences. My commitment to continuous learning and staying ahead of the curve ensures that I bring innovative solutions to every project I undertake.
                    </Text>
                </div>
            </div>
            <div className="w-full mt-24 flex flex-col items-center">
               <Button className="button" data-text="Awesome">
                    <span className="actual-text">&nbsp;TECHSTACK&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;TECHSTACK&nbsp;</span>
                </Button>
                <div className="grid grid-cols-1 gap-4 place-items-center sm:grid-cols-3 sm:gap-2 mt-10">
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=html,css,js" alt="html-5--v1"/>
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=tailwind,react" alt="" />                    
                    <Img className="hover:-translate-y-2.5 transition-all duration-300 ease-in" src="https://skillicons.dev/icons?i=nodejs,express,postgres" alt="" />
                </div>
            </div>
            </div>
            
        </section>
    </Element>
        
  )
}

export default About;

import { Element } from "react-scroll"
import { useMediaQuery } from "@mui/material";
import { Card, Text } from "../../Components";
function Projects() {

  const snap = useMediaQuery("(min-width: 1024px)");

  return (
    <Element id="projects" name="projects" className="">
        <section className={`${snap ? "snap" : ""} w-full text-white font-poppins py-80`}>
            <div className="w-full h-full max-w-[133rem] mx-auto">
                <div className="flex flex-col items-center w-full h-full gap-3 justify-center">
                    <Card src={"/project1.png"} details={{name:"Stealth",description:"Stealth is an innovative online shoe store designed to provide customers with a seamless shopping experience."}} link={"https://stealth-jet.vercel.app"} github={"https://github.com/vckymann/Stealth"}/>
                <Text className="text-white">More to come!!</Text>
                </div>
            </div>
        </section>
    </Element>
  )
}

export default Projects;

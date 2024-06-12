import { Element } from "react-scroll"
import { Card } from "../../Components";
function Projects() {

  return (
    <Element id="projects" name="projects" className="">
        <section className={`w-full text-white font-poppins min-h-screen py-40`}>
            <div className="w-full h-full max-w-[133rem] mx-auto">
                <div className="flex flex-col items-center w-full h-full gap-14 justify-center p-4">
                    <Card src={"/project1.png"} details={{name:"Stealth",description:"Stealth is an innovative online shoe store designed to provide customers with a seamless shopping experience."}} link={"https://stealth-jet.vercel.app"} github={"https://github.com/vckymann/Stealth"}/>
                    <Card src={"/project2.png"} details={{name:"MapUp",description:"MapUp is a web application that allows users to search for places, establish the quickest routes between them, track and store user's trips."}} link={"https://map-up-eta.vercel.app"} github={"https://github.com/vckymann/MapUp"}/>

                </div>
            </div>
        </section>
    </Element>
  )
}

export default Projects;

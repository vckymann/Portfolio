import { Element } from "react-scroll"
import { Card } from "../../Components";
function Projects() {

  return (
    <Element id="projects" name="projects" className="">
        <section className={`text-white font-poppins min-h-screen py-40`}>
            <div className="h-full">
                <div className="flex flex-col items-center h-full gap-14 justify-center p-4 max-w-[60rem] mx-auto">       
                    <div className="w-full flex items-center gap-6 mr-10">
                      <h2 className="text-3xl font-bold text-lightest_slate pl-6 lg:pl-0">Projects</h2>
                      <div className="w-52 h-[0.1px] bg-lightest_slate"></div>
                    </div>
                    <p className="text-lightest_slate text-center">To Access the apps use <br /> demouser123@gmail.com <br /> password - demouser123</p>
                    <Card src={"/project-4.png"} details={{name:"Jobify", description:"Jobify is a powerful, user-friendly job search platform designed to connect you with the right opportunities—fast. Jobify helps you focus on what matters most: landing your dream job."}} link={"https://jobify-ten-ashy.vercel.app/sign-in"} github={"https://github.com/vckymann/Jobify"} number={1} tech={["Nextjs","Tailwind","MongoDB","Typescript","Redux"]}/>
                    <Card src={"/project1.png"} details={{name:"Stealth",description:"Stealth is an innovative online shoe store designed to provide customers with a seamless shopping experience."}} link={"https://stealth-jet.vercel.app"} github={"https://github.com/vckymann/Stealth"} number={2} tech={["React","Appwrite","Tailwind","PostgresSQL"]}/>
                    <Card src={"/project2.png"} details={{name:"MapUp",description:"MapUp is a web application that allows users to search for places, establish the quickest routes between them, track and store user's trips."}} link={"https://map-up-eta.vercel.app"} github={"https://github.com/vckymann/MapUp"} number={3} tech={["React","supabase","MaterialUi","Tailwind"]}/>
                    <Card  src={"/project3.png"} details={{name:"Savorspot", description:"SavorSpot is a responsive restaurant website with a dynamic menu, advanced filters, and a seamless cart system, built using React and redux"}} link={"https://savorspot.vercel.app"} github={"https://github.com/vckymann/Savorspot"} number={4} tech={["React","ShadcnUI","Tailwind"]}/>
                </div>                
            </div>
        </section>
    </Element>
  )
}

export default Projects;

import { Element } from "react-scroll";
import scroll from "react-scroll";
import { Text, A} from "../../Components";

const ScrollLink = scroll.Link;

function Home() {

  return (
    <>
    <div className="hidden lg:flex point flex-col justify-center gap-6 fixed bottom-0 left-16 z-30">          
      <a target="_blank" href="https://github.com/vckymann">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github stroke-lightest_slate hover:stroke-green"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
      <A target="_blank" href="https://www.instagram.com/vckymann/">
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="lightest_slate" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram stroke-lightest_slate hover:stroke-green"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </A>
      <A target="_blank" href="https://twitter.com/vckymann">
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter stroke-lightest_slate hover:stroke-green"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
      </A>
      <A target="_blank" href="https://www.linkedin.com/in/vikassinghmann/">
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin stroke-lightest_slate hover:stroke-green"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </A>
      <div className="w-[0.1px] h-52 bg-lightest_slate mx-auto"></div>
    </div>
    <div className="hidden lg:flex point flex-col justify-center gap-24 fixed bottom-0 right-16 z-30">
      <Text className="rotate-90 text-xs text-lightest_slate">Vickymann9772@gmail.com</Text>
      <div className="w-[0.1px] h-52 bg-lightest_slate mx-auto"></div>
    </div>
    <Element id="home" name="home">
    <section className={`min-h-screen w-full intro relative font-poppins flex items-center`}>
      <div className="w-full h-full max-w-[133rem] lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-4 max-w-[133rem] mx-auto p-3">
        <Text as={"h3"} className="text-green text-2xl text-center lg:text-start">Hi I'm</Text>
        <Text as={"h2"} className="text-5xl sm:text-7xl font-bold text-center text-nowrap text-lightest_slate lg:text-start">Vikas Singh</Text>
        <Text as={"h3"} className="text-light_slate text-5xl font-bold text-center lg:text-start leading-[3.5rem] lg:leading-none">I build things for the web.</Text>
        <Text as={"h3"} className="text-light_slate text-lg text-center lg:text-start max-w-[33rem] mt-8">I'm, a front-end developer passionate about crafting pixel-perfect, responsive websites. I specialize in transforming designs into interactive, user-friendly web experiences with React.</Text>      
        <ScrollLink className="font-semibold" to="about" spy={true} smooth={true} duration={50}  activeClass="active"><button className="btn mt-4">Explore</button></ScrollLink>
      </div>      
    </section>
    </Element>
    </>
  )
}

export default Home;

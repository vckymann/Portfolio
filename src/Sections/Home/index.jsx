import { Element } from "react-scroll";
import scroll from "react-scroll";
import { Text, A} from "../../Components";

const ScrollLink = scroll.Link;

function Home() {

  return (
    <Element id="home" name="home" className="">      
    <section className={`min-h-screen w-full intro relative font-poppins flex justify-center items-center`}>
      <div className="w-full h-full max-w-[133rem] lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Text as={"h2"} className="text-white text-3xl sm:text-5xl font-bold text-center">Hi Im</Text>
        <Text as={"h2"} className=" text-3xl sm:text-5xl font-bold text-center text-purple-600">Vikas Singh Mann</Text>
        <Text as={"h2"} className="text-white text-3xl sm:text-5xl font-bold text-center leading-[3.2rem]">A Front End Developer</Text>      
        <div className="flex items-center gap-4">          
      <A className="relative" target="_blank" href="https://github.com/vckymann">
        <svg height={32} className="fill-white hover:fill-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.206 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.617-4.042-1.617-.546-1.385-1.333-1.754-1.333-1.754-1.09-.746.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.836 2.808 1.305 3.495.998.108-.774.418-1.305.76-1.605-2.665-.306-5.466-1.332-5.466-5.93 0-1.312.468-2.383 1.235-3.227-.124-.304-.536-1.527.116-3.182 0 0 1.01-.324 3.3 1.234a11.567 11.567 0 0 1 3.013-.405c1.023.006 2.05.138 3.013.405 2.287-1.557 3.296-1.234 3.296-1.234.654 1.655.243 2.878.12 3.182.77.844 1.233 1.915 1.233 3.227 0 4.61-2.805 5.622-5.478 5.92.43.372.817 1.102.817 2.218 0 1.602-.015 2.888-.015 3.283 0 .32.215.694.825.576C20.568 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      </A>
      <A className="relative" target="_blank" href="https://twitter.com/vckymann">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-purple-600"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      </A>
      <A className="relative" target="_blank" href="https://www.linkedin.com/in/vikassinghmann/">
        <svg xmlns="http://www.w3.org/2000/svg" height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin stroke-white hover:stroke-purple-600"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
      </A>
        </div>  
        <ScrollLink className="font-semibold text-white" to="about" spy={true} smooth={true} duration={50}  activeClass="active"><button className="btn mt-8">Explore</button></ScrollLink>
      </div>      
    </section>
    </Element>
  )
}

export default Home;

import { Element } from "react-scroll";
import scroll from "react-scroll";
import { Text, Button, A } from "../../Components";

const ScrollLink = scroll.Link;

function Contact() {

  return (
      <section className={`w-full text-white font-poppins h-full min-h-screen relative`}>
            <Element id="contact" name="contact" className="">
            <div className="relative w-full max-w-[133rem] mx-auto bg-green pt-14 md:pt-0">
                <div className="clip3 w-full h-full bg-dark_navy pb-6">
                    <div className="flex flex-col max-w-96 mx-auto items-center pt-48 gap-3">
                        <Text className="text-5xl font-bold text-center text-lightest_slate">Get in touch</Text>                        
                        <Text className="text-center text-light_slate">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</Text>
                        <A href={"mailto:vickymann9772@gmail.com"}>
                        <Button className="border-green border-2 rounded-md px-6 font-semibold py-3 text-xl mt-6 hover:bg-navy">
                            Say Hi
                        </Button>
                        </A>
                    </div>
                </div>
            </div>    
                <ScrollLink to="home" spy={true} smooth={true} duration={10} activeClass="active" className="absolute bottom-12 lg:bottom-32 left-[50%] translate-x-[-50%]">                    
                <Button className="bg-green rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up">
                    <path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/></svg></Button>
                </ScrollLink>
            <div className="flex justify-center gap-6 mx-auto lg:hidden mt-10">       
                    <A target="_blank" href="https://github.com/vckymann">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github stroke-lightest_slate hover:stroke-green"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></A>
                    <A target="_blank" href="https://www.instagram.com/vckymaan/">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="lightest_slate" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram stroke-lightest_slate hover:stroke-green"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </A>
                    <A target="_blank" href="https://twitter.com/vckymann">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter stroke-lightest_slate hover:stroke-green"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </A>
                    <A target="_blank" href="https://www.linkedin.com/in/vikassinghmann/">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin stroke-lightest_slate hover:stroke-green"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </A>
                </div>          
            </Element>
        </section>
  )
}

export default Contact;

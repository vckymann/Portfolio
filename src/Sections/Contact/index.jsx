import { Element } from "react-scroll";
import scroll from "react-scroll";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Text, Input, Button, A, Img } from "../../Components";

const ScrollLink = scroll.Link;

function Contact() {

    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");

    const snap = useMediaQuery("(min-width: 1024px)");

    function handleSubmit(e) {
        e.preventDefault()
        setAlert(true);
        setMail("");
        setMessage("");
        setName("");
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }

  return (
    <Element id="contact" name="contact" className="">
        <section className={`${snap ? "snap" : ""} w-full text-white font-poppins min-h-screen h-full`}>
            <div className="w-full max-w-[133rem] mx-auto bg-purple-700 pt-14 md:pt-0">
                <div className="clip3 w-full h-full bg-black pb-32">
                    <form onSubmit={handleSubmit} className="flex flex-col max-w-96 mx-auto pt-48 gap-3">
                        <Text className="text-3xl font-bold text-center text-white">Get in touch</Text>
                        <Input className="py-2 ps-1 bg-[#8c7a7a59] rounded-sm" type="text" placeholder=" Name" required value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" autoComplete="on"/>
                        <Input className="py-2 ps-1 bg-[#8c7a7a59] rounded-sm" type="email" placeholder=" Email" required value={mail} onChange={(e) => setMail(e.target.value)} name="email" id="email" autoComplete="on"/>
                        <textarea className="py-2 ps-1 pb-12 bg-[#8c7a7a59] rounded-sm" placeholder=" Your Message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message"></textarea>
                        <Button type="submit" className="bg-[#8c7a7a59] py-2 hover:bg-purple-700 active:opacity-90">Submit</Button>
                        {alert ? <Text className="text-purple-700">Your message has been sent!</Text> : null}                        
                    </form>
                </div>
            </div>
            <div className="relative flex justify-center pb-2">
                <ScrollLink to="home" spy={true} smooth={true} duration={10} activeClass="active">
                <Button className="bg-purple-700 absolute top-[-22px] rounded-sm ml-[3.7rem]"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up"><path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/></svg></Button>
                </ScrollLink>
                <div className="flex mt-12 gap-6">
                <A href="https://www.instagram.com/vckymaan/" target="_blank">
                    <Img width="40" height="40" src="/instagram.png" alt="instagram"/>
                </A>
                <A href="https://www.facebook.com/people/Vicky-Mann/pfbid0Urs1fdo8ajRcTWcbn3Qo1ZehRSV4LNnn16mu9fUP2Ct4DSV3GmsSP7N19cRg3Uywl/?mibextid=sCpJLy" target="_blank">
                    <Img width="40" height="40" src="/facebook.png" alt="facebook"/></A>
                <A href="https://twitter.com/vckymann" target="_blank">
                    <Img width="40" height="40" src="/twitter.png" alt="twitter"/>
                </A>                
                </div>
            </div>
        </section>
    </Element>
  )
}

export default Contact;

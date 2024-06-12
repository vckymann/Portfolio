import { Element } from "react-scroll";
import scroll from "react-scroll";
import { useState } from "react";
import { Text, Input, Button } from "../../Components";

const ScrollLink = scroll.Link;

function Contact() {

    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");

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
        <section className={`w-full text-white font-poppins min-h-screen h-full`}>
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
                <ScrollLink to="home" spy={true} smooth={true} duration={10} activeClass="active" className="absolute top-[-18px]">
                <Button className="bg-purple-700 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up">
                    <path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/></svg></Button>
                </ScrollLink>
            </div>
        </section>
    </Element>
  )
}

export default Contact;

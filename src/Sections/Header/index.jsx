import scroll from "react-scroll";

const ScrollLink = scroll.Link;

function Header() {
  return (
    <div className="flex justify-center font-poppins sticky top-2 z-20">
      <ul className="flex bg-[#000000f3] border-[1px] border-secondary rounded-full px-2">
        <li className="px-4 py-2 cursor-pointer"><ScrollLink className="font-semibold text-white" to="about" spy={true} smooth={true} duration={50}  activeClass="active">About</ScrollLink></li>
        <li className="px-4 py-2 cursor-pointer"><ScrollLink className="font-semibold text-white" to="projects" spy={true} smooth={true} duration={50} activeClass="active">Projects</ScrollLink></li>
        <li className="px-4 py-2 cursor-pointer"><ScrollLink className="font-semibold text-white" to="contact" spy={true} smooth={true} duration={50}  activeClass="active">Contact</ScrollLink></li>
      </ul>
    </div>
  )
}

export default Header

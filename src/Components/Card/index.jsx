import { Text, Button, A, Img } from "../../Components";
import PropTypes from "prop-types";


function Card ({src,details,link,github}) {
  
  return (
    <>
      <div className={`flex flex-col lg:flex-row items-center hover:scale-105 transition-all duration-200 ease-in bg-black p-4 rounded-md gap-12`}>
        <A href={link} target="_blank">
        <Img className="max-w-[30rem] rounded-md" src={src} alt="" />
        </A>
        <div className="flex flex-col gap-5">
          <Text className="text-center font-bold text-purple-600 text-xl">{details.name}</Text>
          <Text className="max-w-96">{details.description}</Text>
          <Text className="text-end text-purple-400 text-[0.8rem]">Demo Account<br/>demo@example.com<br/>demouser123</Text>
          <div className="flex justify-center gap-3">
          <A href={link} target="_blank"><Button className="px-2 bg-purple-700 rounded font-semibold hover:opacity-80">Live</Button></A>
          <A href={github} target="_blank">
            <Button className="px-2 bg-purple-700 rounded font-semibold hover:opacity-80">Github</Button>
          </A>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Card;

Card.propTypes = {
  src: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
}
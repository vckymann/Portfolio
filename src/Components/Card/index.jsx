import { Text, A, Img } from "../../Components";
import PropTypes from "prop-types";


function Card ({src,details,link,github, number,tech}) {
  
  return (
    <>
      <div className={`flex justify-between ${number === 3 ? `lg:gap-[19rem]` : `lg:gap-[22rem]`} relative`}>
      {number % 2 === 0 ?  null : <A href={link} target="_blank"><Img className="max-w-[30rem] hidden lg:block rounded-lg" src={src} alt="" /></A>}
        <div className={`flex flex-col bg-light_navy p-10 items-center lg:p-0 lg:bg-transparent ${number % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
          <Text as={"h2"} className="text-2xl font-bold text-lightest_slate">{details.name}</Text>
          <div className="lg:absolute lg:top-9">
            <Text className={`bg-light_navy lg:hover:bg-lightest_navy cursor-default rounded-sm p-[25px] ${number % 2 === 0 ? 'lg:text-start' : 'lg:text-end'} text-lightest_slate text-[16px] max-w-96 lg:max-w-[455px]`}>{details.description}</Text>            
            <div className={`flex w-full justify-center ${number % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} gap-6 pt-3 text-xs text-light_slate cursor-default`}>{
              tech.map((t,i) => <Text key={i} className="hover:text-green">{t}</Text>)}</div>
            <div className={`flex w-full items-center justify-center mt-6 lg:mt-0 ${number % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} gap-4 pt-4 text-light_slate`}>
              <A href={github} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github  hover:stroke-green"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </A>
              <A href={link} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right hover:stroke-green"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
              </A>
            </div>
          </div>
          <div></div>
        </div>
          {number % 2 === 0 ? <A href={link} target="_blank"><Img className="max-w-[30rem] hidden lg:block rounded-lg" src={src} alt="" /></A> : null }        
      </div>
    </>
  ) 
}

export default Card;

Card.propTypes = {
  src: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,  
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  number: PropTypes.number,
  tech: PropTypes.array
}
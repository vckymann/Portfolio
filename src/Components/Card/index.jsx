import { useState } from "react";
import Img from "../Img";

function Card ({src,details,width,height,link,github}) {
  
  const [show,setShow] = useState(false);  

  return (
    <>
    {src && details ? (
      <div className={`${width} ${height} max-w-96 0 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-600/[0.3] bg-black/90 dark:border-white/[0.2] border-black/[0.1] rounded-xl border px-6`}>
          <>
          <div className="w-full flex justify-center items-center pt-6">
          <Img
          src={src}
          alt="thumbnail"
          className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </div>
        <div className="flex justify-evenly gap-3 mt-16 pb-5">
                <a target="_blank" href={link}>
                <button               
                  className="w-28 h-7 text-nowrap rounded-xl bg-purple-700 text-xs font-bold hover:opacity-80"
                  >
                  Live              
                </button>
                  </a>
                <button              
                className="w-28 h-7 text-nowrap rounded-xl bg-purple-700 text-xs font-bold hover:opacity-80"
                onClick={() => {
                  setShow(!show)
                  setTimeout(() => {
                    setShow(false)
                  },5000)
                }}
                >
                  Details
                </button>              
                <a target="_blank" href={github}>
                <button               
                  className="w-28 h-7 text-nowrap rounded-xl bg-purple-700 text-xs font-bold hover:opacity-80"
                  >
                  Source
                </button>
                  </a>                 
        </div>
        {show && (
          <p          
          className="w-full text-center text-xs mt-4 flex flex-col gap-y-3 pb-4"
          >
          <span>
          Project Name: {details.name}
          </span>
          <span>
          {details.description}
          </span>
          <span>
            Demo Account:<br/>
            Email: demo@example.com<br/>
            Password: demouser123
          </span>
          </p>
        )}
        </>
          </div>
        ) : (
          null
        )}

    </>
  ) 
}

export default Card;
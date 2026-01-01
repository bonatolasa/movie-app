import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCicle from "./BlurCicle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
        <p className='text-gray-300 font-medium text-lg 
         max-w-[960px] mx-auto'>Trailers</p>

         <div className='relative mt-6'>
            <BlurCicle top='-100px' right='-100px'/>
             <a
                href={currentTrailer.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={currentTrailer.image}
                  alt="Trailer"
                  className="mx-auto max-w-full" width="960px" height="540px"
                />
                <PlayCircleIcon
                  strokeWidth={1.6}
                  className="absolute w-20 h-20 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 hover:scale-105 transition"
                />
              </a>
      
         </div>

         <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
            {dummyTrailers.map((trailer)=>(
                <div key={trailer.id} className='relative group-hover:not-hover:opacity-50 
                    hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'
                onClick={()=>setCurrentTrailer(trailer)}>

                    <img src={trailer.image} alt="" className="rounded-lg w-full h-full object-cover brightness-75"/>
                    <PlayCircleIcon strokeWidth={1.6} className="absolute w-5 md:w-8 h-12 text-white absolute top-1/2 left-1/2
                   transform -translate-x-1/2 -translate-y-1/2"/>
                </div>
            ))}

         </div>
      
    </div>
  )
}

export default TrailersSection

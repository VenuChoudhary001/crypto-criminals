import React from 'react'
import ReactPlayer from "react-player/lazy";
import Button from '../../Button';
const Section5 = () => {
     
     
  return (
    <>
      <div className=" sec5 relative ">
        <div className="container grid grid-cols-1">
          <div className="flex flex-col gap-16 items-center ">
            <div className="text-3xl font-bold md:font-normal  font-oswald sm:text-5xl lg:text-7xl md:font-anton text-white">
              CRYPTO <span className="text-secondary">CRIMINAL</span>{" "}
              PRESENTATION
            </div>
            <div className=" flex  bg-black  relative player  ">
             
               
                <ReactPlayer
                url={"https://youtu.be/P2rajmx044I"}
                width="100%"
                height="100%"
                light={true}
                />
            </div>
            <Button 
            placeholder={"JOIN DISCord"}
            icon={'/icons/discord_black.svg'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5
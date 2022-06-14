import React from 'react'
import ReactPlayer from "react-player/lazy";
import Button from '../../Button';
const Section5 = () => {
     
     
  return (
    <>
      <div className=" sec5 relative ">
        <div className="overlay">
          <div className="container grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-8 items-center lg:items-start ">
              <div className="text-3xl text-center lg:text-left font-bol  sm:text-5xl lg:text-6xl font-hazaru text-white">
                CRYPTO <span className="text-secondary">CRIMINAL</span>{" "}
                PRESENTATION
              </div>{" "}
              <div className="hidden lg:block">
                <Button
                  placeholder={"JOIN DISCord"}
                  icon={"/icons/discord.svg"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center ">
              <div className=" flex  bg-black  relative player  ">
                <ReactPlayer
                  url={"https://youtu.be/P2rajmx044I"}
                  width="100%"
                  height="100%"
                  light={true}
                />
              </div>
              <div className="lg:hidden">
                <Button
                  placeholder={"JOIN DISCord"}
                  icon={"/icons/discord.svg"}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5
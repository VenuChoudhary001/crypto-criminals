import React from 'react'
import ReactPlayer from "react-player/lazy";
import Button from '../../Button';
import { ProfileCard } from '../../Card';
const Section5 = () => {
     
     
  return (
    <>
      <div className=" sec5 relative">
        <div className="flex flex-col gap-4 py-16 overlay items-center">
          <div
            data-glitch="MEET THE FOUNDERS"
            className=" text-4xl text-center max-w-max lg:text-6xl opacity-50 font-bold hero- text-black relative tracking-[12px] "
          >
            MEET THE FOUNDERS
          </div>
          <div className="grid-cols-1 gap-8 place-items-center lg:grid-cols-2 container grid">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5
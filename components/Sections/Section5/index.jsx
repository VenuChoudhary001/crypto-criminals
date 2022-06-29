import React from 'react'
import ReactPlayer from "react-player/lazy";
import { GLOBAL_CONTEXT } from '../../../layout';
import Button from '../../Button';
import { ProfileCard } from '../../Card';
const Section5 = () => {
     const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT)
     
  return (
    <>
      <div className=" sec5 relative">
        <div className="flex flex-col gap-4 py-16 overlay items-center">
          <div
            data-glitch="MEET THE FOUNDERS"
            className=" text-4xl text-center max-w-max lg:text-6xl opacity-50 font-bold hero- text-black relative tracking-[12px] "
            onMouseEnter={magic}
            onMouseLeave={noMagic}
          >
            MEET THE FOUNDERS
          </div>
          <div className="grid-cols-1 gap-8 place-items-center  lg:grid-cols-3 place-items-center container grid">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 ">
            <ProfileCard />
            <ProfileCard />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5
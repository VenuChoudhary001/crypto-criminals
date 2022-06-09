import React from 'react'
import { GLOBAL_CONTEXT } from "../../../layout";
import ReactPlayer from "react-player/lazy";
import Image from 'next/image';
const Section5 = () => {
      const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
     
     
  return (
    <>
      <div className=" sec5 ">
        <div className="overlay">
          <div className="container pt-4 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col space-y-10">
              <div
                onMouseEnter={magic}
                onMouseLeave={noMagic}
                className="font-bold text-white text-5xl lg:text-6xl"
              >
                ORIG
                <span className="text-secondary">INS</span>{" "}
              </div>
              <div className="p-6 lg:p-0 h-[300px] lg:h-[400px]">
                <ReactPlayer
                  url={"https://youtu.be/P2rajmx044I"}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="">
              <Image
                src="/images/sec5-hero.svg"
                layout={"intrinsic"}
                objectFit="contain"
                width={600}
                height={600}
                alt=''
              />
            </div>
          </div>
          <div className="container text-white flex flex-col space-y-4 font-normal text-lg">
            <div>
            {`You casually recline in the back seat of your armored car. The
            spreadsheet on your encrypted computer stares back at you. And the
            profits it shows are staggering.`}

            </div>
            
            <div>
             {` In this month alone, you coordinated drug deals and weapons
              trades, all while overseeing extensive gambling and loan-sharking
              operations. Bigger than profits, however, was simultaneously
              eliminating an investigation and a competitor. Two birds. One
              bullet. Then your mind's eye blinks, and you remember your
              predecessor doing life in prison, and your under boss who fell
              victim to a Columbian necktie. You wonder: Is "the life" worth the
              disastrous outcomes you've repeatedly witnessed?`}{" "}
            </div>{" "}
            <div>

            {`There is a well-known saying; it goes a little something like this:
            “If you can&apos;t do the time, don&apos;t do the crime.” For most, this
            saying is all we need to live a life on the straight and narrow.
            Because the knowledge of consequence is a strong enough deterrent.
            Yet for some reason we consume countless hours of interviews, films,
            and documentaries, and we read millions of pages of books, all
            exploring—and in many instances celebrating—the stories of mobsters,
            drug kingpins, and outlaws. Because deep down we want to know if we
            have what it takes to ascend to the top of the underworld food
            chain. Or would we become a statistic, like the 99% who are dead or
            in jail? `}
            </div>
            <div>

           {` Enter Crypto Criminals. An NFT project solely designed to
            help you find out if you will not just survive but thrive in a world
            predicated on deceit and violence. A world where breaking the law
            for a day isn&apos;t sufficient. This is a world where you break the law
            for a living. Join us. One last thing: Don&apos;t forget your mask. No
            face, no case.`}
            </div>
            <div className='font-bold'>

            {` Sincerely, Crypto Criminals: The Crazy Greek, Mr.
            Diamondhands, Brahtoshi, El Tiguere, 01001101`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5
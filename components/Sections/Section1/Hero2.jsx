import Image from 'next/image';
import React from 'react'
import Button from '../../Button';
import {motion} from 'framer-motion'
const Hero2 = () => {
  return (
    <>
      <div className="container min-h-screen text-center flex items-center justify-center flex-col relative  text-white ">
        <div className=" mt-12 relative  lg:mt-0 flex flex-col justify-center ">
          <div className="font-alpha font-medium  flex text-5xl sm:text-6xl items-center justify-center md:text-8xl lg:text-9xl ">
           
              CRYPTO
           
          
              CRIMINALS
          
          </div>
          <div className="font-light  md:text-xl ">
            11111 unique NFT Crypto Criminal masks worn by the outlaws of The
            Metaverse. No Face No Case.
          </div>
        </div>
        <Button placeholder={"mint your criminals now"} />
      </div>
    </>
  );
}

export default Hero2
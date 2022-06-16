import Image from 'next/image';
import React from 'react'
import Button from '../../Button';
import {motion} from 'framer-motion'
const Hero2 = () => {
  return (
    <>
      <div className="container min-h-screen text-center flex items-center justify-center flex-col relative  text-white ">
        <div className=" mt-12 relative  lg:mt-0 flex flex-col justify-center ">
          <div className="font-witches  flex text-5xl sm:text-6xl items-center justify-center md:text-8xl lg:text-9xl ">
            <motion.div
              className=""
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, type: "tween", stiffness: 100 }}
            >
              CRYPT
            </motion.div>
            <motion.div
              initial={{ scale: 0 ,y:-100}}
              animate={{ scale: 1,y:0 }}
              transition={{ duration: 1.5, type: "tween", stiffness: 100 }}
              className='hero'
            >
              <Image
                src={"/images/cuff.png"}
                width={334}
                height={122}
                layout="intrinsic"
                objectFit="contain"
                alt=''
              />
            </motion.div>
            <motion.div initial={{ x: 2000 }} animate={{ x: 0 }} className="">
              RIMINALS
            </motion.div>
          </div>
          <div className="font-bold font-urbanist   md:text-2xl ">
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
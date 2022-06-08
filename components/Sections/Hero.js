import React from "react";
import Image from "next/image";
import Button from "../Button";
import Social from "../Social";
import { motion} from "framer-motion";
import { GLOBAL_CONTEXT } from "../../layout";
 function Hero() {
  
  
  const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT)

  return (
    <>
      <div className="container  relative hero grid text-center lg:text-left grid-cols-1 lg:grid-cols-2 items-center  text-white ">
        <motion.main
          animate={{ y: [-20, 0, -20] }}
          transition={{
            duration: 3,
            yoyo: Infinity,
          }}
          className='sm:hidden'
        >
          <Image
            src="/images/hero.svg"
            width={800}
            height={700}
            layout="intrinsic"
            objectFit="contain"
            priority
            alt=""
          />
        </motion.main>
        <motion.main className=" mt-12 lg:mt-0 flex flex-col lg:gap-4 gap-6 ">
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="font-normal text-2xl md:text-3xl  lg:text-2xl xl:text-4xl "
          >
            &nbsp;INTRODUCING
          </div>
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="font-semibold md:font-bold text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-7xl"
          >
            CRYPTO <span className="text-secondary">CRIMINALS</span>
          </div>
          <div className="font-normal text-lg lg:text-sm xl:text-lg">
            &nbsp;11111 unique NFT Crypto Criminal masks worn by the outlaws of
            The Metaverse.{" "}
            <span className="font-bold">No Face &nbsp;No Case.</span>
          </div>
          <Button />
        </motion.main>
        <motion.main
        className="hidden sm:block"
          animate={{ y: [-20, 0, -20] }}
          transition={{
            duration: 3,
            yoyo: Infinity,
          }}
        >
          <Image
            src="/images/hero.svg"
            width={800}
            height={700}
            layout="intrinsic"
            objectFit="contain"
            priority
            alt=""
          />
        </motion.main>
        <main className="absolute right-0 hidden lg:block width-36 ">
          <Social />
        </main>
      </div>
    </>
  );
}
export default Hero;
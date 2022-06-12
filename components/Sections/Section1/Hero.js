import React from "react";
import Button from "../../Button";
import { motion } from "framer-motion";
import { GLOBAL_CONTEXT } from "../../../layout";

function Hero() {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  
  return (
    <>
      <div className="container h-screen flex items-center justify-center  relative  text-white ">
        <motion.div className=" mt-12 relative  lg:mt-0 flex flex-col justify-center items-center lg:gap-4 gap-4 ">
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="font-hazaru hero text-center tracking-wid font-thin text-5xl sm:text-6xl  md:text-8xl lg:text-9xl "
          
          >
           CRYPTO CRIMINALS
          </div>
          <div className="font-bold font-raleway max-w-[800px] text-center  md:text-lg lg:text-sm xl:text-xl">
            11111 unique NFT Crypto Criminal masks worn by the outlaws of The
            Metaverse. <span className="font-raleway  ">No Face No Case.</span>
          </div>
          <Button placeholder={"mint your criminals now"} />
        </motion.div>
      </div>
    </>
  );
}
export default Hero;

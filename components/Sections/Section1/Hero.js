import React from "react";
import Button from "../../Button";
import { motion } from "framer-motion";
import { GLOBAL_CONTEXT } from "../../../layout";
import  GlitchedWriter ,{wait,presets} from 'glitched-writer'
function Hero() {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  const ref=React.useRef(null);
  const ref2=React.useRef(null);
  React.useEffect(() => {
    // console.clear();
    const writer = new GlitchedWriter(
      ref.current,
      { ...presets.encrypted },
      (string, writerData) => {}
    );
    async function go() {
      await writer.write("Crypto Criminals");
 
       const newWriter= new GlitchedWriter(ref2.current,{...presets.encrypted},(data,err)=>{}) 
      await wait(1000)
      await newWriter.write(" 11111 unique NFT Crypto Criminal masks worn by the outlaws of The Metaverse. No Face No Case.")

    }
    go();
  }, []);



  return (
    <>
      <div className="container min-h-screen flex items-center flex-col md:flex-row  relative  text-white ">
        <motion.div className=" mt-12 relative  lg:mt-0 flex flex-col justify-center lg:gap-4 gap-4 ">
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="font-hazaru hero  font-thin text-5xl sm:text-6xl  md:text-8xl lg:text-7xl "
           ref={ref}
          >
           {/* CRYPTO CRIMINALS */}
          </div>
          <div ref={ref2} className="font-bold font-urbanist max-w-[800px]    md:text-2xl ">
           
          </div>
          <Button placeholder={"mint your criminals now"} />
        </motion.div>
        
      </div>
    </>
  );
}
export default Hero;

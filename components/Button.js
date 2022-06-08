import Image from 'next/image';
import { motion} from "framer-motion";
import React from 'react';
function Button(){
    const [flag,setFlag]=React.useState(false);


    const variant = {
      hoverX: {
        width: "70%",
        transition: { ease: "easeInOut" },
      },
      hoverY: {
        height: 0,
        transition:{
            ease:"easeInOut"
        }
      },
    };

    return (
      <>
        <motion.div
          onMouseEnter={() => setFlag(true)}
          onMouseLeave={() => setFlag(false)}
          className="btn m-auto lg:m-1 mt-6"
          whileTap={{scale:0.9, transition:{ type: "spring", stiffness: 1000 }}}
        >
          <motion.div
            variants={variant}
            animate={flag ? "hoverX" : "initial"}
            className="b-top"
          ></motion.div>
          <motion.div
            variants={variant}
            animate={flag ? "hoverY" : "initial"}
            className="b-left"
          ></motion.div>
          <motion.div
            variants={variant}
            animate={flag ? "hoverX" : "initial"}
            className="b-bottom"
          ></motion.div>
          <motion.div
            variants={variant}
            animate={flag ? "hoverY" : "initial"}
            className="b-right"
          ></motion.div>
          <motion.button className="bg-secondary text-sm  max-w-max p-4 px-6 font-semibold h-12 md:h-14  lg:h-18 ">
            MINT YOUR CRIMINALS
            <Image
              src={"/icons/Arrow.svg"}
              width={50}
              height={10}
              layout="intrinsic"
              className="animate-pulse"
              alt=''
            />
          </motion.button>
        </motion.div>
      </>
    );
}

export default Button;
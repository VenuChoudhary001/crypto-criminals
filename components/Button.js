import Image from 'next/image';
import { DragControls, motion ,useAnimation} from "framer-motion";
import React from 'react';
function Button({placeholder,icon}){
    const [flag,setFlag]=React.useState(false);
    const control=useAnimation();

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
          className="btn m-auto lg:m-1 mt-6 text-white"
          whileTap={{scale:0.9, transition:{ type: "spring", stiffness: 1000 }}}
          // onClick={action|| null}
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
          <motion.button 
          whileHover={control.start({rotate:["0deg","360deg" , "540deg , 720deg"]})} 
          className="bg-secondary flex items-center gap-4 uppercase box-border text-sm text-white max-w-max p-4 px-6 font-bold h-12 md:h-14  lg:h-18 ">
           {icon && <motion.div animate={control}>
               <Image src={icon} width={24} height={24} layout='intrinsic' objectFit='contain' alt='' />
               </motion.div>}
           {placeholder}
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
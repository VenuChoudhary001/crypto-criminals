import Image from 'next/image';
import {  motion ,useAnimation} from "framer-motion";
import React from 'react';
function Button({placeholder,icon}){
    const [flag,setFlag]=React.useState(false);
    const control=useAnimation();

    const variant = {
      hoverX: {
        width:"68%",
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
          className="btn m-auto relative lg:m-1 mt-6 "
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
          <motion.button 
          whileHover={control.start({rotate:["0deg","360deg" , "540deg , 720deg"]})} 
          className="bg-secondary font-oswald  min-w-[200px] md:min-w-[280px] uppercase box-border text-[12px] md:text-[16px] text-black font-bold h-8 md:h-14  lg:h-18 ">
               <div className="text-center w-full flex items-center justify-center gap-4">
           {icon && <motion.div animate={control}>
               <Image src={icon} width={24} height={24} layout='intrinsic' objectFit='contain' alt='' />
               </motion.div>}

           {placeholder}
               </div>
            
          </motion.button>
        </motion.div>
      </>
    );
}

export default Button;
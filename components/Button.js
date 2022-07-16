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
          className="b m-aut relative lg:m- mt-6 max-w-max"
          whileTap={{scale:0.9, transition:{ type: "spring", stiffness: 1000 }}}
        >
         
          <motion.button 
          whileHover={control.start({rotate:["0deg","360deg" , "540deg , 720deg"]})} 
          className="bg-secondary text-white font-urbanist font-semibold  min-w-[200px] md:min-w-[280px] uppercase box-border text-[12px] md:text-[16px] font-bold h-8 md:h-14  lg:h-18 ">
               <div className="text-center  flex items-center justify-center gap-4">
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
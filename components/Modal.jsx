import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Modal = ({ title,img, info, show, setShow }) => {
  return (
    <>
      <div className="w-full top-0 flex  justify-center fixed z-[60] h-full min-h-screen bg-light backdrop-blur">
        <motion.div
          initial={{ scale: 0.1 }}
          animate={{ scale: 1, type: "tween" }}
          transition={{
            duration: 0.5,
          }}
          className="p-4 flex z-[70] flex-col relative py-6 overflow-auto    shadow-xl gap-2 bg-extraDark md:rounded-lg m-auto max-w-[1000px]"
        >
          <Image
            src={"/icons/logo.svg"}
            width={80}
            height={80}
            layout="intrinsic"
            alt=""
          />
          <div className="absolute right-10 top-10">
            <Image
              src={"/icons/close.svg"}
              width={20}
              height={20}
              layout="intrinsic"
              onClick={() => setShow(!show)}
              alt=''
            />
          </div>
          <div className="overflow-hidden m-auto rounded-full max-w-max ">

          {img && <Image alt="" objectFit="contain" className="rounded-full overflow-hidden" src={img} width={200} height={200} layout='intrinsic'/>}
          </div>
          <div
            data-glitch={title}
            className="relative max-w-max m-auto modal-title font-bold text-center text-[24px] md:text-4xl font-semibold"
          >
            {title}
          </div>
          <div className="info text-white max-h-[600px] pb-4 overflow-auto font-normal  text-[14px] md:text-lg p-6">
            {info}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;

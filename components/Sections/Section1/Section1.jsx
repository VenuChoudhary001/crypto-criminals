import Image from "next/image";
import React from "react";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import { motion } from "framer-motion";
const Section1 = () => {

  return (
    <>
      <div className="relative  w-screen h-screen">
        <motion.div >

        <Image
        priority 
        src={'/images/cc22.png'}
        layout="fill"
        objectFit='cover'
        className="f"
        alt=""
        />
        </motion.div>

        <div className=" relative">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Section1;

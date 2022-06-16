import Image from "next/image";
import React from "react";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import { motion } from "framer-motion";
import Hero2 from "./Hero2";
const Section1 = () => {

  return (
    <>
      <div className="relative bg sec-1  ">
        <div className="over relative">
          <Navbar />
          <Hero2/>
          {/* <Hero /> */}
        </div>
      </div>
    </>
  );
};

export default Section1;

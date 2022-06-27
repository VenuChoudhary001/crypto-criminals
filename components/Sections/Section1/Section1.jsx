import React from "react";
import Navbar from "../../Navbar";
import Image from "next/image";
import Hero2 from "./Hero2";
const Section1 = () => {
  return (
    <>
      <div className="relative  sec-1  ">
       
      <Navbar />
        <div className="over  relative">
     
          <Hero2 />
        </div>
      </div>
    </>
  );
};

export default Section1;

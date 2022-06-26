import React from "react";
import Navbar from "../../Navbar";
import Image from "next/image";
import Hero2 from "./Hero2";
const Section1 = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg sec-1  ">
        <div className="over relative">
     
          <Hero2 />
        </div>
      </div>
    </>
  );
};

export default Section1;

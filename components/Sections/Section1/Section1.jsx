import React from "react";
import Image from "next/image";
import Navbar from "../../Navbar";
import Hero from "./Hero";
const Section1 = () => {
  const [load,setLoad]=React.useState(false);
  return (
    <>
      <div className="relative font-urbanist">
        <Image
          src={"/images/hero-bg.svg"}
          layout="fill"
          priority
          onLoad={()=>{}}
          objectFit="cover"
          alt=""
        />

        <div className="overlay relative">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Section1;

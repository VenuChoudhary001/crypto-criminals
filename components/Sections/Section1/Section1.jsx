import React from "react";
import Image from "next/image";
import Navbar from "../../Navbar";
import Hero from "./Hero";
const Section1 = () => {
  return (
    <>
      <div className="relative font-urbanist">
        <Image
          src={"/images/hero-bg.jpg"}
          layout="fill"
          priority={true}
          onLoad={()=>{}}
          objectFit="cover"
          alt="Cryptocriminals"
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

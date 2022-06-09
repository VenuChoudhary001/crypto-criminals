import React from "react";
import Image from "next/image";
import Navbar from "../../Navbar";
import Hero from "./Hero";
const Section1 = () => {
  return (
    <>
      <section className="relative font-urbanist">
        <Image
          src={"/images/hero-bg.svg"}
          layout="fill"
          priority
          objectFit="cover"
          alt=""
        />

        <div className="overlay relative">
          <Navbar />
          <Hero />
        </div>
      </section>
    </>
  );
};

export default Section1;

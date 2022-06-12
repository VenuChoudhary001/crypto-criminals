import React from "react";
import Navbar from "../../Navbar";
import Hero from "./Hero";
const Section1 = () => {

  return (
    <>
      <div className="relative bg w-screen h-screen">
    

        <div className="overlay relative">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Section1;

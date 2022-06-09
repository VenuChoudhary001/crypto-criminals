import Navbar from "../components/Navbar";
import Hero from "../components/Sections/Section1/Hero";
import Image from "next/image";
import React from "react";
import Section2 from "../components/Sections/Section2";
import Section1 from "../components/Sections/Section1/Section1";
import Section3 from "../components/Sections/Section3";
import Section4 from "../components/Sections/Section4";
import Section5 from "../components/Sections/Section5";
import Footer from "../components/Footer";

function Home() {

  
  return (
    <>
       <section className="grid grid-rows auto-rows-auto gap-36 lg:gap-24">

        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
       </section>
   
    </>
  );
}

export default Home;
import Image from "next/image";
import React from "react";
import Section1 from "../components/Sections/Section1/Section1";
import Footer from "../components/Footer";
import { GLOBAL_CONTEXT } from "../layout";
import GlitchedWriter, { wait, presets,} from "glitched-writer";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import Social from "../components/Social";
import Section4 from "../components/Sections/Section4";
import Section5 from "../components/Sections/Section5";
import Section6 from "../components/Sections/Section6";



function Home() {
 
  const [show,setShow]=React.useState({
    page:false,
    btn:false
  });

  const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT);
  const ref=React.useRef(null);
React.useEffect(() => {
  console.clear();
  const writer = new GlitchedWriter(
    ref.current,
    {...presets.neo},
    (string, writerData) => {
    }
  );
  async function go() {
    await writer.write("Welcome");
    await wait(2000); 

    await writer.write("..to Crypto Criminals !");
    
    await wait(2000);
  
    await writer.write("No Face No Case")

    await wait(2000);
    console.clear();
    setShow({page:true,btn:true})
  }
  go();
}, []);

  // if(!show.page){
  //   return (
  //     <>
  //       <div
  //         onMouseEnter={magic}
  //         onMouseLeave={noMagic}
  //         className="font-hazaru relative flex flex-col items-center justify-center  text-center h-screen  tracking-wide font-thin text-5xl sm:text-6xl  md:text-8xl lg:text-9xl "
  //       >
  //         <Image
  //         src='/icons/logo.svg'
  //         width={200}
  //         height={200}
  //         layout={"intrinsic"}
  //         objectFit="contain"
  //         alt=""
  //         />
  //         <div className="hero" ref={ref}></div>
  //       </div>
  //     </>
  //   );
  // }
 
  return (
    <>
      <section className="home grid grid-rows auto-rows-auto gap  ">
        {/* Landing Section */}
        <Section1 />
        {/* Roadmap */}
        <Section2 />
        
        {/* Media  */}
        <Section4 />
        {/* Origin Story */}
        <Section3 />

        {/* Social media links */}
        <Social />
        {/* Founders */}
        <Section5 />
        {/* FAQ */}
        <Section6 />
        {/* Footer */}
        <Footer />
      </section>
    </>
  );
}

export default Home;
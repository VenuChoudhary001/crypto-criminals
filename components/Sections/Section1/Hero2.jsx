import Image from 'next/image';
import React from 'react'
import Button from '../../Button';
import gsap from "gsap";
const Hero2 = () => {
   const [size,setSize]=React.useState({
    x:280,
    y:280
   })
   React.useEffect(() => {
    if(window.innerWidth<600){
      setSize({x:100,y:100})
    }
     window.scrollTo(0, 0); // Scrolls to top
     gsap.from(".mask-3", {
       x: 600,
       y:100,
       opacity: 0.1,
       duration: 2,
       ease: "ease.out",
       delay:0.3
     });
     gsap.from(".mask-4", {
       y: 300,
       opacity: 0.1,
       duration: 2,
       ease: "ease.out",
       delay: 0.3,
     });
       gsap.from(".mask-5", {
         y: -400,
         opacity: 0.1,
         duration: 2,
         ease: "ease.out",
         delay: 0.3,
       });
    
   }, []);
  return (
    <>
      <div className="  min-h-screen text-center flex items-center justify-center flex-col relative  text-white ">
        <div className=" mt-12 relative  lg:mt-0 flex flex-col justify-center ">
          <div
            data-glitch="CRYPTO CRIMINALS"
            className="font-alpha hero- text-black tracking-[4px] md:tracking-[12px]  font-medium  flex text-5xl sm:text-6xl items-center justify-center md:text-8xl lg:text-9xl "
          >
            CRYPTO CRIMINALS
          </div>
          <div className="font-medium italic text-[14px] md:text-xl ">
            11111 unique NFT Crypto Criminal masks worn by the outlaws of The
            Metaverse. No Face No Case.
          </div>
        </div>
        <Button placeholder={"mint your criminals now"} />
        <div className="absolute bottom-0 hidden md:block">
          <div className="relative block">
            <Image
              layout="intrinsic"
              src={"/images/mask-3-founder.png"}
              width={size.x}
              height={size.y}
              className="mask-3"
              alt=''
            />
            <Image
              layout="intrinsic"
              src={"/images/mask-4.png"}
              width={size.x}
              height={size.y}
              className="mask-4"
              alt=''
            />{" "}
          </div>
        </div>
        <div className="absolute bottom-0 md:hidden block">
          <div className="relative block">
          
            <Image
              layout="intrinsic"
              src={"/images/mask-4.png"}
              width={280}
              height={200}
              className="mask-4 "
              objectFit="contain"
              alt=''
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2
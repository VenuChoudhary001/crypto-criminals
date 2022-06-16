import Image from "next/image";
import React from "react";
import Button from "../../Button";

const Section2 = () => {
  return (
    <>
    <div className="container">

      <div className="inner-container p-3 over relative flex flex-col rounded-xl overflow-hidden items-center  gap-6 w-full sec2">
         <div className="flex relative items-center banner min-h-[150px] max-w-[600px] py-4 w-full ">
          <div className="text-white font-bo font-witches z-20 text-4xl">WELCOME TO CRYPTO CRIMINALS</div>
          <div className="absolute -top-150 right-0">

          <Image 
          src={'/images/side_img.png'}
          width={203}
          height={181}
          objectFit="cover"
          className=""
          layout="intrinsic"
          />
          </div>
         </div>
         <div className="p-4 max-w-[600px] min-w-[300px] w-full player flex items-center justify-center text-lg text-white h-[280px] rounded-md bg-black">


           <Image src={'/icons/youtube.svg'}
           width={48}
           height={48}
           layout="intrinsic"
           />
         
         </div>
         <Button placeholder={'join discord'} icon={'/icons/discord.svg'} />
      </div>
    </div>
    </>
  );
};

export default Section2;

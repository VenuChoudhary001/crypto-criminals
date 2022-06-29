import Image from "next/image";
import React from "react";
const Social = () => {
  return (
    <>
      <div className={` flex gap-4  social py-2 items-center md:gap-6 w-full justify-center`}>
      
          <Image
            className="cursor-pointer"
            src={"/icons/twitter.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
      
      
          <Image
            src={"/icons/instagram.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
      {" "}
      
          <Image
            src={"/icons/tiktok.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
      {" "}
      
          <Image
            src={"/icons/opensea.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
      {" "}
      
          <Image
            src={"/icons/discord.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
      {" "}
      </div>
    </>
  );
};

export default Social;

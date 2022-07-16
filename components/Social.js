import Image from "next/image";
import React from "react";
const Social = () => {
  return (
    <>
      <div className={` flex gap-4 md:gap-6 `}>
        <div>
          <Image
            className="cursor-pointer"
            src={"/icons/twitter.svg"}
            width={24}
            height={24}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>
        <div>
          <Image
            src={"/icons/instagram.svg"}
            width={24}
            height={24}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            src={"/icons/tiktok.svg"}
            width={24}
            height={24}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            src={"/icons/opensea.svg"}
            width={24}
            height={24}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            src={"/icons/discord.svg"}
            width={24}
            height={24}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
      </div>
    </>
  );
};

export default Social;

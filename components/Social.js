import Image from "next/image";
import Link from "next/link";
import React from "react";
const Social = ({style}) => {
  return (
    <>
      <div className={`social flex flex-${style} gap-4 `}>
        <div>
          <Image
            className="cursor-pointer"
            src={"/icons/twitter.svg"}
            width={28}
            height={28}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>
        <div>
          <Image
            src={"/icons/instagram.svg"}
            width={28}
            height={28}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            src={"/icons/tiktok.svg"}
            width={28}
            height={28}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            src={"/icons/opensea.svg"}
            width={28}
            height={28}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            src={"/icons/discord.svg"}
            width={28}
            height={28}
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

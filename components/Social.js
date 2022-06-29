import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
const Social = () => {
  const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT)
  return (
    <>
      <div
        className={` flex gap-4  social py-2 items-center md:gap-6 w-full justify-center`}
      >
        <a
          className="flex items-center h-full justify-center"
          href="https://twitter.com/crypt0criminals"
          target={"_blank"}
          rel="noreferrer"
          onMouseEnter={magic}
          onMouseLeave={noMagic}
        >
          <Image
            className="cursor-pointer"
            src={"/icons/twitter.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </a>
        <a
          className="flex items-center h-full justify-center"
          href="https://www.instagram.com/crypt0criminals/"
          target={"_blank"}
          rel="noreferrer"
          onMouseEnter={magic}
          onMouseLeave={noMagic}
        >
          <Image
            src={"/icons/instagram.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </a>{" "}
        <a className="flex items-center h-full justify-center" href="">
          <Image
            src={"/icons/tiktok.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </a>{" "}
        <a
          className="flex items-center h-full justify-center"
          href="https://opensea.io/collection/cryptocriminalsofficial"
          target={"_blank"}
          rel="noreferrer"
          onMouseEnter={magic}
          onMouseLeave={noMagic}
        >
          <Image
            src={"/icons/opensea.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </a>{" "}
        <a
          className="flex items-center h-full justify-center"
          href="https://discord.com/invite/tXG6jHkp9u"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={magic}
          onMouseLeave={noMagic}
        >
          <Image
            src={"/icons/discord.svg"}
            width={20}
            height={20}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
        </a>{" "}
      </div>
    </>
  );
};

export default Social;

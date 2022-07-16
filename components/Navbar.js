import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
const Navbar = () => {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  return (
    <>
    <div className="bg-dark  z-50 fixed w-full top-0 left-0 ">

      <div className="container  flex items-center justify-between">
        
        <Image
          src={"/icons/logo.svg"}
          priority
          width={60}
          height={60}
          objectFit="contain"
          layout="intrinsic"
          alt=""
          className="z-30"
        />

        <div className="text-white tracking-wide hidden font-oswald font-medium md:flex space-x-12">
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="cursor-pointer hover:text-secondary"
          >
            HOME
          </div>
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="cursor-pointer hover:text-secondary"
          >
            CRIME PAPER
          </div>
          <div
            onMouseEnter={magic}
            onMouseLeave={noMagic}
            className="cursor-pointer hover:text-secondary"
          >
            CATALOGUE
          </div>
        </div>
        <div className="block md:hidden ">
          <Image
            src="/icons/menu.svg"
            width={24}
            height={24}
            layout="intrinsic"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;

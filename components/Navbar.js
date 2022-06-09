import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
const Navbar = () => {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  return (
    <>
      <div className="container z-50  flex items-center justify-between">
        <Image
          src={"/icons/logo.svg"}
          priority
          width={80}
          height={80}
          objectFit="contain"
          layout="intrinsic"
          alt=""
        />

        <div className="text-white hidden font-bold md:flex space-x-12">
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
        <div className="block md:hidden">
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
    </>
  );
};

export default Navbar;

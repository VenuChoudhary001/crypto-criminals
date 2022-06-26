import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
import { SquareButton } from "./Button";
const Navbar = () => {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  return (
    <>
      <div className=" bg-dark z-50 fixed w-full top-0 left-0 backdrop-blur-sm">
        <div className="pl-4  flex items-center justify-between">
          <div className="flex space-x-12 items-center justify-center">
            <div className="block md:hidden mr-4 ">
              <Image
                src="/icons/menu.svg"
                width={24}
                height={24}
                layout="intrinsic"
                objectFit="contain"
                alt=""
              />
            </div>
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

            <div className="text-white tracking-wide hidden text-[14px] font-medium md:flex space-x-12">
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
              <div
                onMouseEnter={magic}
                onMouseLeave={noMagic}
                className="cursor-pointer hover:text-secondary"
              >
                POINT SYSTEM
              </div>
            </div>
          </div>
          <SquareButton placeholder={"ADD A CRIMINAL"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
import { SquareButton } from "./Button";
import Modal from "./Modal";
const Navbar = () => {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  const [show,setShow]=React.useState(false);
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
                onClick={() => setShow(true)}
              >
                POINT SYSTEM
              </div>
            </div>
          </div>
          <SquareButton placeholder={"ADD A CRIMINAL"} />
        </div>
      </div>
   {show &&   <Modal
        title={"THE POINT SYSTEM"}
        info={` If you collect ten points, you can mint a new Crypto Criminal! We
            will unlock this feature approximately 30 days after the completion
            of the public sale. If you were whitelisted during our presale, you
            would use this feature 24 hours before those who purchased during
            the public sale. In the meantime, here are the details. Each Crypto
            Criminal is assigned a number of either 2, 3, or 4. If you collect
            ten points worth of Crypto Criminals, go to our website where it
            will have an “add a criminal button.” Input your NFT IDs to confirm
            your points and mint your new Crypto Criminal. Your points will
            revalidate EVERY 72 hours. In addition, your newest Crypto Criminal
            will have points too. Which you can use immediately. Lastly, there
            will be ten bonus Crypto Criminals with a point value of ten. Keep
            in mind there will be 11111 for sale and 11111 available for free.`}
            show={show}
            setShow={setShow}
      />}
    </>
  );
};

export default Navbar;

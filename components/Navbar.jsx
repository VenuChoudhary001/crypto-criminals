import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
import { SquareButton } from "./Button";
import Modal from "./Modal";
import {motion} from 'framer-motion'
import Social from "./Social";
const Navbar = () => {
  const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  const [show,setShow]=React.useState(false);
  const [give,setShowGive]=React.useState(false);
  const [size,setSize]=React.useState(60);
  const [showMenu,setShowMenu]=React.useState(false);
  React.useEffect(()=>{
   if(window.innerWidth < 600){
    setSize(40)
   }
  },[])
  return (
    <>
      <div className=" bg-dark z-50 fixed w-full top-0 left-0 backdrop-blur-sm">
        <div className="pl-4  flex items-center justify-between">
          <div className="flex space-x-12 items-center justify-center">
            <div className="block md:hidden mr-4 ">
              <Image
                src="/icons/menu.svg"
                width={22}
                height={22}
                layout="intrinsic"
                objectFit="contain"
                alt=""
                onClick={() => setShowMenu(true)}
              />
            </div>
            <Image
              src={"/icons/logo.svg"}
              priority
              width={size}
              height={size}
              objectFit="contain"
              layout="intrinsic"
              alt=""
              className="z-30"
            />

            <div className="text-white tracking-wide hidden text-[12px] lg:text-[14px] font-medium md:flex space-x-8">
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
              <div
                onMouseEnter={magic}
                onMouseLeave={noMagic}
                className="cursor-pointer hover:text-secondary"
                onClick={() => setShowGive(true)}
              >
                GIVEAWAY
              </div>
            </div>
          </div>
          <SquareButton placeholder={"ADD A CRIMINAL"} />
        </div>
      </div>
      {show && (
        <Modal
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
        />
      )}

      {give && (
        <Modal
          title={"GIVEAWAY"}
          info={` On occasion we will give away Crypto Criminal NFT’s through
              Discord competitions or Twitter spaces. Check our website and
              social sites for the opportunity to win.Following the sale of
              our 3333rd Crypto Criminal NFT three owners will win a Playstation
              5 and the most current Apple iPhone. Additionally, one owner will
              be selected to join the Crypto Criminal founders in our next
              trailer. The sale of the 7777th Crypto Criminal NFT will result
              in the giveaway of either $20,000 USD or a Rolex watch. -Upon the
              sale of the final Crypto Criminal NFT, number 11111, a giveaway
              for a one kilogram brick of platinum will be held. The platinum
              brick will be embossed with the Crypto Criminals logo as well as
              our tagline “No Face, No Case”. Lastly a beeple style art piece
              containing all minted Crypto Criminal NFT’s will be given away.`}
          show={give}
          setShow={setShowGive}
        />
      )}
      {showMenu && (
        <div className="w-full h-screen top-0 flex  justify-center fixed z-[60]  min-h-screen bg-light backdrop-blur">
          <motion.div
            initial={{ y: 1000, scale: 0.2 }}
            animate={{ y: 0, type: "tween", scale: 1 }}
            transition={{
              duration: 0.5,
            }}
            className="p-4 flex z-[70] flex-col relative w-full min-h-screen shadow-xl gap-2 bg-extraDark md:rounded-lg m-auto max-w-[1000px]"
          >
            <Image
              src={"/icons/logo.svg"}
              width={80}
              height={80}
              layout="intrinsic"
              alt=""
            />
            <div className="absolute right-10 top-10">
              <Image
                src={"/icons/close.svg"}
                width={20}
                height={20}
                layout="intrinsic"
                onClick={() => setShowMenu(!showMenu)}
                alt=""
              />
            </div>
            <div className="flex nav flex-col ">
              <div onClick={()=>{setShowMenu(false);noMagic()}} className="text-white tracking-wide flex flex-col gap-10 items-center justify-center h-full text-[16px] lg:text-[14px] font-medium ">
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
                <div
                  onMouseEnter={magic}
                  onMouseLeave={noMagic}
                  className="cursor-pointer hover:text-secondary"
                  onClick={() => setShowGive(true)}
                >
                  GIVEAWAY
                </div>
                <Social/>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;

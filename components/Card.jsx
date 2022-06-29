import Image from "next/image";
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
import Modal from "./Modal";
import { motion ,useAnimation} from "framer-motion";
const Card = () => {
  const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT)
  return (
    <>
      <div className="grid place-items-center grid-cols-1">
        <div className="relative overflow-hidden ">
          <Image
            src={"/images/card_3.png"}
            alt=""
            layout="intrinsic"
            objectFit="contain"
            width={300}
            height={180}
            className="round absolute top-0 left-0"
          />
        </div>

        <div className="relative card border-soli border-2 border-white  -mt-8 max-w-[300px] ">
          <div className=" card-bg flex flex-col gap-2 text-white py-6 rounded-lg shadow-lg">
            <h4
              data-glitch="A Crypto Criminal Presentation"
              className="hero mt-1 text-cyan-400 opacity-50 tracking-widest text-xl font-bold uppercase leading-tight truncat"
            >
              A Crypto Criminal Presentation
            </h4>
            <div className="flex justify-between items-center">
              <Image
                src={"/icons/yt.svg"}
                width={36}
                height={36}
                layout="intrinsic"
                alt=""
                onMouseEnter={magic}
                onMouseLeave={noMagic}
              />
              <Image
                src={"/icons/arrow.svg"}
                width={24}
                height={24}
                layout="intrinsic"
                alt=""
                onMouseEnter={magic}
                onMouseLeave={noMagic}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export const ProfileCard = ({profile}) => {
  const [show,setShow]=React.useState(false);
  const control=useAnimation();
  const content = (
    <>
      <div className="flex flex-col gap-1">
        <div className="">
          <span className="font-semibold text-lg">Specialities </span> :{" "}
          {profile.specs}
        </div>
        <div className="">
          <span className="font-semibold text-lg">Crimes </span> :
          {profile.crime}
        </div>
      </div>
    </>
  );
  return (
    <>
      <motion.div className="bg-white rounded-md mt-8  bg-slate-900 shadow-lg">
        <div className=" flex  flex-col xl:flex-row px-4 leading-none max-w-4xl">
          <motion.div animate={control} className="flex-none w-56 h-72 relative rounded-md shadow-2xl transform -translate-y-4 border-4 border-solid border-gray-300 shadow-lg">
            <Image
              src={profile.img}
              layout="intrinsic"
              objectFit="cover"
              alt=""
              width={224}
              height={288}
            />
          </motion.div>

          <div className="flex-col items-center max-w-[300px justify-center text-center text-gray-300">
            <p className="pt-4 text-2xl text-primary 0 font-bold">{profile.title}</p>
            <hr className="hr-text" data-content="" />
            <div className="text-md flex flex-col gap-1 justify-between px-4 my-2">
              <span className="font-semibold">Origin : {profile.origin} </span>
              <span className="font-semibold"> Position : {profile.position}</span>
            </div>
            <span
              onClick={() => setShow(true)}
              className="xl:hidden font-bold block hover:ubderline cursor-pointer"
            >
              More info
            </span>
            <p className="hidden xl:block px-4 my-4 text-[16px] text-left">
              <span className="font-bold">Specialities</span> : Networking and
              Staying in Trouble
            </p>
            <p className="hidden xl:block tracking-wide leading-5 px-4 my-4 text-[16px] text-left">
              <span className="font-bold"> Crimes</span> : Transnational Drug
              Trafficking, Labor Racketeering, Bid Rigging, Murder, Breaking and
              Entering, Driving Under the Influence, Illegal possession of
              fireworks, Illegal operation of a dirt- bike on a public road.
            </p>
            <p className="flex text-md px-4 my-2"></p>
          </div>
        </div>
      </motion.div>
      {show && (
        <Modal
          title={profile.title}
          info={content}
          show={show}
          setShow={setShow}
          img={profile.img}
        />
      )}
    </>
  );
};

export default Card;

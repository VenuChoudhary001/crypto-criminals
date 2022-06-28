import Image from "next/image";
import React from "react";
import Modal from "./Modal";

const Card = () => {
  return (
    <>
      <div className="flex  flex-col bg-black  gap-6 max-w-[400px] md:max-w-[300px] w-full">
        <div className="flex flex-col items-center justify-center w-full h-[200px] bg-gray-500 relative">
          <Image src={"/images/thumbs-1.png"} alt='' layout="fill" objectFit="cover" />
          <div className="">
            <Image
              src={"/icons/yt.svg"}
              width={48}
              height={48}
              layout="intrinsic"
              alt=""
            />
          </div>
        </div>
        <div className="text-white p-2 text-center font-normal">
          A Crypto Criminal Presentation
        </div>
      </div>
    </>
  );
};

export const ProfileCard = () => {
  const [show,setShow]=React.useState(false);
  return (
    <>
      <div className="bg-white rounded-md mt-8 bg-gray-900 shadow-lg">
        <div className=" flex md:flex-row flex-col px-4 leading-none max-w-4xl">
          <div className="flex-none w-56 h-72 relative rounded-md shadow-2xl transform -translate-y-4 border-4 border-solid border-gray-300 shadow-lg">
            <Image
              src={"/images/tcg.png"}
              layout="intrinsic"
              objectFit="cover"
             alt=""
              width={224}
              height={288}
            />
          </div>

          <div className="flex-col items-center justify-center text-center text-gray-300">
            <p className="pt-4 text-2xl font-bold">The Crazy Geek</p>
            <hr className="hr-text" data-content="" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">Origin : Greece | Position : Boss</span>
              <span className="font-bold"></span>
            </div>
            <span
              onClick={() => setShow(true)}
              className="md:hidden font-bold block hover:ubderline cursor-pointer"
            >
              More info
            </span>
            <p className="hidden md:block px-4 my-4 text-[16px] text-left">
              <span className="font-bold">Specialities</span> : Networking and
              Staying in Trouble
            </p>
            <p className="hidden md:block px-4 my-4 text-[16px] text-left">
              <span className="font-bold"> Crimes</span> : Transnational Drug
              Trafficking, Labor Racketeering, Bid Rigging, Murder, Breaking and
              Entering, Driving Under the Influence, Illegal possession of
              fireworks, Illegal operation of a dirt- bike on a public road.
            </p>
            <p className="flex text-md px-4 my-2"></p>
          </div>
        </div>
      </div>
      {show && (
        <Modal
          title={"The Crazy Geek"}
          info={`Specialities:Networking and
              Staying in Trouble.
              Crimes:Transnational Drug
              Trafficking, Labor Racketeering, Bid Rigging, Murder, Breaking and
              Entering, Driving Under the Influence, Illegal possession of
              fireworks, Illegal operation of a dirt- bike on a public road.`}
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
};

export default Card;

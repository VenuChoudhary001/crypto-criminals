import Image from "next/image";
import React from "react";
import CircularButton from "../../Button";
const ROADMAP = [
  {
    title: "PHASE I",
    desc: [
      "1.Finalization of all NFT artwork and successful upload to IPFS",
      "2.Video series of the Crypto Criminals founders.  Available on our website and youtube.",
      "3.Launch of the smart contract",
      "4.NFT pre-sale for whitelisted members.",
    ],
  },
  {
    title: "PHASE II",
    desc: [
      "1.Public sale goes live.  Crypto Criminals are available for .08 ETH. Minting is available on our website. ",
      "2.Secondary sales on Opensea @Crypto Criminals Official.  ",
    ],
  },
];

const Section2 = () => {
  return (
    <>
      <div className="grid gap-10">
        <div className="container text-white sec2 flex flex-col items-center justify-center gap-6">
          <div className=" text-4xl lg:text-6xl font-bold opacity-50 text-primary tracking-[12px]">
            ROADMAP
          </div>
        </div>
        <div className="timeline mt-4 flex flex-col lg:flex-row">
          <div
            className="tl-item "
            style={{
              background: "url(/images/phase-1.png) no-repeat center/cover",
            }}
          >
            <div className="tl-year">
              <CircularButton placeholder={"Phase i"} />
            </div>
            <div className="tl-content">
              <Image
                src={"/images/longShot.png"}
                layout="intrinsic"
                width={360}
                alt=""
                height={200}
                objectFit="contain"
              />
              <h1>Lorem ipsum dolor sit</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
          <div
            className="tl-item "
            style={{
              background: "url(/images/phase-2.png) no-repeat center/cover",
            }}
          >
            <div className="tl-year">
              <CircularButton placeholder={"Phase ii"} />
            </div>
            <div className="tl-content">
              <Image
                src={"/images/longShot.png"}
                layout="intrinsic"
                width={360}
                alt=""
                height={200}
                objectFit="contain"
              />
              <h1>Lorem ipsum dolor sit</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>{" "}
          <div
            className="tl-item "
            style={{
              background: "url(/images/phase-1.png) no-repeat center/cover",
            }}
          >
            <div className="tl-year">
              <CircularButton placeholder={"Phase iii"} />
            </div>
            <div className="tl-content">
              <Image
                src={"/images/longShot.png"}
                layout="intrinsic"
                width={360}
                alt=""
                height={200}
                objectFit="contain"
              />
              <h1>Lorem ipsum dolor sit</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>{" "}
          <div
            className="tl-item "
            style={{
              background: "url(/images/phase-2.png) no-repeat center/cover",
            }}
          >
            <div className="tl-year">
              <CircularButton placeholder={"Phase iv"} />
            </div>
            <div className="tl-content">
              <Image
                src={"/images/longShot.png"}
                layout="intrinsic"
                width={360}
                alt=""
                height={200}
                objectFit="contain"
              />
              <h1>Lorem ipsum dolor sit</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>{" "}
          <div
            className="tl-item "
            style={{
              background: "url(/images/phase-1.png) no-repeat center/cover",
            }}
          >
            <div className="tl-year">
              <CircularButton placeholder={"Phase v"} />
            </div>
            <div className="tl-content">
              <Image
                src={"/images/longShot.png"}
                layout="intrinsic"
                width={360}
                alt=""
                height={200}
                objectFit="contain"
              />
              <h1>Lorem ipsum dolor sit</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>{" "}
          <div
            className="tl-item "
            style={{
              background: "url(/images/phase-2.png) no-repeat center/cover",
            }}
          >
            <div className="tl-year">
              <CircularButton placeholder={"Phase vi"} />
            </div>
            <div className="tl-content">
              <Image
                src={"/images/longShot.png"}
                layout="intrinsic"
                width={360}
                alt=""
                height={200}
                objectFit="contain"
              />
              <h1>Lorem ipsum dolor sit</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

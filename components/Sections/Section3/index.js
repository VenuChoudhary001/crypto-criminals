import React from "react";
import { GLOBAL_CONTEXT } from "../../../layout";

const Section3 = () => {
    const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT);
  const roadMap = [
    {
      title: "PHASE I",
      sub: "The sale of 3333 Crypto Criminal NFT’s available for.069 ETH. Upon completion of our 3333rd sale three NFT owners will win a Playstation 5 and an Apple iPhone 13. One owner will be selected to join the Crypto Criminal founders in our next trailer",
    },
    {
      title: "PHASE I",
      sub: "The sale of 3333 Crypto Criminal NFT’s available for.069 ETH. Upon completion of our 3333rd sale three NFT owners will win a Playstation 5 and an Apple iPhone 13. One owner will be selected to join the Crypto Criminal founders in our next trailer",
    },
    {
      title: "PHASE I",
      sub: "The sale of 3333 Crypto Criminal NFT’s available for.069 ETH. Upon completion of our 3333rd sale three NFT owners will win a Playstation 5 and an Apple iPhone 13. One owner will be selected to join the Crypto Criminal founders in our next trailer",
    },
    {
      title: "PHASE I",
      sub: "The sale of 3333 Crypto Criminal NFT’s available for.069 ETH. Upon completion of our 3333rd sale three NFT owners will win a Playstation 5 and an Apple iPhone 13. One owner will be selected to join the Crypto Criminal founders in our next trailer",
    },
    {
      title: "PHASE I",
      sub: "The sale of 3333 Crypto Criminal NFT’s available for.069 ETH. Upon completion of our 3333rd sale three NFT owners will win a Playstation 5 and an Apple iPhone 13. One owner will be selected to join the Crypto Criminal founders in our next trailer",
    },
  ];

  return (
    <>
      <section className="container flex flex-col space-y-4">
        <div className="lg:text-6xl text-5xl font-bold text-white text-center">
          ROAD<span className="text-secondary">MAP</span>
        </div>
        <div className="road-map">
          {roadMap.map((item, i) => (
            <div
              className="text-lg font-semibold road-map-item flex flex-col"
              key={i}
            >
              <span className="text-secondary text-2xl font-bold" onMouseEnter={magic} onMouseLeave={noMagic}>{item.title}</span>
              {item.sub}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section3;

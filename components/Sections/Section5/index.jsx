import React from 'react'
import ReactPlayer from "react-player/lazy";
import { GLOBAL_CONTEXT } from '../../../layout';
import Button from '../../Button';
import { ProfileCard } from '../../Card';

const FOUNDERS = [
  {
    title: "The Crazy Geek",
    origin: "Greece",
    position: "BOSS",
    specs: "Networking and Staying in Trouble",
    crime:
      "Transnational Drug Trafficking, Labor Racketeering, Bid Rigging, Murder, Breaking and Entering, Driving Under the Influence, Illegal possession of fireworks, Illegal operation of a dirt- bike on a public road.",
    img: "/images/tcgc.png",
  },
  {
    title: "Mr. Diamondhands",
    origin: "Sierra Leone",
    position: "Consigliere",
    specs: "Long Term Growth of all Business Assets and Fitness",
    crime:
      "Racketeering, Money Laundering, Wire Fraud, mbezzlement, and suspected involvement in 23 murders.",
    img: "/images/diamond-hands.png",
  },
  {
    title: "Brahtoshi",
    origin: "Ireland",
    position: "Underboss",
    specs: "Unsuccessful Car Bombings",
    crime:
      "Loansharking, Murder, Weapons Trafficking, Cigarette Smuggling, Gambling",
    img: "/images/brahtoshi.png",
  },
  {
    title: "El Tiguere",
    origin: "United States",
    position: "Soldier",
    specs: "Extreme Violence with a flair for Creativity",
    crime: "Murder, Extortion, Kidnapping",
    img: "/images/el-founder.png",
  },
  {
    title: "01001101",
    origin: "Unknown",
    position: "Associate",
    specs: "Surveillance, Counter-Surveillance, and Anti-Surveillance",
    crime: "Ransomware Attacks and Extortion, IP Theft, DOSS Attacks",
    img: "/images/01001101.png",
  },
];


const Section5 = () => {
     const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT)
     
  return (
    <>
      <div className=" sec5 relative">
        <div className="flex flex-col gap-4 py-16 overlay items-center">
          <div
            data-glitch="MEET THE FOUNDERS"
            className=" text-4xl text-center max-w-max lg:text-6xl opacity-50 font-bold hero- text-black relative tracking-[12px] "
            onMouseEnter={magic}
            onMouseLeave={noMagic}
          >
            MEET THE FOUNDERS
          </div>
          <div className="grid-cols-1 gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-2 place-items-center container grid">
           {FOUNDERS.map((item,i)=><ProfileCard key={i} profile={item} />)}
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Section5
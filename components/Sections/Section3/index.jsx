import Image from "next/image";
import React from "react";
import CircularButton from "../../Button";
import Modal from "../../Modal";

const Section3 = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="sec-3">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-4 p-4 py-8 max-w-[820px] relative gap-4 flex flex-col items-center md:items-start ">
            <div
              data-glitch="ORIGINS"
              className=" text-4xl lg:text-6xl font-bol opacity-50 text-black hero- relative tracking-[12px]"
            >
              ORIGINS
            </div>
            <div className="info text-white  opacity-60">
              {`You casually recline in the back seat of your armored car. The
              spreadsheet on your encrypted computer stares back at you. The
              profits it shows are staggering. In this month alone, you
              coordinated drug deals and weapons trades, all while overseeing
              extensive gambling and loan-sharking operations. Bigger than
              profits, however, was simultaneously eliminating an investigation
              and a competitor. Two birds. One bullet. Then your mind's eye
              blinks, and you remember your predecessor doing life in prison,
              and your under boss who fell victim to a Columbian necktie. You
              wonder: Is "the life" worth the disastrous outcomes you've
              repeatedly witnessed? There is a well-known saying; it goes a
              little something like this: “If you can’t do the time, don’t do
              the crime.” For most, this saying is all we need to live a life on
              the straight and narrow. Because the knowledge of consequence is a
              strong enough deterrent. Yet for some reason we consume countless
              hours of interviews, films, and documentaries, and we read
              millions of pages of books, all exploriing...`}
              <span
                className="font-bold text-white cursor-pointer hover:underline"
                onClick={() => setShow(true)}
              >
                Read More
              </span>
            </div>
          </div>
          <div className="md:col-span-2 min-h-[300px] w-full relative">
            <div className="absolute z-20 w-full h-full flex justify-center items-center md:block md:-left-[70px] md:top-20">
              <CircularButton icon={"/icons/yt.svg"} />
            </div>
            <Image
              src={"/images/thumbs-1.png"}
              layout="fill"
              alt=""
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {show && (
        <Modal
          title="ORIGIN STORY"
          info={`You casually recline in the back seat of your armored car. The spreadsheet on your encrypted computer stares back at you. The profits it shows are staggering.

In this month alone, you coordinated drug deals and weapons trades, all while overseeing extensive gambling and loan-sharking operations. Bigger than profits, however, was simultaneously eliminating an investigation and a competitor. Two birds. One bullet. Then your mind's eye blinks, and you remember your predecessor doing life in prison, and your under boss who fell victim to a Columbian necktie. You wonder: Is "the life" worth the disastrous outcomes you've repeatedly witnessed?

There is a well-known saying; it goes a little something like this: “If you can’t do the time, don’t do the crime.” For most, this saying is all we need to live a life on the straight and narrow. Because the knowledge of consequence is a strong enough deterrent. Yet for some reason we consume countless hours of interviews, films, and documentaries, and we read millions of pages of books, all exploring—and in many instances celebrating—the stories of mobsters, drug kingpins, and outlaws. Because deep down we want to know if we have what it takes to ascend to the top of the underworld food chain. Or would we become a statistic, like the 99% who are dead or in jail?

Enter Crypto Criminals. An NFT project solely designed to help you find out if you will not just survive but thrive in a world predicated on deceit and violence. A world where breaking the law for a day isn’t sufficient. This is a world where you break the law for a living. Join us. One last thing: Don’t forget your mask. No face, no case.

Sincerely,

Crypto Criminals: The Crazy Greek, Mr. Diamondhands, Brahtoshi, El Tiguere, 01001101`}
show={show}
setShow={setShow}
        />
      )}
    </>
  );
};

export default Section3;

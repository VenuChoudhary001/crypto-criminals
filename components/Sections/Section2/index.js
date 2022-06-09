import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import Button from "../../Button";

const Section2 = () => {
  // const navigate = () => {
  //   window.location.assign("https://discord.com/invite/tXG6jHkp9u");
  // };

  return (
    <>
      <div className="container text-white flex flex-col items-center ">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block">
            <Image
              src={"/images/hero2.svg"}
              layout={"intrinsic"}
              objectFit="contain"
              width={600}
              height={600}
              alt=''
            />
          </div>
          <div className="flex flex-col space-y-6">
            <div className="font-bold pl-2 text-4xl text-center lg:text-left lg:text-5xl">
              A CRYPTO{" "}
              <span className="text-secondary font-bold">CRIMINAL</span>{" "}
              PRESENTATION
            </div>
            <div className="p-6 lg:p-0 h-[300px] lg:h-[300px]">
              <ReactPlayer
                url={"https://youtu.be/P2rajmx044I"}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="container mt-6 flex justify-center">
          <Button
            // action={navigate}
            placeholder={"JOIN DISCORD"}
            icon={"/icons/discord.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default Section2;

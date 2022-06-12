import React from "react";
import Card from "../../Card";

const Section3 = () => {
 
  return (
    <>
      <div className="container flex flex-col gap-10">
        <div className="text-3xl font-oswald md:text-7xl space-y-2 text-white max-w-max md:font-anton">
          ROAD<span className="text-secondary">MAP</span>
          <div className=" relative line h-[10px] border-t-2 border-t-secondary  border-solid"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Card />
        </div>
        <div className="md:flex hidden text-lg justify-evenly">
          <div className="text-white font-oswald border-t-2 border-b-2 border-secondary border-solid">
            PHASE I
          </div>
          <div className="text-white font-oswald">PHASE II</div>
          <div className="text-white font-oswald">PHASE III</div>
          <div className="text-white font-oswald">PHASE IV</div>
          <div className="text-white font-oswald">PHASE V</div>
          <div className="text-white font-oswald">PHASE VI</div>
        </div>
      </div>
    </>
  );
};

export default Section3;

import React from "react";

const Section2 = () => {
  return (
    <>
      <div className="giveaway text-white relative min-h-[150px] flex flex-col items-center bg-secondary">
        <div className="container relative  ">
         
          <div className="grid grid-cols-1  gap-2 items-center sm:grid-cols-2">
          
            <div className="flex justify-center items-end sm:items-start flex-col">
              <div className="font-oswald font-bold md:font-normal  text-3xl sm:text-5xl lg:text-6xl">GIVEAWAYS</div>
              <div className="font-raleway   max-w-[200px] text-right sm:text-left sm:max-w-[400px] font-bold text-sm lg:text-lg">
                Click here to participate in the next giveaway
              </div>
            </div>
            <div className="flex justify-end h-full   gap-4">
              <div className="flex flex-col  items-center gap-1">
                <div className=" bg-black flex box flex-col items-center justify-center font-oswald text-white text-2xl sm:text-4xl lg:text-3xl ">
                  12
                </div>
                <div className="font-oswald font-bold  lg:text-xl ">
                  DAYS
                </div>
              </div>
              <div className="flex flex-col items-center  gap-1">
                <div className=" bg-black flex flex-col box items-center justify-center font-oswald text-white text-2xl sm:text-4xl lg:text-3xl">
                  12
                </div>
                <div className="font-oswald font-bold lg:text-xl ">
                  HOURS
                </div>
              </div>{" "}
              <div className="flex flex-col items-center gap-1">
                <div className=" bg-black font-oswald flex box flex-col items-center justify-center text-white text-2xl sm:text-4xl lg:text-3xl">
                  59
                </div>
                <div className="font-oswald font-bold lg:text-xl ">
                  MINUTES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

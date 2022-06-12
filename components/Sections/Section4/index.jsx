import React from 'react'
import { GLOBAL_CONTEXT } from '../../../layout';

const Section4 = () => {
    const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT);
  return (
    <>
      <div className=" sec4 relative p-2 bg-secondary">
          <div className="left_layer"></div>
          <div className="right_layer"></div>
          <div className="container pt-4 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col space-y-8 py-4">
              <div
                onMouseEnter={magic}
                onMouseLeave={noMagic}
                className=" text-3xl font-oswald font-bold md:font-normal px-4 md:font-anton text-black md:text-5xl lg:text-6xl"
              >
                THE POINT <span className="text-black">SYSTEM</span>{" "}
              </div>
              <div className="text-black px-3 font-raleway font-medium text-[14px]  md:text-lg lg:text-[16px] ">
                If you collect ten points, you can mint a new Crypto Criminal!
                We will unlock this feature approximately 30 days after the
                completion of the public sale. If you were whitelisted during
                our presale, you would use this feature 24 hours before those
                who purchased during the public sale. In the meantime, here are
                the details. Each Crypto Criminal is assigned a number of either
                2, 3, or 4. If you collect ten points worth of Crypto Criminals,
                go to our website where it will have an{" "}
                <span className="font-bold">add a criminal button</span>. Input
                your NFT IDs to confirm your points and mint your new Crypto
                Criminal. Your points will revalidate EVERY 72 hours. In
                addition, your newest Crypto Criminal will have points too.
                Which you can use immediately. Lastly, there will be ten bonus
                Crypto Criminals with a point value of ten. Keep in mind there
                will be 11111 for sale and 11111 available for free.
              </div>
            </div>
          </div>
     
      </div>
    </>
  );
}

export default Section4
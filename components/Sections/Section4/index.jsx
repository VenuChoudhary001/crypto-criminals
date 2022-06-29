import React from 'react'
import { GLOBAL_CONTEXT } from '../../../layout';
import Card from '../../Card';
const Section4 = () => {
    const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT);
  return (
    <>
      <div className="sec-4">
        <div className=" relative py-4">

          <div className="w-full md:p-4 flex flex-col items-center justify-center gap-10">
            <div
              data-glitch="MEDIA"
              className=" text-4xl max-w-max lg:text-6xl opacity-50 font-bold hero- text-black relative tracking-[12px] "
              onMouseEnter={magic}
              onMouseLeave={noMagic}
            >
              MEDIA
            </div>
           <div className="grid max-w-[1000px] gap-10 grid-cols-1 lg:grid-cols-3">

            <Card />
            <Card />
            <Card />
           
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4
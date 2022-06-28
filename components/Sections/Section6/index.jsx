import React from 'react'

const Section6 = () => {
  return (
    <div className="sec-6 bg-rose-900">
      <div className="container flex flex-col gap-8 items-center py-8">
        <div
          data-glitch="FAQ"
          className=" text-4xl max-w-max lg:text-6xl  opacity-50 font-bold hero- text-black relative tracking-[12px] "
        >
          FAQ
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 p-3  rounded max-w-[800px]">
            <div className="font-regular text-[16px] text-white">
              How do I purchase a Crypto Criminal?
            </div>
            <div className="text-white opacity-50">
              You have two options! You can either connect your wallet mint
              through our website or you can complete the purchase through
              secondary sales on opensea. If you are new to NFT’s opensea.io has
              tutorials detailing the process.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-3  rounded max-w-[800px]">
            <div className="font-regular text-[16px] text-white">
              How much does a Crypto Criminal cost?
            </div>
            <div className="text-white opacity-50">.08 public sale</div>
          </div>
          <div className="flex flex-col gap-2 p-3  rounded max-w-[800px]">
            <div className="font-regular text-[16px] text-white">
              How many Crypto Criminals can I purchase in one transaction?
            </div>
            <div className="text-white opacity-50">
              You can purchase 15 Crypto Criminals per transaction
            </div>
          </div>
          <div className="flex flex-col gap-2 p-3  rounded max-w-[800px]">
            <div className="font-regular text-[16px] text-white">
              When will my Crypto Criminal be revealed?
            </div>
            <div className="text-white opacity-50">
              As we advance in public sales, we will announce the date of the
              reveal; we will give plenty of notice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6
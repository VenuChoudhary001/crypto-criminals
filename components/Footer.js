import Image from 'next/image'
import React from 'react'
import Social from './Social';

const Footer = () => {
  return (
    <>
      <div className="container h-[360px] pb-2 flex flex-col space-y-5 ">
        <div className="container h-[1px] bg-zinc-800"></div>
        <div className="gap-20   grid grid-cols-1 md:grid-cols-3 ">
          <main className="flex flex-col space-y-8">
            <div className="text-offWhite font-bold text-3xl">As seen on</div>
            <div>
              <Image
                src="/images/footer.jpg"
                width={200}
                height={200}
                objectFit="contain"
                alt=''
              />
            </div>
          </main>
          <main className="flex flex-col space-y-8">
            <div className="text-offWhite font-bold text-3xl">Follow us on</div>
            <Social style={"row"} />
          </main>
        </div>
        <div className="text-offWhite font-semibold text-center">
          {" "}
          2021 Crypto Criminals. All rights Reserved Golden Toupee // Production
          LLC.{" "}
        </div>
      </div>
    </>
  );
}

export default Footer
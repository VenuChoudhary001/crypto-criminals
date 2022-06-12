import React from 'react'

const Card = () => {
  return (
    <div className=" max-w-[600px] relative min-h-[200px] justify-center card bg-secondary p-3 flex flex-col space-y-3">
      <div className="card-left"></div>
      <div className="card-right"></div>
      <div className="bg-black p-2 px-4 text-white font-oswald text-lg md:font-anton max-w-max md:text-2xl uppercase">
        phase i
      </div>

      <div className="font-raleway text-[14px] font-medium md:text-[16px] relative pl-2 ">
        {` The sale of 3333 Crypto Criminal NFTs available for 0.069 ETH. Upon
        completion of our 3rd sale three NFT owners will win a Playstation 5
        and an Apple iPhone 13. One owner will be selected to join the Crypto
        Criminal founders in our next trailer`}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste ex adipisci? Laboriosam, incidunt! Aspernatur repudiandae quidem sit maxime quod autem dicta hic consectetur officiis. Ea dolorum repellendus quod cupiditate.
      </div>
    </div>
  );
}

export default Card
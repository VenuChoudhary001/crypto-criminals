import Image from "next/image"
import React from "react";
import { GLOBAL_CONTEXT } from "../layout";
const Navbar=()=>{
  const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT);
    return (
      <>
        <nav className="container  flex items-center justify-between">
          <Image
            src={"/icons/logo.svg"}
            priority
            width={150}
            height={100}
            objectFit="contain"
            layout="intrinsic"
            alt=""
          />
          
          <main className="text-white hidden  font-bold md:flex space-x-12">
            <div  onMouseEnter={magic} onMouseLeave={noMagic} className="cursor-pointer hover:text-secondary">HOME</div>
            <div onMouseEnter={magic} onMouseLeave={noMagic} className="cursor-pointer hover:text-secondary">CRIME PAPER</div>
            <div onMouseEnter={magic} onMouseLeave={noMagic} className="cursor-pointer hover:text-secondary">CATALOGUE</div>
          </main>
          <main className="block md:hidden">
            <Image src='/icons/menu.svg'
            width={24}
            height={24}
            layout='intrinsic'
            objectFit="contain"
            alt=""
            />
          </main>
        </nav>
      </>
    );
}

export default Navbar;
import Image from 'next/image';
import React from 'react';
function CircularButton({placeholder,icon}){

    return (
      <>
      <div className="btn-container">

        <button className="btn" data-glitch={placeholder}>
         {placeholder && <span className="glitch max-w-max" data-glitch={placeholder}>
            {placeholder}
          </span>}
        {icon &&  <Image 
          src={icon}
          width={48}
          height={48}
          objectFit='contain'
          />}
        </button>
      </div>
      </>
    );
}


export const SquareButton=({placeholder})=>{
  return <>
  
  <div className="sq-btn text-white">
    <button className='btn h-[60px]' data-glitch={placeholder}>
      <span className="glitch" data-glitch={placeholder}>{placeholder}</span>
    </button>
  </div>
  </>
}


export default CircularButton;
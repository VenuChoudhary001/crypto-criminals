import React from 'react';
function CircularButton({placeholder}){

    return (
      <>
      <div className="btn-container">

        <button className="btn" data-glitch={placeholder}>
          <span className="glitch" data-glitch={placeholder}>
            {placeholder}
          </span>
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
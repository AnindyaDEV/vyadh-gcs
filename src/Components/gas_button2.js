import React, { useState } from 'react';
import Table3 from './table-gas2';

const GasButton2= () =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  

    return(
      <>
        <button
        onClick={toggleAccordion}
        className="flex items-center justify-center cursor-pointer w-full  hover:bg-deepskyblue focus:bg-deepskyblue basis-1/3 bg-steelblue-100 rounded-xl  h-[70px]  text-white font-red-hat-mono text-2xl-6">
        Sample Characteristics
      </button>
      {isOpen && (
          
          <div className='flex flex-col item-center justify-center my-4 p-2 bg-steelblue-100 rounded-xl'>
          <Table3/>
          </div>
      )}

      </>
    );
}
export default GasButton2
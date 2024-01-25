//phkeys.js
import React from 'react';

const PH = () => {
  const u = () => {
    fetch('http://127.0.0.1:5000/ph-u')
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
  };
  

  const i = () => {
    fetch('http://127.0.0.1:5000/ph-i')
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
  };
  
  const o = () => {
    fetch('http://127.0.0.1:5000/ph-o')
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
  };

  const p = () => {
    fetch('http://127.0.0.1:5000/ph-p')
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
  };




  return (
    <div className="w-full flex justify-center">
      <button
        className="h-[80px] bg-steelblue-200 cursor-pointer mr-2 hover:bg-deepskyblue rounded-xl text-2xl-5 text-white font-red-hat-mono w-[150px] cursor-pointer"
        onClick={u}
      >
        PH SENSOR-1 +
      </button>
      <button
        className="h-[80px] bg-steelblue-200 cursor-pointer mr-2 hover:bg-deepskyblue rounded-xl text-2xl-5 text-white font-red-hat-mono w-[150px] cursor-pointer"
        onClick={i}
      >
        PH SENSOR-1 -
      </button>
      <button
        className="h-[80px] bg-steelblue-200 cursor-pointer mr-2 hover:bg-deepskyblue rounded-xl text-2xl-5 text-white font-red-hat-mono w-[150px] cursor-pointer"
        onClick={o}
      >
        PH SENSOR-2 +
      </button>
      <button
        className="h-[80px] bg-steelblue-200 cursor-pointer  hover:bg-deepskyblue rounded-xl text-2xl-5 text-white font-red-hat-mono w-[150px] cursor-pointer"
        onClick={p}
      >
        PH SENSOR-2 -
      </button>
      
    </div>
  );
};

export default PH;
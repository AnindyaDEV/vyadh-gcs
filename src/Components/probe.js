import React from 'react';
import up from "../assets/up.svg"
import down from "../assets/down.svg"
const Probe = () => {
  const Probe_up = () => {
    fetch('http://127.0.0.1:5000/probe-up')
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
  };
  

  const Probe_down = () => {
    fetch('http://127.0.0.1:5000/probe-down')
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
  };
  
  




  return (
    <div>
      <button
        className="h-[100px] bg-steelblue-200 mr-2   cursor-pointer hover:bg-deepskyblue  bg-steelblue-100 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer"
        onClick={Probe_up}
      >
        <img src={up} alt=""></img>
      </button>
      <button
        className="h-[100px] bg-steelblue-200 cursor-pointer   bg-steelblue-100 hover:bg-deepskyblue rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer"
        onClick={Probe_down}
      >
        <img src={down} alt=""></img>
      </button>
      
      
    </div>
  );
};

export default Probe;
import GasButton1 from "../Components/gas_button1";
import GasButton2 from "../Components/gas_button2";
import React, { useState } from "react";
import aperture from "../assets/fiaperture.svg";
import group1 from "../assets/group1.svg";
import Graph from "../Components/graph";
//import CameraCaptureComponent from "../Components/cameracapture";
import Table from "../Components/table-sensor";
import Probe from "../Components/probe.js";
import PH from "../Components/phkeys.js";
import science from "../assets/science_kit.svg";
import Keysci from "../Components/sciencekit_keys.js";

const Science = () => {
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const showDivOnClick = (divNumber) => {
    if (divNumber === 1) {
      setShowDiv1(true);
      setShowDiv2(false);
      setShowDiv3(false);
    } else if (divNumber === 2) {
      setShowDiv1(false);
      setShowDiv2(true);
      setShowDiv3(false);
    } else if (divNumber === 3) {
      setShowDiv1(false);
      setShowDiv2(false);
      setShowDiv3(true);
    }
  };

  const [isTable1Open, setIsTable1Open] = useState(false);
  const [isTable2Open, setIsTable2Open] = useState(false);
  const [isTable3Open, setIsTable3Open] = useState(false);

  const toggleTable1 = () => {
    setIsTable1Open(!isTable1Open);
    setIsTable2Open(false);
    setIsTable3Open(false);
  };

  const toggleTable2 = () => {
    setIsTable2Open(!isTable2Open);
    setIsTable1Open(false);
    setIsTable3Open(false);
  };

  const toggleTable3 = () => {
    setIsTable3Open(!isTable3Open);
    setIsTable1Open(false);
    setIsTable2Open(false);
  };

  return (
    <>
      <div className="flex flex-row text-white font-red-hat-mono">
        <div className="fixed z-1 flex flex-wrap flex-col gap-4 p-4">
          <button
            onClick={() => showDivOnClick(1)}
            className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[90px] h-[23vh]"
          >
            <img src={group1} alt=""></img>
          </button>
          <button
            onClick={() => showDivOnClick(2)}
            className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[90px] h-[23vh]"
          >
            <img src={aperture} alt=""></img>
          </button>
          <button
            onClick={() => showDivOnClick(3)}
            className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[90px] h-[23vh]"
          >
            <img src={science} alt=""></img>
          </button>
        </div>

        <div className="text-white h-[75vh] pb-8 scrollbar-thumb-steelblue-100 scrollbar-track-steelblue-400 scrollbar-none overflow-y-scroll font-red-hat-mono  w-screen flex flex-col ml-[135px]">
          {!showDiv1 && !showDiv2 && !showDiv3 && (
            <div className="text-center w-full">
              <h1>Welcome to the Science Page</h1>
            </div>
          )}
          {showDiv1 && (
            <>
              <div className="flex flex-row gap-4 text-11xl sticky top-0 bg-darkslategray-300 py-3 px-2">
                <span className="flex items-center justify-center basis-1/3 bg-steelblue-100 rounded-xl p-4 h-[70px] ">
                  <b>SITE 1</b>
                </span>
                <span className="flex items-center justify-center basis-1/3 bg-steelblue-100 rounded-xl p-4 h-[70px] ">
                  <b>SITE 2</b>
                </span>
                <Probe />
              </div>
              <div className="flex flex-row py-4 gap-4 mx-2">
                <span className="w-full">
                  <button
                    onClick={toggleTable1}
                    className="flex items-center justify-center w-full cursor-pointer hover:bg-deepskyblue focus:bg-deepskyblue bg-steelblue-100 rounded-xl h-[70px] text-white font-red-hat-mono text-2xl-6"
                  >
                    Atmospheric Characteristics
                  </button>
                  {isTable1Open && (
                    <div className="flex flex-col item-center justify-center my-4 p-2 bg-steelblue-100 rounded-xl">
                      <Table />
                    </div>
                  )}
                </span>
                <span className="w-full">
                  <button
                    onClick={toggleTable2}
                    className="flex items-center justify-center w-full cursor-pointer hover:bg-deepskyblue focus:bg-deepskyblue bg-steelblue-100 rounded-xl h-[70px] text-white font-red-hat-mono text-2xl-6"
                  >
                    Atmospheric Characteristics
                  </button>
                  {isTable2Open && (
                    <div className="flex flex-col item-center justify-center my-4 p-2 bg-steelblue-100 rounded-xl">
                      <Table />
                    </div>
                  )}
                </span>
              </div>
              <div className="flex flex-row gap-4 mx-2">
                <span className="w-full">
                  <GasButton1/>
                </span>
                <span className="w-full">
                  <GasButton2 />
                </span>
              </div>
              <div>
                <br />
                <div className="flex flex-row gap-4 mx-2 ">
                  <br />
                  <PH />
                </div>
              </div>
            </>
          )}
          {showDiv2 && (
            <>
              <div className="w-2/3 mx-auto mt-[30px]  bg-deepskyblue rounded-xl">
                <Graph />
              </div>
            </>
          )}
          {showDiv3 && (
            <>
              <div className="w-1/2 mx-auto mt-[30px] rounded-xl text-center">
                <h1>Science Kit Control</h1>
              </div>
              <div className="my-6 mx-8 ">
               <Keysci/>
                  <div className="flex justify-center gap-8 my-6">
                  <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"

                >
                  +60
                </button>
                  <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"

                >
                  -60
                </button>
                  <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"

                >
                  +90
                </button>
                  <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"

                >
                  -90
                </button>
                
                  </div>
                  <div className=" flex gap-8 my-6 justify-center">
                  <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  
                >
                 Shaker
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                 
                >
                 Pump1 
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                 
                >
                  Pump2
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                 
                >
                 Pump3
                </button>
                  </div>
                </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Science;

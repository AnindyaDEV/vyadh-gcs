import React, { useState } from "react";
import axios from "axios";

const Panorama = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const showDivOnClick = (divNumber) => {
    if (divNumber === 1) {
      setShowDiv1(true);
      setShowDiv2(false);
    } else if (divNumber === 2) {
      setShowDiv1(false);
      setShowDiv2(true);
    }
  };

  const [panoramaData, setPanoramaData] = useState("");

  const generatePanorama = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/generate-panorama"
      );
      const { panorama } = response.data;

      // Set the panorama data received from the server
      setPanoramaData(panorama);
    } catch (error) {
      console.error("Failed to generate panorama:", error);
    }
  };

  return (
    <div className="flex flex-row text-white font-red-hat-mono">
      <div className="fixed z-1 flex flex-wrap flex-col gap-4 p-4 ">
        <button
          onClick={() => showDivOnClick(1)}
          className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[36vh]"
        ></button>
        <button
          onClick={() => showDivOnClick(2)}
          className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[36vh]"
        ></button>
      </div>
      <div className="text-white h-[75vh] pb-8 scrollbar-thumb-steelblue-100 scrollbar-track-steelblue-400 scrollbar-none overflow-y-scroll font-red-hat-mono  w-screen flex flex-col ml-[135px]">
        {showDiv1 && (
          <>
            <div>
              <button onClick={generatePanorama}>Generate Panorama</button>
              {panoramaData && (
                <div className="mx-auto my-auto">
                  <div className="text-center">
                  <h2>Panorama</h2>
                  
                  <img
                  className=""
                    src={`data:image/jpeg;base64,${panoramaData}`}
                    alt="Panorama"
                  />
                  
                </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Panorama;

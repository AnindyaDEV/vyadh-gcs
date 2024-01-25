import React, { useState } from "react";
import classNames from "classnames";

const Home = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  // const apiUrltest = process.env.REACT_APP_API_URL_TEST;
  // const apiUrl = process.env.REACT_APP_API_URL;

 


  const handleButtonClick1 = async () => {
    setIsClicked(!isClicked);
    
    try {
      const response = await fetch("http://127.0.0.1:5000/run_script", { method: "POST" });
      const data = await response.json();
      if (response.ok) {
        setOutput(data.output);
        setError("");
      } else {
        setOutput("");
        setError(data.error || "Unknown error");
      }
    } catch (error) {
      setOutput("");
      setError("Failed to communicate with the server");
    }
  };

  const handleButtonClick2 = async () => {
    setIsClicked1(!isClicked1);
    try {
      const response = await fetch("http://127.0.0.1:5000/end_script", { method: "POST" });
      const data = await response.json();
      if (response.ok) {
        setOutput(data.output);
        setError("");
      } else {
        setOutput("");
        setError(data.error || "Unknown error");
      }
    } catch (error) {
      setOutput("");
      setError("Failed to communicate with the server");
    }
  };

  const showDivOnClick = (divNumber) => {
    if (divNumber === 1) {
      setShowDiv1(true);
      setShowDiv2(false);
    } else if (divNumber === 2) {
      setShowDiv1(false);
      setShowDiv2(true);
    }
  };

  return (
    <>
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
            <div className="text-center w-full">
              <h1>Welcome to the GCS of Team Vyadh...</h1>
              <div className="flex w-full h-full justify-center py-28 gap-6">
                <button
                  onClick={handleButtonClick1}
                  className={classNames(
                    "h-[70px] rounded-xl text-2xl-6 text-white font-red-hat-mono w-[160px] cursor-pointer",
                    {
                      "bg-steelblue-200": !isClicked,
                      "bg-green-500": isClicked,
                      "hover:bg-deepskyblue": !isClicked,
                      "hover:bg:green-200": isClicked,
                    }
                  )}
                >
                  {isClicked ? "Started!" : "Start"}
                  <div>
                  {output && <pre>{output}</pre>}
                  </div>
                  
                </button>

                <button
                  onClick={handleButtonClick2}
                  className={classNames(
                    "h-[70px] rounded-xl text-2xl-6 text-white font-red-hat-mono w-[160px] cursor-pointer",
                    {
                      "bg-steelblue-200": !isClicked1,
                      "bg-red": isClicked1,
                      "hover:bg-deepskyblue": !isClicked1,
                      "hover:bg:green-200": isClicked1,
                    }
                  )}
                >
                  {isClicked1 ? "Terminated!" : "Terminate"}
                  <div>
                  {output && <pre>{output}</pre>}
                  </div>
                  
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

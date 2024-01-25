import { useState, useEffect } from "react";
import Radio from "../assets/radio.svg";
import Map from "../assets/map.svg";
import Joystick from "../assets/joystick.svg";
import UpLeft from "../assets/front-left.svg";
import UpRight from "../assets/front-right.svg";
import compass1 from "../assets/compass1.svg";
import compass2 from "../assets/compass2.svg";
import Compass from "../Components/compass";
import Keys from "../Components/traversal_keys";
import Localization from "../Components/localization";

const Controls = () => {
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

  const handleClick1 = () => {
    // Add functionality for the first button here
    console.log("Button 1 clicked!");
  };

  const handleClick2 = () => {
    // Add functionality for the second button here
    console.log("Button 2 clicked!");
  };
  const LA1_forward = () => {
    fetch("http://127.0.0.1:5000/la1-forward")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const LA1_Backward = () => {
    fetch("http://127.0.0.1:5000/la1-backward")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const LA2_Forward = () => {
    fetch("http://127.0.0.1:5000/la2-forward")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const LA2_Backward = () => {
    fetch("http://127.0.0.1:5000/la2-backward")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const TT_Right = () => {
    fetch("http://127.0.0.1:5000/tt-right")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const TT_Left = () => {
    fetch("http://127.0.0.1:5000/tt-left")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Stop_la = () => {
    fetch("http://127.0.0.1:5000/stop-la")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Open = () => {
    fetch("http://127.0.0.1:5000/open")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Close = () => {
    fetch("http://127.0.0.1:5000/close")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Wrist_up = () => {
    fetch("http://127.0.0.1:5000/wrist-up")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Wrist_down = () => {
    fetch("http://127.0.0.1:5000/wrist-down")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Stop_grip = () => {
    fetch("http://127.0.0.1:5000/stop-grip")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Grip_rot_right = () => {
    fetch("http://127.0.0.1:5000/grip-rotate-right")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Grip_rot_left = () => {
    fetch("http://127.0.0.1:5000/grip-rotate-left")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  const Stop_tt_rotate = () => {
    fetch("http://127.0.0.1:5000/stop-tt-rotate")
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };


  const armhandleKeyPress = (e) => {
    console.log('Key pressed:', e.key);
    switch (e.key) {
      case '`':
        fetch('http://192.168.1.25:5000/la1-forward').catch((error) => {
          // Handle any errors
        });
        break;
      case '1':
        fetch('http://192.168.1.25:5000/la1-backward').catch((error) => {
          // Handle any errors
        });
        break;
      case '2':
        fetch('http://192.168.1.25:5000/la2-forward').catch((error) => {
          // Handle any errors
        });
        break;
      case '3':
        fetch('http://192.168.1.25:5000/la2-backward').catch((error) => {
          // Handle any errors
        });
        break;
      case '4':
        fetch('http://192.168.1.25:5000/open').catch((error) => {
          // Handle any errors
        });
        break;
      case '5':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/close').catch((error) => {
          // Handle any errors
        });
        break;
      case '6':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/wrist-up').catch((error) => {
          // Handle any errors
        });
        break;
        case '7':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/wrist-down').catch((error) => {
          // Handle any errors
        });
        break;
        case '8':
        fetch('http://192.168.1.25:5000/grip-rotate-right').catch((error) => {
          // Handle any errors
        });
        break;
      case '9':
        fetch('http://192.168.1.25:5000/grip-rotate-left').catch((error) => {
          // Hanle any errors
        });
        break;
      case '0':
        fetch('http://192.168.1.25:5000/tt-right').catch((error) => {
          // Handle any errors
        });
        break;
      case '-':
        fetch('http://192.168.1.25:5000/tt-left').catch((error) => {
          // Handle any errors
        });
        break;
      
      case '[':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/stop-la').catch((error) => {
          // Handle any errors
        });
        break;
      case ']':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/stop-grp').catch((error) => {
          // Handle any errors
        });
        break;
      case '\\':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/stop-tt-rotate').catch((error) => {
          // Handle any errors
        });
        break;
        
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', armhandleKeyPress);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('keydown', armhandleKeyPress);
    };
  }, []);



  return (
    <>
      <div className="fixed left-0 flex flex-wrap flex-col gap-4 p-4">
        <button
          onClick={() => showDivOnClick(1)}
          className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[36vh]"
        >
          <img src={Radio} alt="" />
        </button>
        <button
          onClick={() => showDivOnClick(2)}
          className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[36vh]"
        >
          <img src={Map} alt="" />
        </button>
      </div>
      <div className="text-white w-[100vw] h-[75vh] pb-8 scrollbar-thumb-steelblue-100 scrollbar-track-steelblue-400 scrollbar-thin overflow-y-scroll font-red-hat-mono">
        {showDiv1 && (
          <>
            <div className="flex flex-col ml-[150px] mr-8">
              <div className="flex w-full justify-between border-b-4 border-white border-solid">
                <div className="flex flex-col justify-between items-center w-max m-3 p-2 px-[60px]">
                  <div className=" bg-steelblue-200 rounded-xl flex-1 px-[60px] flex w-full justify-center ">
                    <img
                      onClick={handleClick1}
                      className="mt-36"
                      src={UpLeft}
                      alt=""
                    ></img>
                    <div className="my-4 flex">
                      <Keys />
                      <img src={Joystick} alt=""></img>
                    </div>
                    <img
                      onClick={handleClick2}
                      className="mt-36"
                      src={UpRight}
                      alt=""
                    ></img>
                  </div>
                  <div className="text-center">
                    <h1>ROVER CONTROLS</h1>
                  </div>
                </div>

                <div className="flex flex-col item-center w-max h-fit text-center m-3 p-2">
                  <Compass
                    url={"http://127.0.0.1:5000/rover-compass-data"}
                    compassImage={compass1}
                  />
                  <h1>ROVER</h1>
                </div>

                <div className="flex flex-col item-center h-fit text-center w-max m-3 p-2">
                  <Compass
                    url={"http://127.0.0.1:5000/arm-compass-data"}
                    compassImage={compass2}
                  />
                  <h1>ARM</h1>
                </div>
              </div>

              <h1 className="mx-24 text-3xl text-center">ARM CONTROLS</h1>

              <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={LA1_forward}
                >
                  LA1 FORWARD
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={LA1_Backward}
                >
                  LA1 BACKWARD
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={LA2_Forward}
                >
                  LA2 FORWARD
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={LA2_Backward}
                >
                  LA2 BACKWARD
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Stop_la}
                >
                  STOP LA
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Open}
                >
                  OPEN
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Close}
                >
                  CLOSE
                </button>
                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Wrist_up}
                >
                  WRIST UP
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Wrist_down}
                >
                  WRIST DOWN
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Stop_grip}
                >
                  STOP GRIP
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Grip_rot_right}
                >
                  GRIP RIGHT
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Grip_rot_left}
                >
                  GRIP LEFT
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={TT_Right}
                >
                  TT RIGHT
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={TT_Left}
                >
                  TT LEFT
                </button>

                <button
                  className="h-[70px] bg-steelblue-200 rounded-xl text-2xl-6 text-white font-red-hat-mono w-[130px] cursor-pointer hover:bg-deepskyblue"
                  onClick={Stop_tt_rotate}
                >
                  STOP TT ROTATE
                </button>
              </div>
            </div>
          </>
        )}
        {showDiv2 && (
          <div className="flex justify-center ml-[150px] mr-8">
            <div className="my-12  rounded-md p-5 bg-deepskyblue">
              <Localization />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Controls;

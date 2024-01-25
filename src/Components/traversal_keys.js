import React, { useEffect, useState } from 'react';

const Keys = () => {
  const handleKeyPress = (e) => {
    console.log('Key pressed:', e.key);
    switch (e.key) {
      case '`':
        fetch('http://192.168.1.25:5000/m1-forward').catch((error) => {
          // Handle any errors
        });
        break;
      case '1':
        fetch('http://192.168.1.25:5000/m1-backward').catch((error) => {
          // Handle any errors
        });
        break;
      case '2':
        fetch('http://192.168.1.25:5000/m2-forward').catch((error) => {
          // Handle any errors
        });
        break;
      case '3':
        fetch('http://192.168.1.25:5000/m2-backward').catch((error) => {
          // Handle any errors
        });
        break;
      case '0':
        fetch('http://192.168.1.25:5000/stop-la').catch((error) => {
          // Handle any errors
        });
        break;
      case '5':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/m3-clock').catch((error) => {
          // Handle any errors
        });
        break;
      case '6':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/m3-anticlock').catch((error) => {
          // Handle any errors
        });
        break;
        case '7':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/stop-tt').catch((error) => {
          // Handle any errors
        });
        break;
        case 'w':
        fetch('http://192.168.1.25:5000/forward_slow').catch((error) => {
          // Handle any errors
        });
        break;
      case 's':
        fetch('http://192.168.1.25:5000/backward_slow').catch((error) => {
          // Hanle any errors
        });
        break;
      case 'd':
        fetch('http://192.168.1.25:5000/right_slow').catch((error) => {
          // Handle any errors
        });
        break;
      case 'a':
        fetch('http://192.168.1.25:5000/left_slow').catch((error) => {
          // Handle any errors
        });
        break;
        case 'W':
        fetch('http://192.168.1.25:5000/forward').catch((error) => {
          // Handle any errors
        });
        break;
      case 'S':
        fetch('http://192.168.1.25:5000/backward').catch((error) => {
          // Hanle any errors
        });
        break;
      case 'D':
        fetch('http://192.168.1.25:5000/right').catch((error) => {
          // Handle any errors
        });
        break;
      case 'A':
        fetch('http://192.168.1.25:5000/left').catch((error) => {
          // Handle any errors
        });
        break;
      case ' ':
        fetch('http://192.168.1.25:5000/stop').catch((error) => {
          // Handle any errors
        });
        break;
      case 'C':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/partialL').catch((error) => {
          // Handle any errors
        });
        break;
      case 'V':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/partialR').catch((error) => {
          // Handle any errors
        });
        break;
      case 'Q':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/anticlock180L').catch((error) => {
          // Handle any errors
        });
        break;
        case 'E':
          e.preventDefault();
          fetch('http://192.168.1.25:5000/anticlock180R').catch((error) => {
            // Handle any errors
          });
          break;
          case 'Z':
            e.preventDefault();
            fetch('http://192.168.1.25:5000/anticlock360L').catch((error) => {
              // Handle any errors
            });
            break;
            case 'X':
              e.preventDefault();
              fetch('http://192.168.1.25:5000/anticlock360L').catch((error) => {
                // Handle any errors
              });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return null; // Or return any desired UI if needed
};

export default Keys;

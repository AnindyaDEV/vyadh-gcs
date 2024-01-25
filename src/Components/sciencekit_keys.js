import React, { useEffect, useState } from 'react';

const Keysci = () => {
  const handleKeyPress = (e) => {
    console.log('Key pressed:', e.key);
    switch (e.key) {
      case 'Q':
        fetch('http://192.168.1.25:5000/60+').catch((error) => {
          // Handle any errors
        });
        break;
      case '1':
        fetch('http://192.168.1.25:5000/60-').catch((error) => {
          // Handle any errors
        });
        break;
      case '2':
        fetch('http://192.168.1.25:5000/90+').catch((error) => {
          // Handle any errors
        });
        break;
      case '3':
        fetch('http://192.168.1.25:5000/90-').catch((error) => {
          // Handle any errors
        });
        break;
      case '0':
        fetch('http://192.168.1.25:5000/shake').catch((error) => {
          // Handle any errors
        });
        break;
      case '5':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/pump1').catch((error) => {
          // Handle any errors
        });
        break;
      case '6':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/pump2').catch((error) => {
          // Handle any errors
        });
        break;
        case '7':
        e.preventDefault();
        fetch('http://192.168.1.25:5000/pump3').catch((error) => {
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

export default Keysci;

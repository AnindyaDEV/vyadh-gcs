import React, { useEffect, useState } from "react";

const Compass = ({ url, compassImage }) => {
  const [compass_degree, set_compass_degree] = useState(0);
  useEffect(() => {
    const fetchDegrees = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          set_compass_degree(data.degree);
        })
        .catch((error) => {
          console.error("Error fetching degrees:", error);
        });
    };

    const intervalId = setInterval(fetchDegrees, 5000); // Fetch degrees every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  const needleStyle = {
    background: 'linear-gradient(to bottom, red 10%, black 10%, black 90%, blue 90%)',
  transform: `rotate(${compass_degree}deg)`,
  top: '7%',
  transition: 'transform 0.5s ease',
  };

  return (
    <div
      className="w-60 h-64 relative bg-center bg-cover"
      style={{ backgroundImage: `url(${compassImage})` }}
    >
      <div className="w-full h-full rounded-full border-2 border-gray-600 relative">
        <div
          className="h-50 w-1 mx-auto absolute inset-0"
          style={needleStyle}
        ></div>
      </div>
    </div>
  );
};

export default Compass;

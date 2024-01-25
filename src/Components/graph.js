import React, { useState, useEffect } from "react";

import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

function Graph() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get_data");
      if (response.ok) {
        const jsonData = await response.json();

        const valuesArray = Object.values(jsonData).map((value) =>
          parseInt(value, 10)
        );
        console.log(valuesArray);

        const maxValue = Math.max(...valuesArray);
        const maxIndex = valuesArray.indexOf(maxValue);

        const colors = [
          "#5B0888",
          "#071952",
          "#5CD2E6",
          "#A6FF96",
          "#D2DE32",
          "yellow",
          "red",
          "#952323",
        ];
        const borderColor = colors[maxIndex % colors.length];

        // Create a new dataset for the current data
        const newDataset = {
          label: `Data${data.length + 1}`,
          data: valuesArray,
          fill: false,
          borderColor: borderColor,
          borderWidth: 2,
          tension: 0.3,
        };

        // Update the data state with the new dataset
        setData([...data, newDataset]);

        console.log("maximum Value:", maxValue);
        console.log("Index of maximum Value:", maxIndex + 1);
        console.log(borderColor);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchClick = () => {
    fetchData();
  };

  const handleClearClick = () => {
    // Reset the data state to an empty array to clear the plots
    setData([]);
  };

  useEffect(() => {// Fetch data initially when the component mounts
  }, []);

  const chartData = {
    labels: [380, 450, 485, 500, 565, 590, 625, 750], // Example labels
    datasets: data, // Use the data state to render multiple datasets
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Change the x-axis grid color
        },
        title: {
          display: true,
          text: "Wavelength",
          color: "gold",
          fontSize: 18,
          // Change the x-axis label color
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Change the y-axis grid color
        },
        title: {
          display: true,
          text: "Absorptance",
          color: "gold",
          fontSize: 18,
          // Change the y-axis label color
        },
      },
    },
  };

  return (
    <>
      <div className="rounded-xl m-3 bg-darkslategray-200">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="flex flex-row mx-2">
        <div className="flex flex-row justify-start m-3 gap-4">
          <button
            className="cursor-pointer bg-steelblue-100 font-red-hat-mono rounded-xl text-white"
            onClick={handleFetchClick}
          >
            <h3>Readings</h3>
          </button>
          <button
            className="cursor-pointer bg-steelblue-100 font-red-hat-mono rounded-xl text-white px-4"
            onClick={handleClearClick}
          >
            <h3>Clear</h3>
          </button>
        </div>
        <div className="ml-auto">
          <h2>Spectrometric Analysis</h2>
        </div>
      </div>
    </>
  );
}

export default Graph;

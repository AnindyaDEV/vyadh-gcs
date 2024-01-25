import React, { useState, useEffect } from 'react';

const Table_Gas1 = () => {
  const [co2Data, setCo2Data] = useState({});
  const [moistureData, setmoistureData] = useState({});


  const fetchData1 =() =>
  {
    fetch('http://127.0.0.1:5000/CO2-data')
      .then((response) => response.json())
      .then((data) => {
        setCo2Data(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }
  const fetchData2 =() =>
  {
    fetch('http://127.0.0.1:5000/soil-moisture')
      .then((response) => response.json())
      .then((data) => {
        setmoistureData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }
  useEffect(() => {
    // Fetch data from Flask API
  }, []);
  return (
    <>
    <div className="flex flex-col">
    <table className="table-auto uppercase text-center">
      <thead>
        <tr>
          <th className="px-5 py-3  bg-darkslategray-300 rounded-xl underline">Sensor</th>
          
          <th className="px-5 py-3  bg-darkslategray-300 rounded-xl underline">Readings</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
      {/* {Object.entries(pHData).map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2 bg-darkslategray-300 rounded-xl">{key}</td>
                <td className="border px-4 py-2 bg-darkslategray-300 rounded-xl">{value}</td>
              </tr>
            ))} */}
            {Object.entries(co2Data).map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2 bg-darkslategray-300 rounded-xl">{key}</td>
                <td className="border px-4 py-2 bg-darkslategray-300 rounded-xl">{value}</td>
              </tr>
            ))}
            
            {Object.entries(moistureData).map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2 bg-darkslategray-300 rounded-xl">{key}</td>
                <td className="border px-4 py-2 bg-darkslategray-300 rounded-xl">{value}</td>
              </tr>
            ))}
          </tbody>
    </table>
      <div className='mx-auto mt-5 flex gap-2'> 
      <button className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[45px] font-red-hat-mono text-white"
      onClick={fetchData1}>
       CO2 & pH
      </button>
      <button className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[45px] font-red-hat-mono text-white"
      onClick={fetchData2}>
        Moisture & Temp
      </button>
    </div>
    </div>
    </>
  );
};

export default Table_Gas1;
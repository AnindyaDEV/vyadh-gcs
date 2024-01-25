import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const Localization = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://127.0.0.1:5000/gps_data")
        .then(response => response.json())
        .then(data => {
          setCoordinates(prevCoordinates => [...prevCoordinates, [data.latitude, data.longitude]]);
        });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (map && coordinates.length > 1) {
      const polyline = L.polyline(coordinates, { color: 'red' }).addTo(map);
    }
  }, [map, coordinates]);

  return (
    <MapContainer center={coordinates.length > 0 ? coordinates[0] : [0, 0]} zoom={22} className="map-container" style={{ width: '800px', height: '500px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Localization;

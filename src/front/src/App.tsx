import React, { useState } from "react";
// import "./App.css";
import InfoModal from "./components/InfoModal";
import AR from "./components/AR";

const App = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  if (!navigator.geolocation) {
    window.alert("Your browser doesn't support Geolocation");
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("lat, lon", latitude, longitude);
      },
      () => {
        window.alert("Failed to get your location!");
      }
    );
  }

  if (latitude === 0 && longitude === 0) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <AR latitude={latitude} longitude={longitude} />
      <div
        style={{
          zIndex: 100000000000000000,
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          width: "120px",
          height: "120px",
        }}
      >
        <InfoModal latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default App;

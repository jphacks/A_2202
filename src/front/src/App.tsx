import React, { useState } from "react";
// import "./App.css";
import InfoModal from "./components/InfoModal";
import AR from "./components/AR";
import WarningIcon from "@mui/icons-material/Warning";
import Alert from "@mui/joy/Alert";
import Typography from "@mui/joy/Typography";

// TODO: gif長くする、gif背景をカメラ、左上あたりロゴ表示、フォント揃える、色揃える

const App = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  if (!navigator.geolocation) {
    return (
      <Alert
        startDecorator={<WarningIcon sx={{ mx: 0.5 }} />}
        variant="solid"
        color="danger"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography sx={{ color: "white" }} fontWeight="md">
          Your browser doesn't support Geolocation.
        </Typography>
      </Alert>
    );
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        window.alert("Failed to get your location!");
      }
    );
  }

  if (latitude === 0 && longitude === 0)
    return (
      <img
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src={"/assets/giffycanvas-unscreen.gif"}
        alt="Please wait until the page loads."
      />
    );

  return (
    <div className="App">
      <AR latitude={latitude} longitude={longitude} />
      <div
        style={{
          zIndex: 2147483647,
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <InfoModal latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default App;

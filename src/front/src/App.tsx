import React, { useState } from "react";
// import "./App.css";
import InfoModal from "./components/InfoModal";
import AR from "./components/AR";
import WarningIcon from "@mui/icons-material/Warning";
import Alert from "@mui/joy/Alert";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";

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
          height: "40px",
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
    return <CircularProgress variant="soft" size="lg" />;

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

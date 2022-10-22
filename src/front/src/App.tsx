import React, { useEffect, useState } from "react";
import AScene from "./components/aframe/AScene";
import AR from "./components/AR";
import RealEstateModal from "./components/RealEstateModal";

const App = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const [showComponent2, setShowComponent2] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  if (!navigator.geolocation) {
    window.alert("Your browser doesn't support Geolocation.");
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

  useEffect(() => {
    const toRef = setTimeout(() => {
      setShowComponent(true);
      clearTimeout(toRef);
    }, 2500);
  }, []);

  useEffect(() => {
    if (showComponent) {
      const toRef = setTimeout(() => {
        setShowComponent(false);
        setShowComponent2(true);
        clearTimeout(toRef);
      }, 4000);
    }
  }, [showComponent]);

  const loadingGif = () => {
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
  };

  return (
    <>
      {showComponent2 && (
        <img
          style={{
            position: "absolute",
            top: "20px",
            left: "15px",
            width: "150px",
          }}
          src={"/assets/yurucamp-logo.svg"}
          alt="Logo"
        />
      )}
      <AScene
        style={{ width: "200vw", height: "100vh" }}
        vr-Mode-Ui="enabled: false"
        embedded=""
        arjs="sourceType: webcam; debugUIEnabled: false"
      >
        {showComponent2 && <AR latitude={latitude} longitude={longitude} />}
      </AScene>
      {showComponent2 && (
        <RealEstateModal latitude={latitude} longitude={longitude} />
      )}
      {showComponent && loadingGif()}
    </>
  );
};

export default App;

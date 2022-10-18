import React, { useEffect } from "react";
import AScene from "./components/AScene";
import ACamera from "./components/ACamera";
import AText from "./components/AText";

function App() {
  const commonProps = {
    "look-At": "[gps-camera]",
    "gps-entity-place":
      "latitude: 37.492151723031024; longitude: 139.94461074269023;",
    // 'latitude: 37.5150016; longitude: 139.9335767;',
  };

  useEffect(() => {
    const entity = document.getElementsByTagName("canvas");
    if (entity[0]) {
      entity[0].addEventListener(
        "click",
        () => {
          window.alert("aaaaaa");
        },
        false
      );
    }
  });

  return (
    <div style={{ width: "200vw", height: "100vh" }}>
      <AScene
        embedded=""
        renderer="colorManagement: true"
        vr-Mode-Ui="enabled: false"
        arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3; detectionMode:mono_and_matrix; debugUIEnabled: false;"
      >
        <ACamera
          gps-Camera="maxDistance: 0"
          cursor="rayOrigin: mouse; fuse:false"
          camera=""
        />

        <AText
          {...commonProps}
          value={"Hello, World"}
          scale={"8 8 8"}
          position={"0 4 0"}
          color={"black"}
          width={18}
          align="center"
          z-Offset={1}
        />

        <AText
          {...commonProps}
          value={
            "Hello, Demo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
          scale={"1 1 1"}
          position={"2 2 2"}
          color={"white"}
          width={18}
          align="center"
          z-Offset={2}
        />
      </AScene>
    </div>
  );
}

export default App;

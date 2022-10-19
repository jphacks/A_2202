import React, { useEffect } from "react";
import AScene from "./aframe/AScene";
import ACamera from "./aframe/ACamera";
import AText from "./aframe/AText";

const AR = () => {
  const commonProps = {
    "look-At": "[gps-camera]",
    "gps-entity-place":
      "latitude: 37.492151723031024; longitude: 139.94461074269023;",
    // "latitude: 37.5150016; longitude: 139.9335767;",
  };

  // useEffect(() => {
  //   const entity = document.getElementsByTagName("canvas");
  //   if (entity[0]) {
  //     entity[0].addEventListener(
  //       "click",
  //       () => {
  //         window.alert("aaaaaa");
  //       },
  //       false
  //     );
  //   }
  // });

  return (
    <div style={{ width: "200vw", height: "100vh" }}>
      <AScene
        vr-Mode-Ui="enabled: false"
        embedded=""
        arjs="sourceType: webcam; debugUIEnabled: false;"
        // renderer="colorManagement: true"
        // arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3; detectionMode:mono_and_matrix; debugUIEnabled: false;"
      >
        <ACamera
          gps-Camera="minDistance:30; maxDistance: 100; gpsMinDistance: 10"
          rotation-Reader=""
          // cursor="rayOrigin: mouse; fuse:false"
          // camera=""
        />

        <AText
          {...commonProps}
          value={"Hello, World"}
          scale={"0.5 0.5 0.5"}
          color={"black"}
          width={18}
          // align="center"
          // z-Offset={1}
        />

        <AText
          {...commonProps}
          value={
            "Hello, Demo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
          scale={"0.5 0.5 0.5"}
          color={"white"}
          width={18}
        />
      </AScene>
    </div>
  );
};

export default AR;

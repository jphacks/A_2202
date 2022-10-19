import React, { useEffect, useState, useRef } from "react";
import AScene from "./aframe/AScene";
import ACamera from "./aframe/ACamera";
import AText from "./aframe/AText";

const AR = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [isDisplay, setDisplay] = useState<boolean>(true);

  // TODO: latitude, longitudeをポーリング？
  // しないのであれば、useState消す
  // const el = document.querySelector("[gps-entity-place]");
  // console.log("el", el);
  // el?.addEventListener("gps-entity-place-update-positon", (event) => {
  //   console.log("event", event);
  //   // if (event.detail.distance < 100) {
  //   //   el.setAttribute("material", "color: yellow");
  //   // } else {
  //   //   el.setAttribute("material", "color: red");
  //   // }
  // });

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

  const commonProps = {
    "look-At": "[gps-camera]",
    "gps-entity-place":
      "latitude: 37.492151723031024; longitude: 139.94461074269023;",
    // `latitude: ${latitude}; longitude: ${longitude};`,
    // "latitude: 37.5150016; longitude: 139.9335767;",
  };

  let isValid = true;

  window.addEventListener("load", function () {
    const el = document.getElementsByTagName("canvas");
    el[0].addEventListener("click", (event) => {
      if (isValid) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
      isValid = !isValid;
    });

    // TODO: オブジェクトタッチ判定
    // const tmp = document.getElementById("myobject");
    // console.log("tmp", tmp);
    // tmp?.addEventListener("click", () => {
    //   window.alert("tmp");
    // });
  });

  return (
    <div style={{ width: "200vw", height: "100vh" }}>
      <AScene
        vr-Mode-Ui="enabled: false"
        embedded=""
        arjs="sourceType: webcam; debugUIEnabled: false;"
        // webxr="optionalFeatures:  hit-test;"
        // ar-hit-test="target:#myobject;"
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
          // id="myobject"
          value={`${latitude}, ${longitude} \n Hello World!`}
          scale={"0.5 0.5 0.5"}
          color={"red"}
          width={18}
          visible={isDisplay}
          // z-Offset={0}
          // align="center"
        />

        <AText
          {...commonProps}
          value={`${latitude}, ${longitude} \n My name is John!`}
          scale={"0.5 0.5 0.5"}
          color={"blue"}
          width={18}
          visible={!isDisplay}
        />
      </AScene>
    </div>
  );
};

export default AR;

import React, { useEffect, useRef } from "react";
// import logo from "./logo.svg";
// import "./App.css";

import "aframe";
import "aframe-look-at-component/dist/aframe-look-at-component";
import "@ar-js-org/ar.js/aframe/build/aframe-ar-nft";

// import "aframe-animation-component";
// import "aframe-particle-system-component";
// import "babel-polyfill";
// import { Entity, Scene } from "aframe-react";

function App() {
  // useEffect(() => {
  //   let latitude, longitude;
  //   navigator.geolocation.getCurrentPosition((data) => {
  //     latitude = data.coords.latitude;
  //     longitude = data.coords.longitude;
  //   });
  //   if (typeof document !== "undefined") {
  //     const entity = document.getElementsByTagName("a-box");
  //     console.log("before entity", entity[0]);
  //     entity[0].setAttribute("gps-entity-place", {
  //       latitude: latitude,
  //       longitude: longitude,
  //     });
  //     entity[0].setAttribute("id", "demo");
  //     console.log("after entity", entity[0]);
  //   }
  // });

  let line = document.createElement("div");
  const html = `
  <a-scene
    vr-mode-ui="enabled: false"
    embedded
    arjs="sourceType: webcam; debugUIEnabled: false;"
  >
    <a-text
      value="This content will always face you."
      look-at="[gps-camera]"
      scale="30 30 30"
      gps-entity-place="latitude: 37.492151723031024; longitude: 139.94461074269023;"
    ></a-text>
    <a-camera gps-camera rotation-reader></a-camera>
  </a-scene>
  `;
  line.innerHTML = html;

  useEffect(() => {
    const tmp = document.getElementById("demo");
    console.log("tmp", tmp);
    tmp.appendChild(line);
  });

  return (
    <div id="demo">
      {/* <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
        renderer="antialias: true; alpha: true"
      >
        <a-camera gps-new-camera="gpsMinDistance: 5"></a-camera>
      </a-scene>
      <div
        id="setloc"
        // style="position:absolute; left: 10px; bottom: 2%; z-index:999; background-color: blue; color: white; padding: 10px"
      ></div> */}
      {/* <a-scene arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box
          material="color: yellow"
          look-at="[gps-camera]"
          gps-entity-place="latitude: 37.5232359; longitude: 139.9393498"
        />
        <div id="demo"></div>
      </a-scene> */}
    </div>
  );
}

export default App;

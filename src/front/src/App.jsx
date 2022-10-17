import React, { useEffect } from "react";
import { useRef } from "react";
// import logo from "./logo.svg";
// import "./App.css";

import "aframe";
import "aframe-look-at-component/dist/aframe-look-at-component";
import "@ar-js-org/ar.js/aframe/build/aframe-ar-nft";

// import "aframe-animation-component";
// import "aframe-particle-system-component";
// import "babel-polyfill";
import { Entity, Scene } from "aframe-react";

function App() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
  });
  return (
    <div>
      {/* <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            alt=""
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            alt=""
          />
        </a-assets>

        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: "snow", particleCount: 2000 }} />
        <Entity
          primitive="a-text"
          text={{
            value: "Hello, A-Frame React!",
            align: "center",
            color: "red",
          }}
          position={{ x: 0, y: 2, z: -1 }}
        />

        <Entity
          id="box"
          geometry={{ primitive: "box" }}
          material={{ color: "red", opacity: 0.6 }}
          animation__rotate={{
            property: "rotation",
            dur: 2000,
            loop: true,
            to: "360 360 360",
          }}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 100,
            loop: true,
            to: "1.1 1.1 1.1",
          }}
          position={{ x: 0, y: 1, z: -3 }}
        >
          <Entity
            animation__scale={{
              property: "scale",
              dir: "alternate",
              dur: 100,
              loop: true,
              to: "2 2 2",
            }}
            geometry={{ primitive: "box", depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: "#24CAFF" }}
          />
        </Entity>

        <Entity primitive="a-camera" gps-camera rotation-reader>
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: "scale",
              startEvents: "click",
              from: "0.1 0.1 0.1",
              to: "1 1 1",
              dur: 150,
            }}
          />
        </Entity>
      </Scene> */}

      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-text
          ref={ref}
          // value="This content will always face you."
          // look-at="[gps-camera]"
          // scale="30 30 30"
          // gps-entity-place="latitude: 37.492151723031024; longitude: 139.94461074269023;"
        ></a-text>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
}

export default App;

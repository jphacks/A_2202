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
    let lat, lon;
    navigator.geolocation.getCurrentPosition(data => {
      lat = data.coords.latitude;
      lon = data.coords.longitude;
      console.log(lat + " " + lon);
    });
    console.log(ref);
    const entity = document.getElementsByTagName("a-box");
    entity.setAttribute("gps-new-entity-place", {
      latitude: lat,
      longitude: lon,
    });
  });
  return (
    <div>
      <a-scene arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box
          material="color: yellow"
          gps-entity-place="latitude: 37.5232359; longitude: 139.9393498"
        />
        {/* <a-text
          value="Hello, World 001 opacity"
          color="black"
          width="5"
          opacity="0.3"
          gps-entity-place="latitude: 37.5232294; longitude: 139.9393575;"
        ></a-text>
        <a-text
          position="-1 1 -3"
          value="Hello, World 001 small"
          color="black"
          width="3"
        ></a-text>
        <a-text
          position="-1 0.5 -3"
          value="Hello, World 001"
          color="black"
          width="5"
        ></a-text>

        <a-text
          position="-4 1 -3"
          value="Hello, World 002 small"
          color="black"
          font="dejavu"
          scale="0.5 0.5 0.5"
        ></a-text>
        <a-text
          position="-4 0.5 -3"
          value="Hello, World 002"
          color="black"
          font="dejavu"
        ></a-text>

        <a-text
          position="3 1.6 -5"
          value="Hello, World 003 small"
          color="black"
          font="kelsonsans"
        ></a-text>
        <a-text
          position="2 0.5 -3"
          value="Hello, World 003"
          color="black"
          font="kelsonsans"
        ></a-text>

        <a-entity
          position="0 3.5 -4"
          geometry="primitive: plane; width: 5"
          material="color: #EF2D5E"
          text="color: white; align: center; font: dejavu;
        value: Hello, World 005\nHello, World 005;"
        ></a-entity>

        <a-entity
          position="0 -1 -4"
          geometry="primitive: plane; width: 5"
          material="color: #EF2D5E"
          text="color: white; align: center; font: dejavu;
        value: Hello, World 006;"
        >
          <a-animation
            begin="click"
            attribute="scale"
            dur="500"
            easing="ease-in-sine"
            to="2 2 2"
          ></a-animation>
          <a-animation
            begin="mouseleave"
            attribute="scale"
            delay="500"
            to="1 1 1"
          ></a-animation>
        </a-entity>

        <a-entity camera look-controls wasd-controls>
          <a-entity
            cursor="fuse: true;"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat"
          >
            <a-animation
              begin="click"
              easing="ease-in"
              attribute="scale"
              dur="150"
              fill="forwards"
              from="0.1 0.1 0.1"
              to="1 1 1"
            ></a-animation>
            <a-animation
              begin="cursor-fusing"
              easing="ease-in"
              attribute="scale"
              dur="1500"
              fill="backwards"
              from="1 1 1"
              to="0.1 0.1 0.1"
            ></a-animation>
          </a-entity>
        </a-entity> */}
      </a-scene>
    </div>
  );
}

export default App;

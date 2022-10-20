import React, { useState, useEffect } from "react";
import type { Realestates } from "../types/realEstate";
import AScene from "./aframe/AScene";
import ACamera from "./aframe/ACamera";
import AText from "./aframe/AText";

const AR = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [articles, setArticles] = useState<[] | Realestates[]>([]);
  // const [isDisplay, setDisplay] = useState<boolean>(true);

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

  const getArticles = async (latitude: number, longitude: number) => {
    if (latitude !== 0 && longitude !== 0) {
      const url =
        // "http://localhost:8080/realestate?latitude=37.492151723031024&longitude=139.94461074269023";
        `http://localhost:8080/realestate?latitude=${latitude}&longitude=${longitude}`;
      console.log("url", url);
      setArticles([
        {
          id: "82ddbc14-9284-4ca8-abc0-037e6eaed6c3",
          name: "Daiki",
          latitude: 37.492151723031024,
          longitude: 139.94461074269023,
        },
        {
          id: "82ddbc14-9284-4ca8-abc0-nice",
          name: "Sakuma",
          latitude: 37.4922,
          longitude: 139.94461074269023,
        },
      ]);
      // await fetch(url)
      //   .then((res: any) => res.json())
      //   .then((data) => {
      //     const realEstates = data.Realestates;
      //     setArticles(realEstates);
      //     setLatitude(realEstates[0].latitude);
      //     setLongitude(realEstates[0].longitude);
      //     console.log(articles, data);
      //   })
      //   .catch((err) => {
      //     console.error("ERROR API: ", err);
      //   });
    }
  };

  useEffect(() => {
    getArticles(latitude, longitude);
  }, [latitude, longitude]);

  // const commonProps = {
  //   "look-At": "[gps-camera]",
  //   "gps-entity-place":
  //     // "latitude: 37.492151723031024; longitude: 139.94461074269023;",
  //     `latitude: ${latitude}; longitude: ${longitude};`,
  //   // "latitude: 37.5150016; longitude: 139.9335767;",
  // };

  // let isValid = true;
  // window.addEventListener("load", function () {
  //   const el = document.getElementsByTagName("canvas");
  //   el[0].addEventListener("click", (event) => {
  //     if (isValid) {
  //       setDisplay(false);
  //     } else {
  //       setDisplay(true);
  //     }
  //     isValid = !isValid;
  //   });
  //   // TODO: オブジェクトタッチ判定
  //   // const tmp = document.getElementById("myobject");
  //   // console.log("tmp", tmp);
  //   // tmp?.addEventListener("click", () => {
  //   //   window.alert("tmp");
  //   // });
  // });

  if (articles.length === 0) return <h1>Loading...</h1>;

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

        {Array.isArray(articles)
          ? articles.map((element) => {
              return (
                <AText
                  key={element.id}
                  look-At={"[gps-camera]"}
                  gps-Entity-Place={`latitude: ${element.latitude}; longitude: ${element.longitude};`}
                  value={`${element.name}`}
                  scale={"1 1 1"}
                  color={"red"}
                  width={18}
                />
              );
            })
          : "Fail"}

        {/* <AText
          {...commonProps}
          look-At={"[gps-camera]"}
          gps-Entity-Place={`latitude: ${latitude}; longitude: ${longitude};`}
          // id="myobject"
          value={`Hello World!`}
          scale={"1 1 1"}
          color={"red"}
          width={18}
          // visible={isDisplay}
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
        /> */}
      </AScene>
    </div>
  );
};

export default AR;

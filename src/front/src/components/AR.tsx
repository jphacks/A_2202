import React, { useState, useEffect } from "react";
import type { RealEstates } from "../types/realEstate";
import AScene from "./aframe/AScene";
import ACamera from "./aframe/ACamera";
import AText from "./aframe/AText";
import CircularProgress from "@mui/joy/CircularProgress";

const AR: React.FC<{
  latitude: number;
  longitude: number;
}> = ({ latitude, longitude }) => {
  const [realEstates, setRealEstates] = useState<[] | RealEstates[]>([]);
  // const [isDisplay, setDisplay] = useState<boolean>(true);

  const getRealEstates = async (latitude: number, longitude: number) => {
    if (latitude !== 0 && longitude !== 0) {
      // const url =
      //   `https://back-lpzceixskq-de.a.run.app/realestate?latitude=${latitude}&longitude=${longitude}`;
      const url = `http://localhost:8080/realestate?latitude=${latitude}&longitude=${longitude}`;
      setRealEstates([
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
      //     setRealEstates(data.Realestates);
      //   })
      //   .catch((err) => {
      //     window.alert("Failed to get API!");
      //   });
    }
  };

  useEffect(() => {
    getRealEstates(latitude, longitude);
  }, [latitude, longitude]);

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

  if (realEstates.length === 0)
    return <CircularProgress variant="soft" size="lg" />;

  return (
    <div style={{ width: "200vw", height: "100vh" }}>
      <AScene
        vr-Mode-Ui="enabled: false"
        embedded=""
        arjs="sourceType: webcam; debugUIEnabled: false"
        // webxr="optionalFeatures:  hit-test;"
        // ar-hit-test="target:#myobject;"
        // renderer="colorManagement: true"
        // arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3; detectionMode:mono_and_matrix; debugUIEnabled: false;"
      >
        <ACamera
          gps-Camera="maxDistance: 100; gpsMinDistance: 0"
          rotation-Reader=""
          // cursor="rayOrigin: mouse; fuse:false"
          // camera=""
        />

        {Array.isArray(realEstates)
          ? realEstates.map((realEstate) => {
              return (
                <AText
                  key={realEstate.id}
                  look-At={"[gps-camera]"}
                  gps-Entity-Place={`latitude: ${realEstate.latitude}; longitude: ${realEstate.longitude};`}
                  value={`${realEstate.name}`}
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

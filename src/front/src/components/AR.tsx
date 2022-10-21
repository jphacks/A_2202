import React, { useState, useEffect } from "react";
import type { RealEstates } from "../types/realEstate";
import ACamera from "./aframe/ACamera";
import AAsset from "./aframe/AAssets";
import AAsetItem from "./aframe/AAsetItem";
import AEntity from "./aframe/AEntity";
// import AText from "./aframe/AText";

const AR: React.FC<{
  latitude: number;
  longitude: number;
}> = ({ latitude, longitude }) => {
  const [realEstates, setRealEstates] = useState<[] | RealEstates[]>([]);
  // const [isDisplay, setDisplay] = useState<boolean>(true);

  const getRealEstates = async (latitude: number, longitude: number) => {
    if (latitude !== 0 && longitude !== 0) {
      const url = `https://back-lpzceixskq-de.a.run.app/realestate?latitude=${latitude}&longitude=${longitude}`;
      // const url = `http://localhost:8080/realestate?latitude=${latitude}&longitude=${longitude}`;
      // window.alert("AR url" + url);
      // console.log("AR url", url);
      // setRealEstates([
      //   {
      //     id: "82ddbc14-9284-4ca8-abc0-037e6eaed6c3",
      //     name: "Daiki",
      //     latitude: 37.492151723031024,
      //     longitude: 139.94461074269023,
      //   },
      //   {
      //     id: "82ddbc14-9284-4ca8-abc0-nice",
      //     name: "Sakuma",
      //     latitude: 37.4922,
      //     longitude: 139.94461074269023,
      //   },
      // ]);
      await fetch(url)
        .then((res: any) => res.json())
        .then((data) => {
          setRealEstates(data.Realestates);
          // console.log("AR data.Realestates", data.Realestates);
          // window.alert("AR data.Realestates" + data.Realestates);
        })
        .catch((err) => {
          // window.alert("Failed to get API!");
        });
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
  //   //   // window.alert("tmp");
  //   // });
  // });

  if (realEstates.length === 0)
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

  return (
    <>
      <ACamera
        gps-Camera="maxDistance: 1000; gpsMinDistance: 0"
        rotation-Reader=""
        // cursor="rayOrigin: mouse; fuse:false"
        // camera=""
      />

      {realEstates.map((realEstate) => {
        return (
          <>
            <AAsset>
              <AAsetItem id="pin" src="/assets/pin.glb"></AAsetItem>
            </AAsset>
            <AEntity
              look-At={"[gps-camera]"}
              gps-Entity-Place={`latitude: ${realEstate.latitude}; longitude: ${realEstate.longitude};`}
              gltf-Model={"#pin"}
              scale={"1 1 1"}
            />
          </>
        );
      })}

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
    </>
  );
};

export default AR;

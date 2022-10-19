import React from "react";
// import "./App.css";
import InfoModal from "./components/InfoModal";
import AR from "./components/AR";

const App = () => {
  return (
    <div className="App">
      <AR />
      <div
        style={{
          zIndex: 100000000000000000,
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          width: "120px",
          height: "120px",
        }}
      >
        <InfoModal />
      </div>
    </div>
  );
};

export default App;

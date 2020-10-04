import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1>Youssef Hammi</h1>
        <br />
        <img src="./keyborad.png" alt="myimage" />
        <br />
        <img src="./stone.png" alt="myimage" />
        <br />
      </div>
      <video controls>
        <source src="./farcry6.mp4" type="video/mp4" />
      </video>
    </>
  );
};
export default App;

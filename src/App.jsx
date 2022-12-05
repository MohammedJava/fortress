import React, { Component } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import RequestShelter from "./RequestShelter/RequestShelter";
import Home from "./Home/Home";
import backgroundVideo from "./Assets/AdobeStock_Video2.mov";
import Activities from "./Activities/Activities";
import Navbar from "./Navbar/Navbar";
import Volunteering from "./Volunteering/Volunteering";

const App = () => {
  const hello = "hello";

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Box
        sx={{
          width: "100%",
          height: "5vh",
          backgroundColor: "primary.dark",
        }}
      />
      {/*Pages allows column display and background video*/}
      <div className="pages">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          id="bVideo"
        />
        <RequestShelter />
        <Volunteering />
        <Activities />
      </div>
    </div>
  );
};

export default App;

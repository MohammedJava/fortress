import React, { Component } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import RequestShelter from "./RequestShelter/RequestShelter";
import Home from "./Home/Home";
import backgroundVideo from "./Assets/AdobeStock_Video2.mov";
import Volunteering from "./Volunteering/Volunteering";
import Navbar from "./Navbar/Navbar";
import Volunteer from "./Volunteer/Volunteer";

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
      <div id="flexRow">
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
          <Volunteer />
        </div>
      </div>
    </div>
  );
};

export default App;

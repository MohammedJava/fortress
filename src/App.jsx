import React, { Component } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Introduction from "./Introduction/Introduction";
import Home from "./Home/Home";
import backgroundVideo from "./Assets/AdobeStock_Video2.mov";
import Surveys from "./Surveys/Surveys";
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
      <div className="pages">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          id="bVideo"
        />
        <Introduction />
        <Surveys />
        <Volunteer />
      </div>
    </div>
  );
};

export default App;

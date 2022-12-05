/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import mainVideo from "../Assets/AdobeStock_Video1.mov";

const Home = () => (
  <div className="Home" id="Home">
    <div className="overlay" />
    <video src={mainVideo} autoPlay loop muted playsInline />
    <div className="content">
      <Tilt
        className="tilt-img"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        tiltAxis="y"
        tiltReverse
        gyroscope
      >
        <h1>YouthShelter</h1>
      </Tilt>

      <h2>
        The solution to
        <Typewriter
          options={{
            strings: [
              "Homelessness",
              "Unstable Home Environments",
              "At Risk Youth",
              "Finding Shelters Quickly",
              "Escaping Abuse at Home",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </h2>
    </div>
  </div>
);

export default Home;

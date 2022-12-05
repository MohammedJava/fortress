/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.scss";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import mainVideo from "../Assets/AdobeStock_Video1.mov";
import MultipleTilt from "./MultiTiltComponent/MultiTiltComponent";
import GlassImageComponent from "../GlassImageComponent/GlassImageComponent";
import image2 from "../Assets/Images/pexels-lisa-fotios-homes.jpg";

const Home = () => {
  const image = "pexels-lisa-fotios-homes.jpg";

  return (
    <div className="Home" id="Home">
      <div className="overlay" />
      <video src={mainVideo} autoPlay loop muted playsInline />
      <div className="content">
        {/*<Tilt
        className="tilt-img"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        tiltAxis="y"
        tiltReverse
        gyroscope
>*/}
        <h1>YouthShelter</h1>

        {/*Higher Card*/}
        {/*Replace all widths*/}
        <div
          style={{ marginLeft: "65%", width: "520px", position: "absolute" }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} id="tilt-img1">
            <div id="GlassImageComponent">
              <h3 style={{ margin: 0, paddingLeft: "2px" }}>A title</h3>
              <img
                src={image2}
                alt=""
                style={{ width: "520px", paddingTop: "10px" }}
              />
            </div>
          </Tilt>
        </div>

        {/*Lower Card*/}
        {/*Replace all widths*/}
        <div
          style={{
            marginLeft: "55%",
            width: "520px",
            position: "absolute",
            marginTop: "140px",
          }}
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            id="tilt-img1"
            tiltAngleYInitial={10}
          >
            <div id="GlassImageComponent">
              <h3 style={{ margin: 0, paddingLeft: "2px" }}>Another title</h3>
              <img
                src={image2}
                alt=""
                style={{ width: "520px", paddingTop: "10px" }}
              />
            </div>
          </Tilt>
        </div>

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
        <h3 id="platformDescription">
          Our platform offers unique online and on-premise solutions to youth
          homelessness, advocacy on the root of the issue and the possibility to
          help our youth overcome such challenges. Help us offer the hope of a
          better future to those who build tomorrow's world.
        </h3>
        <div id="joinButton">
          <button>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

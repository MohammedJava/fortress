import React from "react";
import Tilt from "react-parallax-tilt";
import image from "../../Assets/Images/pexels-lisa-fotios-homes.jpg";
import "../Home.scss";

const MultipleTilt = () => (
  <div className="multiple-tilt">
    <div className="col">
      <Tilt className="tilt-img" tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <img src={image} alt="" />
      </Tilt>
      <Tilt className="tilt-img" tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <img src={image} alt="" />
      </Tilt>
    </div>
    <div className="col">
      <Tilt className="tilt-img" tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <img src={image} alt="" />
      </Tilt>
      <Tilt className="tilt-img" tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <img src={image} alt="" />
      </Tilt>
    </div>
  </div>
);

export default MultipleTilt;

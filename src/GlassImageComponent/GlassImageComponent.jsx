/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import React from "react";
import "./GlassImageComponent.css";

const GlassImageComponent = ({
  image,
  width,
  marginLeft,
  tiltMaxAngleX,
  tiltMaxAngleY,
}) => {
  const hello = "hello";
  // eslint-disable-next-line
  const concatImage = require(`../Assets/Images/${image}`);

  return (
    <div className="GlassImageComponent" style={{ width, marginLeft }}>
      <img
        src={concatImage}
        alt=""
        style={{
          width,
          paddingTop: "25px",
          paddingBottom: "10px",
        }}
      />
    </div>
  );
};

export default GlassImageComponent;

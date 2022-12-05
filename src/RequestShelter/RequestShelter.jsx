import React from "react";
import "./RequestShelter.css";
import Tilt from "react-parallax-tilt";
import image2 from "../Assets/Images/pexels-lisa-fotios-homes.jpg";

const RequestShelter = () => (
  <div className="RequestShelter" id="RequestShelter">
    {/*IMPORTANT - Nothing can be seen here, MUST USE CONTENT*/}
    <div className="content">
      <div className="inner">
        <div className="title">Request Shelter</div>
        <div className="subtitle">
          Requesting shelters is as easy as it gets
        </div>
        <div className="container">
          <div className="text-place">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
              <div id="card">
                <div className="subtext">
                  <p>
                    There are multiple applications that are similar to ours,
                    such as Yelp and Zomato. Yelp is an application that will
                    mostly only have reviews from users about specific
                    restaurants that they visited. The restaurants also have
                    their own pages on the app that will show all the
                    information about their menu, where they are located and
                    contain all reviews submitted. An issue we saw with this app
                    is that foods that are gluten free, hallal, etc, are not
                    always clearly stated. Making some users not want to go to
                    said restaurant because they are not sure if the food they
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="image-place">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              id="tilt-img1"
              tiltAngleYInitial={10}
            >
              <div id="GlassImageComponent">
                <h3 style={{ margin: 0, paddingLeft: "2px", color: "#fff" }}>
                  Another title
                </h3>
                <img
                  src={image2}
                  alt=""
                  style={{ width: "520px", paddingTop: "10px" }}
                />
              </div>
            </Tilt>
          </div>
          <div className="second-text-place">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
              <div id="card">
                <div className="subtext">
                  <p>
                    There are multiple applications that are similar to ours,
                    such as Yelp and Zomato. Yelp is an application that will
                    mostly only have reviews from users about specific
                    restaurants that they visited. The restaurants also have
                    their own pages on the app that will show all the
                    information about their menu, where they are located and
                    contain all reviews submitted. An issue we saw with this app
                    is that foods that are gluten free, hallal, etc, are not
                    always cle
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="second-image-place">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              id="tilt-img1"
              tiltAngleYInitial={10}
            >
              <div id="GlassImageComponent">
                <h3 style={{ margin: 0, paddingLeft: "2px", color: "#fff" }}>
                  Another title
                </h3>
                <img
                  src={image2}
                  alt=""
                  style={{ width: "520px", paddingTop: "10px" }}
                />
              </div>
            </Tilt>
          </div>
        </div>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} id="tilt-img1">
          <div id="GlassImageComponent">
            <h3 style={{ margin: 0, paddingLeft: "2px", color: "#fff" }}>
              BIG GUI
            </h3>
            <img
              src={image2}
              alt=""
              style={{ width: "720px", paddingTop: "10px" }}
            />
          </div>
        </Tilt>
      </div>
    </div>
  </div>
);

export default RequestShelter;

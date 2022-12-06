import React from "react";
import "./Introduction.css";
import Tilt from "react-parallax-tilt";

const Background = () => (
  <div className="Background" id="Background">
    {/*IMPORTANT - Nothing can be seen here, MUST USE CONTENT*/}
    <div className="content">
      <div className="inner">
        <div className="title">INTRODUCTION</div>
        <div className="subtitle">Market Research</div>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          <div id="card">
            <div className="subtext">
              <p>
                There are multiple applications that are similar to ours, such
                as Yelp and Zomato. Yelp is an application that will mostly only
                have reviews from users about specific restaurants that they
                visited. The restaurants also have their own pages on the app
                that will show all the information about their menu, where they
                are located and contain all reviews submitted. An issue we saw
                with this app is that foods that are gluten free, hallal, etc,
                are not always clearly stated. Making some users not want to go
                to said restaurant because they are not sure if the food they
                are ordering is right for them. Furthermore, Zomato is another
                app that in essence does the same thing, has reviews, menu and
                location. The big difference is that it also works like UberEats
                where they have their own delivery system in place and they only
                recommend local restaurants. This is important for users who
                want to eat locally but a big issue with this app is that it has
                a small selection of local restaurants that a user might be
                discouraged from using the app.
              </p>
            </div>
          </div>
        </Tilt>
        <div className="subtitle">Competitors</div>
      </div>
    </div>
  </div>
);

export default Background;

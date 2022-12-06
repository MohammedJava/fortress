
import React from "react";
import "./Volunteering.css";
import Tilt from "react-parallax-tilt";
/* eslint-disable react/no-unescaped-entities */


const Volunteering = () => (
  <div className="Volunteering" id="Volunteering">
    {/*Nothing can be seen here, MUST USE CONTENT*/}
    <div className="content">
      <div className="inner">
        <div className="title">Volunteering</div>
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
        <div className="subtext">
          <p>
            To better understand our user base, we conducted a survey in which
            23 individuals responded. The survey consisted of questions that
            will help us find our users demographic, as well as, questions
            related to the quality of services food applications provide. The
            survey would then be used to create user personas that will also
            help us understand our users feelings toward restaurant
            applications.
          </p>
        </div>
        <div id="custom-grid">
          <div id="item-0">
            <p>
              Respondants were mostly Male aged between 18 and 24. Approximately
              one fifth didn't eat in a restaurant the last month, more than 75%
              ate at least once and 13% responded having eaten more than ten
              times.
            </p>
          </div>
          <div id="item-1">
            <p>
            The results of our survey demonstrated that an overwhelming number
            of users who require special food, such as, halal, gluten free and
            lactose free products, find it difficult to find places which
            provide these services.
            </p>
            <br />
            <br /> 
            <p>
            Almost 60% of the participants reponseded having dietary
            restrictions
            </p>
            <br />
            <br /> 
            <p>Almost a third of all the participants chose restaurants
            reviews as the main factor when looking for a resturant seconded by
            the price of the menu by one fourth of the participants. The other
            main factors to choose a restaurant were the culinary restrictions,
            the distance and the nationality of the food.
            </p>
          </div>
          <div id="item-6">
            <p>
            Secondly, users find it important to support their local restaurants
            rather than big chain franchises. On the other hand, when it comes
            to delivery, the users have no preference to whether or not it is
            delivered directly from the restaurant or by a 3rd party, like
            UberEats for example. They also believe that eating out at
            restaurants is much more important than ordering out, yet these
            results are very close to each other as each option has almost equal
            participation.
            </p>
            <br />
            <br />
            <br />
            <p>
            Thirdly, when it comes to the crowdedness of the user's local
            restaurants, the results show that the restaurants are not full of
            people, rather they are crowded the same day to day. This is an
            important factor because the crowdedness of a restaurant will affect
            the user's decision if they would want to eat at said place.
            </p>
            <br />
            <br />
            <br />
            <p>
            Lastly, a large part of the decision making process for choices in a
            restaurant are the reviews other people give. This will help the
            user make a personal decision on whether or not they want to eat
            there given the past experiences of other people.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);


export default Volunteering;


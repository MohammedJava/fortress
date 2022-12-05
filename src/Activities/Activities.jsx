/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Activities.css";

const Activities = () => (
  <div className="Activities" id="Activities">
    {/*Nothing can be seen here, MUST USE CONTENT*/}
    <div className="content">
      <div className="inner">
        <div className="title">Activities</div>
        <div className="subtitle">Activities</div>
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
            The results of our survey demonstrated that an overwhelming number
            of users who require special food, such as, halal, gluten free and
            lactose free products, find it difficult to find places which
            provide these services. <br />
            <br /> Almost 60% of the participants reponseded having dietary
            restrictions
            <br />
            <br /> Almost a third of all the participants chose restaurants
            reviews as the main factor when looking for a resturant seconded by
            the price of the menu by one fourth of the participants. The other
            main factors to choose a restaurant were the culinary restrictions,
            the distance and the nationality of the food.
          </div>
          <div id="item-6">
            Secondly, users find it important to support their local restaurants
            rather than big chain franchises. On the other hand, when it comes
            to delivery, the users have no preference to whether or not it is
            delivered directly from the restaurant or by a 3rd party, like
            UberEats for example. They also believe that eating out at
            restaurants is much more important than ordering out, yet these
            results are very close to each other as each option has almost equal
            participation.
            <br />
            <br />
            <br />
            Thirdly, when it comes to the crowdedness of the user's local
            restaurants, the results show that the restaurants are not full of
            people, rather they are crowded the same day to day. This is an
            important factor because the crowdedness of a restaurant will affect
            the user's decision if they would want to eat at said place.
            <br />
            <br />
            <br />
            Lastly, a large part of the decision making process for choices in a
            restaurant are the reviews other people give. This will help the
            user make a personal decision on whether or not they want to eat
            there given the past experiences of other people.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Activities;

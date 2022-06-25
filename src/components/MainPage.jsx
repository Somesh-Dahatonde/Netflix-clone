import React from "react";
import Header from "./Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="main-div">
        <Header name="Sign In " />

        <img
          className="background_img"
          src="../asset/image1.png"
          alt="image not rendered"
        />
        {/* // eslint-disable-next-line */}
        <div className="Center-content">
          <h1 className="h1">Unlimited movies, TV shows and more.</h1>
          <p className="h3">Watch anywhere. Cancel anytime.</p>
          <p className="h6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input_div">
            <input type="email" placeholder="Email address" />
            <button className="get-stated-button">Get Started</button>
          </div>
        </div>
      </div>
      <div className="tv-div">
        <div className="tv-content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="tv-img-div">
          <img className="img1" src="../asset/Rectangle.png" />
          <img
            className="img2"
            src="../asset/Netflix India – Watch TV Shows Online, Watch Movies Online_2 1.png"
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;

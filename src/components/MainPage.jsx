import React from "react";
import Header from "./Header";
import QuestionSection from "./QuestionSecton";
import Footer from "./Footer";
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
      <div>
        <div className="tv-div">
          <div className="tv-content">
            <h1>Enjoy on your TV.</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
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

        <div className="moblie-div">
          <div className="mobile-img-div">
            <img className="mobile-img1" src="../asset/Rectangle (1).png" />
            <img className="mobile-img2" src="../asset/Frame.png" />
          </div>
          <div className="mobile-content">
            <h1>Download your shows to watch offline.</h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="pc-div">
          <div className="pc-content">
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="pc-img-div">
            <img className="pc-img1" src="../asset/Rectangle (2).png" />
            <img
              className="pc-img2"
              src="../asset/Netflix India – Watch TV Shows Online, Watch Movies Online 1.png"
            />
          </div>
        </div>
        <div className="pc-div">
          <div className="pc-img-div cartoon-img">
            <img className="cartoon-img1" src="../asset/carttton.png" />
          </div>
          <div className="cartoon-content">
            <h1>Create profiles for children.</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      <div>
        <QuestionSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;

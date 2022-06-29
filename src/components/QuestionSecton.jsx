import React from "react";

const Style = {
  width: "50%",
  height: "40px",
  outline: "none",
  border: "none",
  marginBottom: "20px ",
};

const Question_div = {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  width: "100%",
  justifyContent: "center",
  alignItems: "Center",
};
const QuestionSection = () => {
  return (
    <>
      <div style={Question_div}>
        <h1>Frequently Asked Questions</h1>

        <button
          onClick={() => {
            let x = document.querySelector("text").style.display;
            console.log(x);
            if (x === "none") {
              x.style.display = "block";
              console.log(x);
            } else {
              x.style.display = "none";
              console.log(x);
            }
          }}
          style={{ color: "black" }}
          value=" What is Netflix ? "
        >
          What is Netflix ?
        </button>
        <p id="text" style={{ display: "none" }}>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want, without a single ad – all for one low monthly
          price. There's always something new to discover, and new TV shows and
          movies are added every week!
        </p>
        <select style={Style}>
          <option selected> What is Netflix</option>

          <option>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </option>
        </select>
        <select style={Style}>
          <option selected> What is Netflix</option>

          <option>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </option>
        </select>
        <select style={Style}>
          <option selected> What is Netflix</option>

          <option>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </option>
        </select>
        <select style={Style}>
          <option selected> What is Netflix</option>

          <option>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </option>
        </select>
        <select style={Style}>
          <option selected> What is Netflix</option>

          <option>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </option>
        </select>
        <select style={Style}>
          <option selected> What is Netflix</option>

          <option>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </option>
        </select>
      </div>
    </>
  );
};

export default QuestionSection;

import React from "react";
import "./StoryStyles.css";
import JavaVariety from "../../images/Java-Detour-Variety.jpg";
import JavaOpen from "../../images/Java-Detour-Yes-Were-Open.jpg";
import { Link } from "react-router-dom";

const StoryHero = () => {
  return (
    <div className="story-container">
      <div className="top-part">
        <div className="story-title">
          <h1 style={{ color: "black" }}>
            Why <span>Java</span> Detour?
          </h1>
        </div>
        <div className="images">
          <img src={JavaVariety} alt="" />
          <img src={JavaOpen} alt="" />
        </div>
      </div>
      <div className="text-story">
        <h2 className="text-story-1">Why Java Detour?</h2>
        <p>
          Java Detour is “changing the way America buys coffee”™ by responding
          to the overwhelming demand for gourmet beverages delivered with speed
          and convenience without sacrificing quality!
        </p>
        <p>
          Java Detour sells the world's finest gourmet coffees, fruit smoothies,
          premier blended espresso, iced drinks and select baked goods from
          drive through and in-line facilities that emphasize speed, quality,
          and customer service.
        </p>
      </div>
      <div className="end-text">
        <Link
          style={{
            textDecoration: "none",
          }}
          className="clickContact"
          to="/contactUs"
        >
          <i
            style={{
              color: "orange",
              position: "absolute",
              top: "44rem",
              left: "30rem",
            }}
            class="fa-solid fa-envelope fa-3x "
          ></i>
          <h2 className="clickContactLink">Questions? Contact Us!</h2>
        </Link>
      </div>
    </div>
  );
};

export default StoryHero;

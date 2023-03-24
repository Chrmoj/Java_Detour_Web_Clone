import React from "react";
import AmazingVision from "../../images/Amazing-Vision.jpg";
import JavaVisionStore from "../../images/Java-Detour-Vision-Store.jpg";
import { Link } from "react-router-dom";
import "./CorporateStyles.css";

const CorporateHero = () => {
  return (
    <div className="corporate-container">
      {" "}
      <h1 style={{ color: "black" }}>
        Java <span style={{ color: "orange" }}>Detour's</span> Amazing Vision
      </h1>
      <div className="images-corporate">
        <img src={AmazingVision} alt="" />
        <img src={JavaVisionStore} alt="" />
      </div>
      <div className="text-corporate">
        <h3>
          Java <span style={{ color: "orange" }}>Detour's</span> Amazing Vision
        </h3>
        <p>
          {" "}
          We can only succeed if our franchise holders succeed - that's why
          every day we work hard to make our franchisees more successful.
          Success can only come through delivering amazing products and service
          to our customers - every way we can, every time they visit.
        </p>
        <p>
          We have the organization and investment capability to make Java Detour
          one of the most recognized brands in America - that means huge growth,
          and you can be in on the ground floor.
        </p>
        <div className="contact-corporate-link">
          <Link
            style={{ textDecoration: "none" }}
            className="clickContact"
            to="/contactUs"
          >
            <i class="fa-solid fa-envelope fa-3x"></i>
            <h2 className="clickContactLink">Questions? Contact Us!</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorporateHero;

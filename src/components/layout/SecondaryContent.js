import React from "react";
import "./SecondaryContent.css";
import contentPic from "../../images/contentfoot.jpg";
import { Link } from "react-router-dom";

const SecondaryContent = () => {
  return (
    <div className="container-secondary">
      <div className="boxes">
        <ul>
          <li class="questions-box">
            <Link to="/contactUs" className="link">
              <i class="fa-solid fa-question fa-4x"></i>
              <span className="span-1">Questions?</span>
              <br />
              <span className="span-2">Talk to us</span>
            </Link>
          </li>
          <li class="menu-box">
            <Link to="/menu" className="link">
              <i class="fa-solid fa-mug-hot fa-4x"></i>
              <span className="span-1">Our Menu</span>
              <br />
              <span className="span-2">Food and Drinks</span>
            </Link>
          </li>
          <li class="store-box">
            <Link to="/locations" className="link">
              <i class="fa-solid fa-shop fa-4x"></i>
              <span className="span-1">Find a Store</span>
              <br />
              <span className="span-2">Near you</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="contentPicContainer">
        <Link to="/menu">
          <img className="contentPic" src={contentPic} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SecondaryContent;

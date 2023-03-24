import React from "react";
import "./BeveragesStyles.css";
import Beverages2 from "../../images/beverages2.jpg";
import iconCup from "../../images/icon_cup.png";
import iconFast from "../../images/icon_fast1.png";
import iconHeart from "../../images/icon_heart.png";
import iconWorld from "../../images/icon_world.png";
import iconMightyLeaf from "../../images/icon_mightyleaf1.png";
import { Link } from "react-router-dom";

const BeveragesHero = () => {
  return (
    <div className="beverages">
      <h1 style={{ color: "black" }}>
        Nobody Does It <strong style={{ color: "orange" }}>Better</strong> Than
        Java Detour
      </h1>
      <div className="intro">
        <div className="img-bev">
          <img src={Beverages2} alt="" />
        </div>
        <div className="intro-text">
          <h3>
            Quality, <strong style={{ color: "orange" }}>Convenience</strong> &
            Customer Service
          </h3>
          <Link style={{ textDecoration: "none" }} to="/locations">
            <p>Visit a Store & See For Yourself</p>
          </Link>
        </div>
      </div>
      <div className="statements">
        <img src={iconFast} alt="" />
        <span>Fast Service</span>{" "}
        <p>
          At Java Detour, we serve great coffee fast. While our competitors
          force you to wait, our menu is designed so that any item is ready to
          go in less than a minute while still maintaining the product's full
          quality and excellent taste profile.
        </p>
        <img src={iconCup} alt="" />
        <span>Java Detour Roast and Sourcing </span>{" "}
        <p>
          At Java Detour, we roast our own coffees and espresso. Coffee is
          roasted each week to maintain freshness and quality of flavor.
        </p>
        <img src={iconWorld} alt="" />
        <span>Industry Leading Frozen Beverages </span>{" "}
        <p>
          The company has added to its impressive line of frozen drinks a new
          line of frozen blended cookie drinks that use premium Mrs. Fields
          cookies (in select locations).
        </p>
        <img src={iconHeart} alt="" />
        <span>Coffee Second to None </span>{" "}
        <p>
          Java Detour produces some of the world's best tasting coffees using a
          specialized micro batch roasting process that ensures the perfect
          balance between acidity, aroma, body and flavor.
        </p>
      </div>
      <div className="last-statement">
        <img src={iconMightyLeaf} alt="" />
        <span>Mighty Leaf Tea</span>
        <p>
          In ancient traditions around the world, a freshly brewed pot of whole
          tea leaves is revered as the richest in character. Inspired by this
          legacy, Mighty Leaf crafted the silken Tea Pouch filled with the
          world's finest whole tea leaves, herbs, fruits and flavor too big for
          ordinary tea bags. We partnered with Mighty Leaf Tea to bring you
          extraordinary and unrivaled exotic tea blends.
        </p>
      </div>
    </div>
  );
};

export default BeveragesHero;

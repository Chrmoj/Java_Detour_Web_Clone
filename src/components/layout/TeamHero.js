import React from "react";
import teamMember1 from "../../images/Staci-Herder.png";
import teamMember2 from "../../images/Paul-Klapper-B-W.jpg";
import "./TeamStyles.css";
import { Link } from "react-router-dom";

const TeamHero = () => {
  return (
    <div className="Team-container">
      <h1 style={{ color: "black" }}>Meet Our Team</h1>
      <h3 style={{ paddingTop: "10px" }}>Meet our Team</h3>
      <div className="team-info">
        <h4>The Management Team</h4>
        <div className="first-member">
          <div className="title-1st">
            <h5>Staci Herder</h5>
            <img className="teamMemberPic1" src={teamMember1} alt="" />
          </div>
          <div className="text-1st">
            <p>
              Staci Herder is the Operations Manager for the Java Detour
              Corporate stores. With 20 years of experience in the restaurant
              and quick service industry. Staci's experience ranges from new
              store openings, operating restaurants and acting as a business
              consultant for franchisees such as Taco Bells Yum brands and
              Subway. In her role with Java Detour, Staci works closely with
              store managers and the rest of the operations team to focus on
              helping increase sales and maximize operating margins as well as
              keep our store managers and staff up to date on any changes to
              Health Department standards and Food safety operations.
            </p>
          </div>
        </div>
        <div className="second-member">
          <h5>Camryn Nichols</h5>
          <p>
            Camryn Nichols is Java Detour's Area Support Manager for the
            Northern California region and Bay Area. Camryn also works closely
            with our Marketing Department to develop internet campaigns, grow
            the company's online presence, and plan in-store campaigns and
            seasonal events. Camryn began with Java Detour as a Barista in 2017
            and has grown our original location in Citrus Heights into being one
            of the company's most successful locations, eventually earning his
            position as General Manager and taking his knowledge and passion for
            the company and his team to help grow other locations in the region.
            Prior to his time with Java Detour, Camryn worked as an insurance
            agent in Sacramento, specializing in writing policies and consulting
            for personal and commercial insurance clients in California.”
          </p>
        </div>
        <h4 className="secondTitleBox">The Advisory Board</h4>
        <div className="final-member">
          <h5>Paul F. Klapper</h5>
          <img className="teamMemberPic2" src={teamMember2} alt="" />
          <p>
            Paul F. Klapper managed three private equity funds and has assisted
            in the start-up of many new businesses including Pasqua Coffees of
            San Francisco. After receiving Mr. Klapper's expansion funding,
            Pasqua was later bought by Starbucks Coffee. Mr. Klapper served as a
            director and shareholder of Yorkshire Global Restaurants, which
            owned the brand names of A&W Restaurants, Inc. and Long John
            Silver's Restaurants, Inc. Most recently, Mr. Klapper and his
            affiliated companies, PFK Acquisition Company I, LLC and PFK
            Acquisition Group II, LLC have been involved as principals and
            advisors for the purchase of approximately $500 million in
            institutionally owned properties and companies.
          </p>
        </div>
      </div>
      <div className="team-endClick">
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
  );
};

export default TeamHero;

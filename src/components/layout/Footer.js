import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerCoffeeImg from "../../images/footerCoffeeImg.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About Us</h2>
          <Link className="footer-links" to="/ourStory">
            Our Story
          </Link>
          <Link className="footer-links" to="/meetTeam">
            Meet Our Team
          </Link>
          <Link className="footer-links" to="/corporate">
            Corporate
          </Link>
        </div>
        <div className="footer-heading footer-2">
          <h2>Contact Us</h2>
          <Link className="footer-links" to="/employment">
            Employment
          </Link>
          <Link className="footer-links" to="/contactUs">
            Contact Us
          </Link>
        </div>
        <div className="footer-heading footer-3">
          <h2>Social Media</h2>
          <a
            className="footer-links"
            href="https://www.facebook.com/JavaDetourCorporation"
          >
            <FaFacebook /> FaceBook
          </a>
          <a
            className="footer-links"
            href="https://www.instagram.com/javadetourredding/?hl=en"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            className="footer-links"
            href="https://www.linkedin.com/company/java-detour/?trk=top_nav_home"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <img className="coffeeImg" src={footerCoffeeImg} alt="" />
      </div>
      <p class="copyright">© 2022 Java Detour. All rights reserved.</p>
    </div>
  );
};

export default Footer;

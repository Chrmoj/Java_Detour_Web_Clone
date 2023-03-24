import React from "react";
import Logo from "../../images/java_detour.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/beverages" className="nav-link">
              Our Beverages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/locations" className="nav-link">
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Our Menu
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

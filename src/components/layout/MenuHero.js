import React from "react";
import "./MenuStyles.css";
import topMenuPic from "../../images/menu-1st-pic.jpg";

const MenuHero = () => {
  return (
    <div className="menu-container">
      <div className="top-section">
        <h1 style={{ color: "black" }}>Our Menu</h1>
        <img style={{ paddingBottom: "10px" }} src={topMenuPic} alt="" />
        <p>Prices and selection may vary by location, </p>
        <p>ask your local Java Detour barista for details.</p>
        <br />
        <p>Don't forget to ask about our kid's beverage menu!</p>
        <br />
        <p>
          Nutrition Information about all our products are also listed inside
          the image.
        </p>
      </div>
      <div className="middle-section">
        <p>Java Detour Menu</p>
        <p>Click menu to enlarge</p>
        <a href="https://javadetour.com/wp-content/uploads/2020/08/Jave-Detour-Manu-8-30-2020.jpg">
          <img
            loading="lazy"
            class="aligncenter wp-image-1195"
            src="https://javadetour.com/wp-content/uploads/2020/08/Jave-Detour-Manu-8-30-2020.jpg"
            alt="Menu"
            width="542"
            height="284"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default MenuHero;

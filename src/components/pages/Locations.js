import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../layout/Locations.css";

const Locations = () => {
  return (
    <div className="location-container">
      <Navbar />
      <h1 style={{ color: "black" }}>Our Locations</h1>
      <h2>California</h2>
      <p>* Franchise Stores, independently owned</p>
      <div className="list-of-stores">
        <p
          className="location-header"
          style={{
            textAlign: "center",
          }}
        >
          Locations:{" "}
        </p>
        <br />
        <ul className="store-list">
          <li className="store-list-item">
            Marysville, CA (10th street) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            5:00 pm Monday – Saturday 7:00 am to 5:00 pm Sunday{" "}
          </li>
          <li className="store-list-item">
            Marysville, CA (3rd street) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 6:00 am to 8:00
            pm Sunday
          </li>
          <li className="store-list-item">
            Redding | <span style={{ color: "darkOrange" }}>Store Hours:</span>{" "}
            5:30 am to 9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 7:00
            am to 8:00 pm Sunday
          </li>
          <li className="store-list-item">
            San Rafael |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 6:00 am to 8:00
            pm Sunday
          </li>
          <li className="store-list-item">
            Yuba City |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:30 am to
            9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 6:00 am to 8:00
            pm Sunday
          </li>
          <li className="store-list-item">
            American Canyon |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 6am-4:30pm
            mon-fri 7am-3:30pm Saturday closed Sunday.
          </li>
          <li className="store-list-item">
            Bakersfield |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 7:00 am to
            6:00 pm Monday – Friday 8:00 am to 6:00 pm Saturday 8:00 am to 6:00
            pm Sunday
          </li>
          <li className="store-list-item">
            Chico, CA (Esplanade) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            7:00 pm Monday – Friday 5:30 am to 7:00 pm Saturday 6:00 am to 7:00
            pm Sunday
          </li>
          <li className="store-list-item">
            Citrus Heights |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 6:00 am to
            5:00 pm Monday – Friday 7:00 am to 5:00 pm Saturday 7:00 am to 3:00
            pm Sunday
          </li>
          <li className="store-list-item">
            Concord(Meridian Park) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 6:00 am to
            3:00 pm Monday – Friday 7:00 am to 3:00 pm Saturday 7:00 am to 3:00
            pm Sunday
          </li>
          <li className="store-list-item">
            Red Bluff |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:30 am to
            7:00 pm Monday-Friday 6:00 am to 7:00 pm Saturday 7:00 am to 7:00 pm
            Sunday
          </li>
        </ul>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Locations;

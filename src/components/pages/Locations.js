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
        <ul className="store-list-grid">
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Marysville, CA (10th street)
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            5:00 pm Monday – Saturday 7:00 am to 5:00 pm Sunday{" "}
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=705%2010th%20Street,%20Marysville,%20CA%2095901&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Marysville, CA (3rd street) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 6:00 am to 8:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=515%203rd%20Street,%20Marysville,%20CA%2095901&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Redding | <span style={{ color: "darkOrange" }}>Store Hours:</span>{" "}
            5:30 am to 9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 7:00
            am to 8:00 pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=495%20E.%20Cypress%20Redding,%20CA%2096002&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            San Rafael |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 6:00 am to 8:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=836%202nd%20Street%20San%20Rafael,%20CA%2094901&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Yuba City |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:30 am to
            9:00 pm Monday – Friday 6:00 am to 9:00 pm Saturday 6:00 am to 8:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=554%20Colusa%20Avenue%20Yuba%20City,%20CA%2095991&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            American Canyon |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 6am-4:30pm
            mon-fri 7am-3:30pm Saturday closed Sunday.
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=3939%20Broadway,%20American%20Canyon,%20California&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Bakersfield |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 7:00 am to
            6:00 pm Monday – Friday 8:00 am to 6:00 pm Saturday 8:00 am to 6:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=3623%20California%20Avenue%20Bakersfield,%20CA%2093309&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Chico, CA (Esplanade) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:00 am to
            7:00 pm Monday – Friday 5:30 am to 7:00 pm Saturday 6:00 am to 7:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2519%20Esplanade%20Chico,%20CA%2095926&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Citrus Heights |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 6:00 am to
            5:00 pm Monday – Friday 7:00 am to 5:00 pm Saturday 7:00 am to 3:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=8540%20Auburn%20Blvd%20Citrus%20Heights,%20CA%2095610&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Concord(Meridian Park) |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 6:00 am to
            3:00 pm Monday – Friday 7:00 am to 3:00 pm Saturday 7:00 am to 3:00
            pm Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2301%20Meridian%20Park%20Blvd%20Concord,%20CA%2094520&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
          <li className="store-list-item" style={{ textAlign: "center" }}>
            Red Bluff |{" "}
            <span style={{ color: "darkOrange" }}>Store Hours:</span> 5:30 am to
            7:00 pm Monday-Friday 6:00 am to 7:00 pm Saturday 7:00 am to 7:00 pm
            Sunday
            <iframe
              width="250"
              height="250"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=550%20Main%20Street%20Red%20Bluff,%20CA%2096080&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </li>
        </ul>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Locations;

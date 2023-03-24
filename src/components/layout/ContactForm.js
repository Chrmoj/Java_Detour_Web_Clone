import React from "react";
import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h1 className="form-h1">Contact Us</h1>
        <div className="form-inputs">
          <label className="label-form" htmlFor="name">
            Your Name (Required)
          </label>
          <br />
          <input
            className="input-form"
            type="text"
            placeholder="Enter your name..."
            required
          />
          <br />
          <label className="label-form" htmlFor="email">
            Your Email (Required)
          </label>
          <br />
          <input
            className="input-form"
            type="email"
            placeholder="Enter your email..."
            required
          />
          <br />
          <label className="label-form-2" htmlFor="location">
            Location
          </label>
          <br />
          <select className="input-form">
            <option value="Aubum">Aubum</option>
            <option value="Bakersfield">Bakersfield</option>
            <option value="Chico E">Chico (Esplanade)</option>
            <option value="Chico M">Chico (Mangrove)</option>
            <option value="Citrus Heights">Citrus Heights</option>
            <option value="Hamilton City">Hamilton City</option>
            <option value="Marysville 1st">Marysville (10th Street)</option>
            <option value="Marysville 2nd">Marysville (3rd Street)</option>
            <option value="Red Bluff">Red Bluff</option>
            <option value="Redding">Redding</option>
            <option value="San Francisco">San Francisco</option>
            <option value="San Rafael">San Rafael</option>
            <option value="Yuba City">Yuba City</option>
          </select>
          <br />
          <label className="label-form-3" htmlFor="subject">
            Subject
          </label>
          <br />
          <input className="input-form" type="text" />
          <br />
          <label className="label-form-4" htmlFor="message">
            Your Message
          </label>
          <br />
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button className="btn-submit-form">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

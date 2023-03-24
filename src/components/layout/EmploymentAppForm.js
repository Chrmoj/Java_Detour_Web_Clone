import React from "react";
import "./EmploymentStyles.css";
import { Link } from "react-router-dom";

const EmploymentAppForm = () => {
  return (
    <div className="container-employment">
      <div className="title-employment">
        <h1 style={{ color: "black" }}>Employment Application</h1>
        <h4>You can apply for a position at Java Detour in two ways</h4>
      </div>
      <form className="first-way">
        <p>
          1. Download the application to your computer (
          <a href="https://javadetour.com/wp-content/uploads/2013/08/JD-Employment-Application.pdf">
            Employment Application for Java Detour
          </a>
          ) &nbsp;fill it out and upload it here or return it to your local Java
          Detour.
        </p>
        <div className="application-input">
          <label htmlFor="name-apply">Your Name (required)</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="email-apply">Your Email (required)</label>
          <br />
          <input type="email" />
        </div>
        <div className="upload">
          <p>Upload your completed application</p>
          <br />
          <input type="file" />
        </div>
        <button className="btn-submit-apply">Submit</button>
      </form>
      <form className="second-way">
        <p>2. Fill out the application form below</p>
        <br />
        <p>Personal Information</p>
        <br />
        <label htmlFor="name-apply">Your Name (required)</label>
        <br />
        <input type="text" required />
        <br />
        <label htmlFor="email-apply">Your Email (required)</label>
        <br />
        <input type="email" required />
        <br />
        <label htmlFor="date-apply">Date (required)</label>
        <br />
        <input type="date" required />
        <br />
        <label htmlFor="p-address-apply">Present Address (required)</label>
        <br />
        <input type="text" required />
        <br />
        <label htmlFor="p-address-2-apply">Permanent Address: </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="telephone-apply">Telephone (required) </label>
        <br />
        <input type="text" required />
        <br />
        <label htmlFor="cellphone-apply">Cell Phone </label>
        <br />
        <input type="text" />
        <br />
        <br />
        <p>Employment Desired</p>
        <br />
        <label htmlFor="position-apply">Position</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="store-location-apply">Office/Store Location</label>
        <br />
        <select>
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
        <label htmlFor="date-apply">Date Available</label>
        <br />
        <input type="date" />
        <br />
        <label htmlFor="desired-wage-apply">Desired Wage</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="Availability">Availability</label>
        <br />
        <label htmlFor="full time">Full Time</label>
        <input type="radio" value="Full Time" name="applicant_position" />
        <label htmlFor="part time">Part Time</label>
        <input type="radio" value="Part Time" name="applicant_position" />
        <br />
        <label htmlFor="Employed-Previously">Previously Employed Here?</label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="return_position" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="return_position" />
        <br />
        <label htmlFor="return">
          If yes, from when to when were you employed here
        </label>
        <br />
        <input type="date" />
        <input type="date" />
        <br />
        <label htmlFor="Applied-Previously">
          Have you ever applied for a position at Java Detour before?{" "}
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="before_position" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="before_position" />
        <br />
        <label htmlFor="position-applied">Position applied for</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="office-location">Office/Store Location</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="relatives-work">
          Do you have any relatives who work for Java Detour?{" "}
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="before_position" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="before_position" />
        <br />
        <label htmlFor="yes-relatives">
          If yes, name of person & relationship to you
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="license">
          Do you possess a valid California Driver's License?
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="valid_license" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="valid_license" />
        <br />
        <label htmlFor="hear-position">
          How did you first learn about this position?
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="essential-functions">
          Are you able to perform the essential functions of the job for which
          you are applying, either with or without reasonable accomodation?
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="reasonable" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="reasonable" />
        <br />
        <label htmlFor="no-essential-functions">
          If no, describe the functions that cannot be performed
        </label>
        <br />
        <input type="text" />
        <p>
          (Note: We comply with the ADA and California Fair Employment and
          Housing Act and consider reasonable accomodation measures that may be
          necessary for eligible applicants / employees to perform essential
          functions.)
        </p>
        <br />
        <label htmlFor="convicted-question">
          Have you ever been convicted of a criminal offense (felony or serious
          misdemeanor?)
          <br />
          (Convictions for marijuana-related offenses that are more than two
          years old not be listed)
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="convicted-mj" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="convicted-mj" />
        <br />
        <p>
          If yes, state the nature of the charge, the court and county, the date
          of the conviction, and the disposition of the case
        </p>
        <input type="text" />
        <br />
        <p>
          (Note: No applicant will be denied employment solely on the grounds of
          conviction of a criminal offense. The nature of the offense, date of
          the offense, surrounding circumstances, and the relevance of the
          offense to the position(s) applied for may however, be considered.)
        </p>
        <br />
        <label htmlFor="computer-skills">
          Computer Skills (Please check those that you are proficient in)
        </label>
        <br />
        <label htmlFor="first-c-box">Word</label>
        <input type="checkbox" name="word" id="first-c" />
        <label htmlFor="second-c-box">Excel</label>
        <input type="checkbox" name="excel" id="second-c" />
        <label htmlFor="third-c-box">PowerPoint</label>
        <input type="checkbox" name="powerpoint" id="third-c" />
        <label htmlFor="fourth-c-box">Outlook</label>
        <input type="checkbox" name="outlook" id="fourth-c" />
        <br />
        <label htmlFor="submit-verification">
          Can you, after offer of employment, submit verification of your legal
          right to work in the United States?
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="verify-employ" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="verify-employ" />
        <br />
        <label htmlFor="attendance-requirements">
          Are you able to meet the attendace requirements of the position?
        </label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="attendance-check" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="attendance-check" />
        <br />
        <p>EDUCATION (Include Trade/Business Correspondence School)</p>
        <label htmlFor="high-school-check">
          High School Check the highest grade completed
        </label>
        <br />
        <label htmlFor="9th">9th</label>
        <input type="radio" value="9th" name="grade-level" />
        <label htmlFor="10th">10th</label>
        <input type="radio" value="10th" name="grade-level" />
        <label htmlFor="11th">11th</label>
        <input type="radio" value="11th" name="grade-level" />
        <label htmlFor="12th">12th</label>
        <input type="radio" value="12th" name="grade-level" />
        <br />
        <label htmlFor="high-school-graduated">Graduated?</label>
        <br />
        <label htmlFor="yes">Yes</label>
        <input type="radio" value="yes" name="high-school-graduated" />
        <label htmlFor="no">No</label>
        <input type="radio" value="no" name="high-school-graduated" />
        <br />
        <p>Name of High School & Location (City, State)</p>
        <input type="text" />
        <br />
        <label htmlFor="college-check">
          College or University check the years completed
        </label>
        <br />
        <label htmlFor="1">1</label>
        <input type="radio" value="1" name="c-grade-level" />
        <label htmlFor="2">2</label>
        <input type="radio" value="2" name="c-grade-level" />
        <label htmlFor="3">3</label>
        <input type="radio" value="3" name="c-grade-level" />
        <label htmlFor="4">4</label>
        <input type="radio" value="4" name="c-grade-level" />
        <br />
        <p>
          Name of School & Location (City, State) Please include major and
          degree earned
        </p>
        <input type="text" />
        <br />
        <p>
          Trade, Vocational, Business Correspondence School & Location (City,
          State)
        </p>
        <input type="text" />
        <br />
        <p>SPECIAL SKILLS AND/OR CERTIFICATIONS</p>
        <label htmlFor="skills-certifications">
          Type of Skill/Certification
        </label>
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <Link to="/submittedEmployment">
          <button className="submit-employment-btn">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default EmploymentAppForm;

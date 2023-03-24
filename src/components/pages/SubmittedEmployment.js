import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../layout/SubmittedEmp.css";

const SubmittedEmployment = () => {
  return (
    <>
      <Navbar />
      <div className="container-emp-submission">
        <h2>Thank you for submitting your application</h2>
        <h3>We will review your application</h3>
      </div>
      <Footer />
    </>
  );
};

export default SubmittedEmployment;

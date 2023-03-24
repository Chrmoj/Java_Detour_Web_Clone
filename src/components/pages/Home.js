import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import Footer from "../layout/Footer";
import SecondaryContent from "../layout/SecondaryContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondaryContent />
      <Footer />
    </div>
  );
};

export default Home;

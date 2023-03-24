import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import Employment from "./components/pages/Employment";
import Beverages from "./components/pages/Beverages";
import Story from "./components/pages/Story";
import Team from "./components/pages/Team";
import Corporate from "./components/pages/Corporate";
import Menu from "./components/pages/Menu";
import Coffee from "./components/pages/Coffee";
import Locations from "./components/pages/Locations";
import SubmittedEmployment from "./components/pages/SubmittedEmployment";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/ourStory" element={<Story />} />
        <Route path="/meetTeam" element={<Team />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/submittedEmployment" element={<SubmittedEmployment />} />
      </Routes>
    </>
  );
}

export default App;

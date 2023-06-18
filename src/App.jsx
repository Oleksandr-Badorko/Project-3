import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./components/Sidebar/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

import WatchSection from "./components/SectionOne/WatchSection";
import AboutSection from "./components/SectionTwo/AboutSection";
import NewsSection from "./components/SectionThree/NewsSection";
import TeamSection from "./components/SectionFour/TeamSection";
import SearchSection from "./components/SectionFive/SearchSection";
import ContactSection from "./components/SectionSix/ContactSection";
import "./App.jsx";

function App() {
  return (
    <Router>
      <Head />
      <Sidebar />
      <DarkModeToggle></DarkModeToggle>
      <Routes>
        <Route path="/" element={<WatchSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/featured" element={<NewsSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/search" element={<SearchSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;
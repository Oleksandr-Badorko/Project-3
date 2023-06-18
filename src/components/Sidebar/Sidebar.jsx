import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <input
        type="checkbox"
        id="check"
        checked={isOpen}
        onChange={toggleSidebar}
      />
      <label className="burger" htmlFor="check">
        <i className="ri-arrow-right-s-line" id="btn"></i>
        <i className="ri-arrow-left-s-line" id="cancel"></i>
      </label>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <header>Marvel Menu</header>
        <a href="#/" class="br-bt">
          <i class="ri-home-line"></i>
          <span class="sidebar-span">Main</span>
        </a>
        <a href="#/about" class="br-bt">
          <i class="ri-file-info-line"></i>
          <span class="sidebar-span">About</span>
        </a>
        <a href="#/featured" className="br-bt">
          <i className="ri-article-line"></i>
          <span className="sidebar-span"> News</span>
        </a>
        <a href="#/team" className="br-bt">
          <i className="ri-team-line"></i>
          <span className="sidebar-span">Team</span>
        </a>
        <a href="#/search" className="br-bt">
          <i className="ri-search-line"></i>
          <span className="sidebar-span">Search</span>
        </a>
        <a href="#/contact" className="br-bt">
          <i className="far fa-envelope"></i>
          <span className="sidebar-span">Contact</span>
        </a>
      </div>
    </>
  );
};

export default Sidebar;

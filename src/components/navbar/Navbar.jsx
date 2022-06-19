import React from "react";
import "./navbar.css";
import About from "../about/About.jsx";
const navbar = () => {
  return (
    <div className="Navbar" id="n">
      <div className="Navbar_Content">
        <div className="Headline">DEVELOPER</div>

        <div className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#a">About</a>
          </li>
          <li>
            <a href="#r">Resume</a>
          </li>
          <li>
            <a href="#pl">Projects</a>
          </li>
          <li>
            <a href="#c">Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default navbar;

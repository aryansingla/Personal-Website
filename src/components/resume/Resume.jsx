import React from "react";
import "./resume.css";
import { FaUserGraduate } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdPalette } from "react-icons/md";
import {useState} from 'react';
import Education from "./List/education/Education";
import Work from "./List/work/Work";
import ProjectList from "./List/projectlist/ProjectList";
import Interests from "./List/interests/Interests";
import ProgSkills from "./List/progSkills/ProgSkills";
// import { NavLink } from 'react-router-dom';

const Resume = () => {
  // const [isColor , setIsColor] = useState("#151719");
  const [isActive , setIsActive] = useState("education");

  // const ChangeColor = () => {
  //     (isColor === "#151719" ? setIsColor("#5658dd") : setIsColor("#151719"));
  // };
  return (
    <div id="r">
      <div className="title">
        Resume
        <div className="subtitle">My Formal Bio Details</div>
        <div className="seperatorblob2">
            <div></div>
          </div>
        <div className="seperatorline2"></div>
      </div>
      <div className="content">
        <div className="left">
          <div className="left1">
            <div ><FaUserGraduate   className="icon" /></div>
            <div><FiClock    className="icon" /></div>
            <div><FaLaptopCode   className="icon"/></div>
            <div><GoGraph    className="icon"/></div>
            <div><MdPalette  className="icon" /></div>
          </div>
          <div className="left2">
            <div style={isActive === "education" ? {backgroundColor: "#5658dd"}:{backgroundColor: "whitesmoke"}} onClick = {()=> setIsActive("education")}>Education</div>
            <div style={isActive === "work" ? {backgroundColor: "#5658dd"}:{backgroundColor: "whitesmoke"}} onClick = {()=> setIsActive("work")}>Work History</div>
            <div style={isActive === "prog" ? {backgroundColor : "#5658dd"} : {backgroundColor : "whitesmoke"}}  onClick ={() => setIsActive("prog")}>Programming Skills</div>
            <div style={isActive === "projects" ? {backgroundColor: "#5658dd"} : {backgroundColor: "whitesmoke"}} onClick={()=> setIsActive("projects")}>Projects</div>
            <div style={isActive === "interests" ? {backgroundColor:"#5658dd"} : {backgroundColor:"whitesmoke"}} onClick={()=> setIsActive("interests")}>Interests</div>
          </div>
        </div>
        {isActive === "education" && <div className="right"><Education/></div> }
        {isActive === "work" && <div className="right"><Work/></div> }
        {isActive === "prog" && <div className="right"><ProgSkills/></div> }
        {isActive === "projects" && <div className="right"><ProjectList/></div> }
        {isActive === "interests" && <div className="right"><Interests/></div> }
      </div>
    </div>
  );
};

export default Resume;

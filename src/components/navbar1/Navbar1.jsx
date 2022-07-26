import React from 'react'
import "./navbar1.css";
const Navbar1 = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  return (
    <div className='navbar2' id="n1">
    <nav className="navbar1">
     {/* <!-- LOGO --> */}
     <div className="logo">Developer</div>
     {/* <!-- NAVIGATION MENU --> */}
     <ul className="nav-links">
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div className="menu">
         <li><a href="/">Home</a></li>
         <li><a href="#a">About</a></li>
         <li><a href="#r">Resume</a></li>
         <li><a href="#pl">Projects</a></li>
         <li><a href="#c">Contact</a></li>
       </div>
     </ul>
   </nav>
    </div>
  )
}

export default Navbar1;
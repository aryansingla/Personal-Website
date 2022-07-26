import React from "react";
import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import Navbar1 from "./components/navbar1/Navbar1";
import { ThemeContext } from "./context";
import Resume from "./components/resume/Resume";
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Intro />
       <About />
      <Resume />
      <ProductList />
      <Contact /> 
    </div>
  );
};

export default App;

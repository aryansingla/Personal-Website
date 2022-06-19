import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import { ThemeContext } from "./context";
import Resume from "./components/resume/Resume";
import "./App.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Navbar /> */}
      <Intro />
      {/* <About />
      <Resume />
      <ProductList />
      <Contact /> */}
    </div>
  );
};

export default App;

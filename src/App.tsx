// components
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// styles
import "./App.css";
import { NavLink } from "react-router-dom";
import NavLinks from "./components/NavbarLinks";

function App() {
  return (
    <div className="w-full p-5">
      <Navbar />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;

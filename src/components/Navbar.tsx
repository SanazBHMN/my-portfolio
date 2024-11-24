import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// componets
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex justify-between items-baseline px-[120px] py-10">
      <Logo />
      <div className="flex justify-center items-baseline gap-10 text-primary border border-primary rounded-full px-5 py-4">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button>
        <FontAwesomeIcon icon={faMoon} size="lg" className="text-primary" />
      </button>
    </nav>
  );
}

export default Navbar;

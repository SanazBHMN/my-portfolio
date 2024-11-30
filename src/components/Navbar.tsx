import { useRef, useState } from "react";
// icons
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
// componets
import IconButton from "./IconButton";
import NavbarLinks from "./NavbarLinks";
import Drawer from "./Drawer";
// statics
import Logo from "./Logo";
import useWindowSize from "../hooks/useWindowSize";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const windowSize = useWindowSize();

  // const isMobileSize = useRef(windowSize < 640);
  // const isDesktopSize = useRef(windowSize > 640);

  const handleOpenNavbar = () => {
    setShowNav(true);
  };

  const handleCloseNavbar = () => {
    setShowNav(false);
  };

  return (
    <nav className="flex justify-between items-baseline text-primary">
      <Logo />
      <div className="flex justify-center gap-6">
        <IconButton
          icon={faBars}
          buttonStyle="sm:hidden"
          onButtonClick={handleOpenNavbar}
        />
        {/* TODO: NavbarLinks must stay in the middle when it's displayed */}
        <NavbarLinks />
        {showNav && <Drawer onButtonClick={handleCloseNavbar} />}
        <IconButton icon={faMoon} size="lg" />
      </div>
    </nav>
  );
}

export default Navbar;

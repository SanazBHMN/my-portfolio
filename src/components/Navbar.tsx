// icons
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
// componets
import IconButton from "./IconButton";
import NavbarLinks from "./NavbarLinks";
// statics
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex justify-between items-baseline text-primary">
      <Logo />
      <div className="flex justify-center gap-6">
        <IconButton icon={faBars} style="sm:hidden" />
        {/* TODO: NavbarLinks must stay in the middle when it's displayed */}
        <NavbarLinks />
        <IconButton icon={faMoon} size="lg" />
      </div>
    </nav>
  );
}

export default Navbar;

// components
import NavbarLink from "./NavbarLink";
// statics
import data from "../utils/data.json";

function NavbarLinks() {
  const navLinks = data.navLinks;

  return (
    <ul className="hidden sm:flex justify-center items-baseline gap-10 border border-primary rounded-full px-5 py-4">
      {navLinks.map((link) => (
        <NavbarLink key={link.id} to={link.text} />
      ))}
    </ul>
  );
}

export default NavbarLinks;

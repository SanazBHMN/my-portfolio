// icons
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// components
import NavbarLink from "./NavbarLink";
// statics
import data from "../utils/data.json";
import IconButton from "./IconButton";

interface DrawerProps {
  onButtonClick: () => void;
}

function Drawer({ onButtonClick }: DrawerProps) {
  const navLinks = data.navLinks;

  return (
    <>
      <div className="absolute left-3 right-9 top-[50px] flex flex-col justify-center items-baseline gap-2 capitalize border border-primary rounded-xl px-5 py-4">
        <IconButton icon={faXmark} onButtonClick={onButtonClick} />
        <ul className="flex flex-col justify-center items-baseline gap-6">
          {navLinks.map((link) => (
            <NavbarLink key={link.id} to={link.text} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Drawer;

import { Link } from "react-router-dom";

interface NavbarLinkProps {
  to: string;
}

function NavbarLink({ to }: NavbarLinkProps) {
  return <Link to={`/${to}`}>{to}</Link>;
}

export default NavbarLink;

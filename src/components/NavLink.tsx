import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick, className }) => (
  <Link to={to} onClick={onClick} className={`${className}`}>
    {children}
  </Link>
);

export default NavLink;

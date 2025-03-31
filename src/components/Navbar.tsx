import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../assets/svg/search-icon.svg";
import { ReactComponent as HamburgerIcon } from "../assets/svg/hamburger.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";
import { ReactComponent as Email } from "../assets/svg/email.svg";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";
import { navLinks } from "src/fixtures/NavLinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSubNav = (label: string) => {
    setDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 duration-200 w-full z-[100]  ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="flex bg-primary text-sm text-background2  py-0.5 px-6 sm:px-12 lg:px-20 justify-between">
        <div className="flex gap-2 items-center">
          <Email className="w-4 h-4 text-background2 " />
          <span>info@clinic.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <Phone className="w-4 h-4 text-background2 " />
          <span>(123) 456-7890</span>

          <button
            onClick={toggleSearch}
            aria-label="Search"
            title="search Icon"
            className="hidden cursor-pointer lg:ml-4 lg:flex gap-2 items-center text-background2 hover:text-secondary"
          >
            <SearchIcon className="w-4 h-4 transition" />
            Search
          </button>
        </div>
      </nav>
      <nav className="flex justify-between items-center bg-background2 py-6 px-6 sm:px-12 lg:px-20">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/images/logo.png" alt="Mock Clinic Icon" className="h-10" />
          <span className="font-extrabold text-lg text-primary">
            Mock Clinic
          </span>
        </Link>
        <div className="flex lg:hidden justify-between gap-4">
          <button
            onClick={toggleSearch}
            aria-label="Search"
            title="search Icon"
            className="cursor-pointer"
          >
            <SearchIcon className="w-6 h-6 text-primary  hover:text-secondary transition" />
          </button>
          <div className="h-6 border-l border-primary"></div>
          {menuOpen ? (
            <button
              aria-label="Close"
              title="Close Icon"
              className="cursor-pointer"
            >
              <CloseIcon
                onClick={toggleMenu}
                className="w-6 h-6 text-primary hover:text-secondary transition"
              />
            </button>
          ) : (
            <button
              aria-label="Hamburger Open"
              title="Hamburger Open"
              className="cursor-pointer"
            >
              <HamburgerIcon
                onClick={toggleMenu}
                className="w-6 h-6 text-primary hover:text-secondary transition"
              />
            </button>
          )}
        </div>
        <div className="hidden lg:inline-block w-5/12">
          <div className="lg:flex justify-between">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.sublinks && toggleSubNav(link.label)}
                onMouseLeave={() => link.sublinks && toggleSubNav("")}
              >
                <Link
                  to={link.href}
                  className="text-lg font-semibold hover:text-secondary transition flex items-center"
                >
                  {link.label}
                </Link>
                {link.sublinks && dropdown === link.label && (
                  <div className="absolute pt-7 left-1/2 -translate-x-1/2">
                    <div className="bg-secondary rounded-md shadow-lg z-20">
                      <div className="absolute top-5 bg-secondary left-1/2 -translate-x-1/2 w-8 h-8 rotate-45 z-10"></div>
                      <div className="p-2 relative z-20">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.label}
                            to={sublink.href}
                            className="block text-background2 font-medium rounded-md whitespace-nowrap text-left w-full p-2 hover:bg-stone-50 hover:text-secondary"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex">
          <a
            href="/"
            className="font-semibold bg-primary text-background2 hover:bg-secondary px-4 py-2 rounded hover:shadow-xl transition"
          >
            Patient Portal
          </a>
        </div>
      </nav>
      {menuOpen && <NavMenu closeMenu={closeMenu} />}
      {searchOpen && <NavSearch toggleSearch={toggleSearch} />}
    </div>
  );
};

export default Navbar;

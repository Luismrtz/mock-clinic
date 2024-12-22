import React, { useState, useEffect } from "react";

import { ReactComponent as MinusIcon } from "../assets/svg/minus.svg";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";
import { ReactComponent as Github } from "../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";
import { NavLink } from "react-router-dom";

type NavMenuProps = {
  closeMenu: () => void;
};

const NavMenu = ({ closeMenu }: NavMenuProps) => {
  const [parentLinks, setparentLinks] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleParentLinks = (parentLink: string) => {
    setparentLinks((prev) => ({
      ...prev,
      [parentLink]: !prev[parentLink],
    }));
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 text-primary font-semibold bg-stone-50 max-h-full h-full bg-white z-50 shadow-lg transition-opacity duration-300 
        `}
      >
        <nav className="p-4 space-y-4">
          <a
            onClick={closeMenu}
            href="/doctors"
            className="block pb-2 border-b border-stone-400 hover:text-secondary"
          >
            Doctors
          </a>

          <a
            onClick={closeMenu}
            href="/locations"
            className="block pb-2 border-b border-stone-400 hover:text-secondary"
          >
            Locations
          </a>

          <div className="pb-2 border-b border-stone-400">
            <button
              onClick={() => toggleParentLinks("services")}
              className="flex justify-between w-full hover:text-secondary"
            >
              <span>Services</span>
              <span>
                {parentLinks["services"] ? (
                  <MinusIcon className="w-5 h-5 text-primary " />
                ) : (
                  <PlusIcon className="w-5 h-5 text-primary " />
                )}
              </span>
            </button>
            {parentLinks["services"] && (
              <div className="mt-2 ml-4 space-y-2 ">
                <NavLink
                  onClick={closeMenu}
                  to="/services/allergies"
                  className="block hover:text-secondary"
                >
                  Allergies
                </NavLink>
                <NavLink
                  onClick={closeMenu}
                  to="/services/diabetes"
                  className="block hover:text-secondary"
                >
                  Diabetes
                </NavLink>
                <NavLink
                  onClick={closeMenu}
                  to="/services/xray"
                  className="block hover:text-secondary"
                >
                  X-Ray
                </NavLink>
                <NavLink
                  onClick={closeMenu}
                  to="/services"
                  className="block hover:text-secondary"
                >
                  All Services
                </NavLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleParentLinks("resources")}
              className="flex justify-between w-full hover:text-secondary"
            >
              <span>Resources</span>
              <span>
                {parentLinks["resources"] ? (
                  <MinusIcon className="w-5 h-5 " />
                ) : (
                  <PlusIcon className="w-5 h-5 " />
                )}
              </span>
            </button>
            {parentLinks["resources"] && (
              <div className="mt-2 ml-4 space-y-2">
                <NavLink
                  onClick={closeMenu}
                  to="/resources/schedule"
                  className="block hover:text-secondary"
                >
                  Schedule Appointment
                </NavLink>
                <NavLink
                  onClick={closeMenu}
                  to="/resources/newsletters"
                  className="block hover:text-secondary"
                >
                  Newsletters
                </NavLink>
              </div>
            )}
          </div>
          <div className="flex items-center pt-8">
            <a
              href="https://www.linkedin.com/in/luis-martinez-307742bb/"
              target="_blank"
            >
              <Linkedin className="w-8 h-8 fill-primary text-neutral-100 hover:fill-secondary transition" />
            </a>
            <a href="https://github.com/Luismrtz" target="_blank">
              <Github className="w-6 h-6 fill-primary hover:fill-secondary hover:text-secondary" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavMenu;

import React, { useEffect, useState } from "react";

import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search-icon.svg";

type searchProps = {
  toggleSearch: () => void;
};

const NavSearch = ({ toggleSearch }: searchProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 p-8 z-50 bg-primary/5 backdrop-blur-md">
      <button
        aria-label="Close"
        title="Close Icon"
        className="absolute top-10 right-10 cursor-pointer"
      >
        <CloseIcon
          className=" w-8 h-8 hover:text-secondary transition"
          onClick={toggleSearch}
        />
      </button>

      <div className="flex flex-col p-4 gap-16 mt-24">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pr-12 border border-gray-400 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <SearchIcon className="h-6 w-6" />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-md ">Examples:</h3>
          <ul className="flex flex-col gap-2 list-disc list-inside text-sm">
            <li>John Smith</li>
            <li>Los Angeles Clinic</li>
            <li>Allergies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;

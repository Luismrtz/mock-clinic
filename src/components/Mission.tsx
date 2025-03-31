import React from "react";
import SmallCard from "./SmallCard";

import { missionCards } from "src/fixtures/MissionCards";

const items = [
  "Personalized Healthcare",
  "Convenient Access",
  "Digital Health Tools",
  "Experienced Teams",
];

const Mission = () => {
  return (
    <div className="flex flex-col items-center sm:items-start lg:flex-row lg:justify-between p-6 md:p-12 lg:p-20 sm:gap-10">
      <div className="max-w-4xl">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 mb-6 lg:mb-0">
          <p className="text-secondary font-bold text-xs">~ Our mission</p>
          <h2 className="text-3xl text-primary font-bold">
            Providing Care for You, Anytime, Anywhere
          </h2>
          <p className=" px-12 sm:px-0 text-md font-medium">
            We're committed to delivering quality healthcare services and making
            it easy for you to manage your health.
          </p>
          <ul className="list-none grid sm:grid-cols-2 gap-x-4 gap-y-4 max-w-xl">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-sm font-medium flex items-center gap-2"
              >
                <img
                  src="/images/logo.png"
                  alt="Mock Clinic Icon"
                  className="h-3 w-3"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end gap-4">
        {missionCards.map((item, index) => (
          <div key={index} className="lg:basis-1/4">
            <SmallCard
              to={item.to}
              icon={<item.Icon className="w-16 h-16" />}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;

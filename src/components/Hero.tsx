import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src="/images/child_1280.jpg"
        srcSet="/images/child_640.jpg 640w, /images/child_1280.jpg 1280w"
        sizes="(max-width: 640px) 640px, 1280px"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center sm:items-start items-center text-center sm:text-left px-6 sm:px-12 lg:px-20 text-gray-900">
        <h1 className="text-3xl text-primary sm:text-4xl lg:text-5xl font-bold">
          Your Health, Our Priority
        </h1>
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl max-w-[500px]">
        Comprehensive healthcare at multiple convenient locations.
        </p>
        <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-primary transition">
          Find a doctor
        </button>
      </div>
    </div>
  );
};

export default Hero;

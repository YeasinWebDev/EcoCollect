import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex flex-col items-center justify-center px-6 py-12 text-center bg-green-100 rounded-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlrktntvb/image/upload/v1728747430/hero-bg_hicoqt.jpg')",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto lg:w-[50%]">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 drop-shadow-md font-semibold md:w-[60%] lg:w-full mx-auto">
          Make a Difference: Report, Collect, and Earn Rewards!
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-lg lg:text-xl text-white mb-8 font-semibold md:w-[60%] lg:w-[90%] xl:w-[80%] mx-auto">
          Earn points for reporting and collecting waste while helping keep the
          environment clean.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-x-4">
          <button className="lg:px-6 lg:py-3 px-3 py-2 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition duration-300 hover:scale-105 outline-none">
            Get Started
          </button>
          <button className="lg:px-6 lg:py-3 px-3 py-2 bg-white text-green-600  hover:scale-105 hover:bg-green-600 hover:text-white font-semibold rounded-md shadow-lg transition duration-300">
            Join the Cleanup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

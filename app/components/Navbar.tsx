"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { CiLogin } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList = [
    { label: "How It Works", href: "#howitworks" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Rewards", href: "#rewards" },
    { label: "Impact", href: "#impact" },
    { label: "Why Us", href: "#whyus" },
  ];

  return (
    <div className="flex items-center justify-between mb-5 shadow-xl p-3 rounded-xl">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2">
        <img
          className="w-12"
          src="https://res.cloudinary.com/dlrktntvb/image/upload/v1728742760/logo_back_xgszhu.png"
          alt="EcoCollect logo"
        />
        <h1 className="font-bold text-xl">
          Eco<span className="text-[#37AF45]">Collect</span>
        </h1>
      </div>

      {/* Navigation links (hidden on small screens) */}
      <div className="hidden lg:flex space-x-4">
        {navList.map((item, index) => (
          <a key={index} href={item.href}>
            <button className="p-2 text-gray-600 font-semibold text-sm transition-all duration-300 hover:p-3 hover:bg-green-600 hover:text-white rounded-md border-2 mx-1 border-green-600 hover:border-none">
              {item.label}
            </button>
          </a>
        ))}
      </div>

      {/* Menu Icon (Visible on small screens) */}
      <div className="flex lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-green-600"
        >
          <IoMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu (Slide in/out) */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-[#f3f3f3]  p-8 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Close button inside the menu */}
        <div className="flex justify-between mb-8">
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-10"
              src="https://res.cloudinary.com/dlrktntvb/image/upload/v1728742760/logo_back_xgszhu.png"
              alt="EcoCollect logo"
            />
            <h1 className="font-bold text-xl">
              Eco<span className="text-[#37AF45]">Collect</span>
            </h1>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-green-600"
          >
            <IoClose size={30} />
          </button>
        </div>

        {navList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block p-2 text-gray-600 font-semibold text-lg transition-all duration-300 hover:p-3 hover:bg-green-600 hover:text-white rounded-md mb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        {/* User Login/Profile Section for mobile */}
        <div className="mt-8">
          {user ? (
            <div>{/* Display user avatar or profile info here */}</div>
          ) : (
            <button className="flex items-center justify-center gap-2 bg-green-700 px-6 py-3 rounded-lg text-white font-semibold">
              Login
              <span>
                <CiLogin size={20} />
              </span>
            </button>
          )}
        </div>
      </div>

      {/* User Login/Profile Section for desktop */}
      <div className="hidden lg:block">
        {user ? (
          <div>{/* Display user avatar or profile info here */}</div>
        ) : (
          <button className="flex items-center justify-center gap-2 bg-green-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg text-white font-semibold">
            Login
            <span>
              <CiLogin size={20} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

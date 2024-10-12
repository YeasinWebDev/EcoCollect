'use client'
import { useSession } from "next-auth/react";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const { data: session } = useSession();
    const user = session?.user;
  const navList = [
    { label: "How It Works", href: "#howitworks" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Rewards", href: "#rewards" },
    { label: "Impact", href: "#impact" },
    { label: "Why Us", href: "#whyus" },
    { label: "Newsletter", href: "#newsletter " },
  ];
  return (
    <div>
      <div>
        <img
          className="w-12"
          src="https://res.cloudinary.com/dlrktntvb/image/upload/v1728742760/logo_back_xgszhu.png"
          alt=""
        />
        <h1 className="font-semibold text-xl">EcoCollect</h1>
      </div>
      <div>
        {navList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-2 text-sm text-gray-600 hover:text-gray-800"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div>
        <button className="flex items-center justify-center gap-2 bg-green-700 px-6 py-3 rounded-lg text-white font-semibold">
            Login <span><CiLogin size={20}/></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

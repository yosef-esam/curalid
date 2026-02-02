import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src={"/logo.jpeg"}
              width={70}
              height={50}
              alt="logo"
              className=" rounded-2xl w-17 h-15"
            ></Image>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a
              href="#features"
              className="hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              className="hover:text-gray-900 transition-colors"
            >
              Benefits
            </a>
            <Link
              href="/dashboard"
              className="hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href={"/doctorlogin"}
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-4 py-2"
            >
              Doctor Login
            </Link>
            <Link
              href={"/login"}
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-4 py-2"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className="bg-[#0066FF] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors shadow-sm"
            >
              Create Medical ID
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

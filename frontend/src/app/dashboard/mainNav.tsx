import React from "react";
import { SearchBar } from "./SearchBar";
import { Home, Bell, MessageSquare, User, Menu } from "lucide-react";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md py-2 px-6 flex justify-between items-center z-50">
      {/* Left: Search Bar */}
      <SearchBar />

      {/* Center: Main Navigation Icons */}
      <div className="flex space-x-6">
        <Link href="/">
        <Home className="text-gray-600 hover:text-blue-500 cursor-pointer" size={24} />
        </Link>
        <MessageSquare className="text-gray-600 hover:text-blue-500 cursor-pointer" size={24} />
        <Bell className="text-gray-600 hover:text-blue-500 cursor-pointer" size={24} />
      </div>

      {/* Right: Profile & Menu */}
      <div className="flex items-center space-x-4">
        <User className="text-gray-600 hover:text-blue-500 cursor-pointer" size={24} />
        <Menu className="text-gray-600 hover:text-blue-500 cursor-pointer" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;

"use client"; // Only needed for Next.js App Router

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Write Flow APP</h1>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/about" className="text-white hover:underline">About</Link>
          <Link href="/contact" className="text-white hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

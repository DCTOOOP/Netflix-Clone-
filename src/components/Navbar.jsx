import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 style={{ color: "#dc2626" }} className="text-4xl font-black">NETFLIX</h1>
        <div className="flex gap-4">
          <button className="border border-gray-400 text-white px-3 py-1 text-sm rounded">English</button>
          <button className="bg-red-600 text-white px-6 py-2 rounded font-bold">Sign In</button>
        </div>
      </div>
    </nav>
  );
}
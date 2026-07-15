import React from "react";
import { ChevronDown } from "lucide-react";

const COLUMNS = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Center", "Terms of Use", "Contact Us", "Gift Cards"],
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 sm:py-16">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
        <div className="flex gap-4 mb-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">f</a>
          <a href="#" className="hover:text-white transition-colors">📷</a>
          <a href="#" className="hover:text-white transition-colors">𝕏</a>
          <a href="#" className="hover:text-white transition-colors">▶</a>
        </div>

        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Questions? Call <span className="hover:underline cursor-pointer">000-800-919-1743</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 mb-8">
          {COLUMNS.map((col, i) => (
            <ul key={i} className="flex flex-col gap-3">
              {col.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:underline hover:text-gray-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <button className="flex items-center gap-1 border border-gray-600 text-gray-300 text-sm px-2.5 py-1.5 rounded hover:border-gray-300 transition-colors mb-6">
          <span>English</span>
          <ChevronDown size={14} />
        </button>

        <p className="text-gray-500 text-xs sm:text-sm">
          This is a fan-made clone built for educational purposes only. Netflix is a registered trademark of Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}
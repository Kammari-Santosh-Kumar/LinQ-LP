"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "max-w-[92%] left-[4%] bg-gradient-to-r from-[#0f2027]/95 via-[#203a43]/95 to-[#2c5364]/95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl rounded-[2.5rem] mt-4 translate-y-3 border border-[#00E676]/20"
          : "bg-transparent max-w-full left-0 mt-0 translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#00E676] to-[#00C9FF] bg-clip-text text-transparent select-none">
          LINQ
        </h1>

        <ul className="hidden md:flex gap-8 text-[#7a7b7c] font-medium">
          <li className="hover:text-[#00E676] transition">Home</li>
          <li className="hover:text-[#00C9FF] transition">Features</li>
          <li className="hover:text-[#00E676] transition">About</li>
          <li className="hover:text-[#00C9FF] transition">Contact</li>
        </ul>

        <button className="bg-gradient-to-r from-[#00E676] to-[#00C9FF] text-black font-semibold px-5 py-2 rounded-full hover:shadow-[0_0_20px_#00E676] transition">
          JOIN FOR FREE
        </button>
      </div>
    </nav>
  );
}

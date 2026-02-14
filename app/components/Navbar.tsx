"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Navbar Links (Dynamic)
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Catalog", path: "/catalog" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];


  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        
        {/* ✅ Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Merch <span className="text-[#b88a2d]">Studio</span>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-slate-600 font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="hover:text-[#b88a2d] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ✅ Desktop Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#b88a2d] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a67925] transition-all shadow-md active:scale-95"
        >
          Request a Quote
        </Link>

        {/* ✅ Mobile Hamburger Icon */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-5 shadow-lg">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="block text-slate-700 font-medium hover:text-[#b88a2d] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* ✅ Mobile Button */}
          <Link
            href="/contact"
            className="block text-center bg-[#b88a2d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a67925] transition shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

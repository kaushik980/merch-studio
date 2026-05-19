"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth Scroll Function for Home
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };



  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        {/* ✅ Logo + Brand */}
        <button
          onClick={scrollToHome}
          className="flex items-center gap-3"
        >
          <img
            src="/logo-2.svg"
            alt="Merch Studio Logo"
            className="h-12 w-auto"
          />
        </button>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-medium">
          <button
            onClick={scrollToHome}
            className="text-slate-600 hover:text-[#b88a2d] transition"
          >
            Home
          </button>
          <Link
            href="/catalog/all"
            className="text-slate-600 hover:text-[#b88a2d] transition"
          >
            Catalog
          </Link>
        </nav>

        {/* ✅ Desktop Request Quote Button */}
        <Link
          href="/catalog/all"
          className="hidden md:inline-block bg-[#b88a2d] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a67925] transition-all shadow-md active:scale-95"
        >
          Request a Quote
        </Link>

        {/* ✅ Mobile Hamburger */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-5 shadow-lg">
          <button
            onClick={scrollToHome}
            className="block w-full text-left font-medium text-slate-700 hover:text-[#b88a2d]"
          >
            Home
          </button>
          <Link
            href="/catalog/all"
            className="block w-full text-left font-medium text-slate-700 hover:text-[#b88a2d]"
          >
            Catalog
          </Link>

          {/* ✅ Mobile Request Quote Button */}
          <Link
            href="/catalog/all"
            className="w-full inline-block text-center bg-[#b88a2d] text-white py-3 rounded-full font-semibold hover:bg-[#a67925] transition shadow-md"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

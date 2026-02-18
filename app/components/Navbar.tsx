"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Active section state
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Catalog", href: "catalog" },
    { name: "Process", href: "process" },
    { name: "Contact", href: "contact" },
  ];

  // ✅ ScrollSpy Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth Scroll Function
 const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  const navbar = document.querySelector("header");

  if (section && navbar) {
    const navbarHeight = navbar.offsetHeight;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });

    window.history.pushState(null, "", `${id}`);
    setIsOpen(false);
  }
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
        
        {/* ✅ Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-slate-900"
        >
          Merch <span className="text-[#b88a2d]">Studio</span>
        </button>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-medium">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link.href)}
              className={`transition relative ${
                activeSection === link.href
                  ? "text-[#b88a2d]"
                  : "text-slate-600 hover:text-[#b88a2d]"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {activeSection === link.href && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#b88a2d] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* ✅ Desktop Request Quote Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-block bg-[#b88a2d] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a67925] transition-all shadow-md active:scale-95"
        >
          Request a Quote
        </button>

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
          
          {/* Links */}
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left font-medium ${
                activeSection === link.href
                  ? "text-[#b88a2d]"
                  : "text-slate-700 hover:text-[#b88a2d]"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* ✅ Mobile Request Quote Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-[#b88a2d] text-white py-3 rounded-full font-semibold hover:bg-[#a67925] transition shadow-md"
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}

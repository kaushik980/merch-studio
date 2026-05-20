"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const scrolled = !isHomePage || scrollY > 20;

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Catalog", href: "catalog" },
    { name: "Process", href: "process" },
    { name: "Contact", href: "contact" },
  ];

  // ✅ ScrollSpy Effect (only on home page)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);

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
  }, [isHomePage]);


  // ✅ Smooth Scroll Function
  const scrollToSection = useCallback(
    (id: string) => {
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

        window.history.pushState(null, "", `#${id}`);
      } else if (!isHomePage && id !== "home") {
        // If section doesn't exist on current page and it's not home, navigate to home with anchor
        window.location.href = `/#${id}`;
      } else if (id === "home" && !isHomePage) {
        // Navigate to home if clicking home from another page
        window.location.href = "/";
      }

      setIsOpen(false);
    },
    [isHomePage],
  );

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        {/* ✅ Logo + Brand */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo-2.svg"
            alt="Merch Studio Logo"
            className="h-12 w-auto"
          />
        </button>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-medium">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link.href)}
              className={`transition relative cursor-pointer ${
                activeSection === link.href
                  ? "text-[#b88a2d]"
                  : "text-slate-600 hover:text-[#b88a2d]"
              }`}
            >
              {link.name}

              {activeSection === link.href && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#b88a2d] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* ✅ Desktop Request Quote Button */}
        <Link
          href="/catalog/all"
          className="hidden md:inline-block bg-[#b88a2d] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a67925] transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Request a Quote
        </Link>

        {/* ✅ Mobile Hamburger */}
        <button
          className="md:hidden text-slate-800 cursor-pointer"
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
              className={`block w-full text-left font-medium cursor-pointer ${
                activeSection === link.href
                  ? "text-[#b88a2d]"
                  : "text-slate-700 hover:text-[#b88a2d]"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* ✅ Mobile Request Quote Button */}
          <Link
            href="/catalog/all"
            className="w-full bg-[#b88a2d] text-white py-3 rounded-full font-semibold hover:bg-[#a67925] transition shadow-md cursor-pointer text-center block"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

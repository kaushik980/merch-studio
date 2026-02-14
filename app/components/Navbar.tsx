import Link from "next/link";

export default function Navbar() {
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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

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

        {/* ✅ Button */}
        <Link
          href="/contact"
          className="bg-[#b88a2d] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a67925] transition-all shadow-md active:scale-95"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}

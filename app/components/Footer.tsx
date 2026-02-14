import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  /* ✅ Dynamic Quick Links */
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  /* ✅ Dynamic Services Links */
  const servicesLinks = [
    { name: "Strategy & Consulting", href: "/services" },
    { name: "Product Development", href: "/services" },
    { name: "Digital Transformation", href: "/services" },
    { name: "Data Analytics", href: "/services" },
    { name: "UX/UI Design", href: "/services" },
  ];

  return (
    <footer className="bg-[#201f1f] text-white pt-16 pb-8 px-6">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ================= LEFT COMPANY INFO ================= */}
        <div>
          {/* Logo + Name */}
          <div className="flex items-center gap-3 mb-6">
            {/* Logo Circle */}
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#b88a2d]">
              <img
                src="https://t4.ftcdn.net/jpg/03/74/70/65/360_F_374706548_Abv3bm3s8mFN8XmQgYXwC9VJGyLYaOBb.jpg"
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold leading-snug">
              Company <br /> Logo
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            Innovation and quality in every project. Connecting talent with
            opportunity.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-[#b88a2d]" />
              123 Innovation Way, Tech City
            </p>

            <p className="flex items-center gap-2">
              <Phone size={18} className="text-[#b88a2d]" />
              +1 (555) 123-4567
            </p>

            <p className="flex items-center gap-2">
              <Mail size={18} className="text-[#b88a2d]" />
              info@company.com
            </p>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-[#b88a2d] font-semibold mb-5 uppercase">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= OUR SERVICES ================= */}
        <div>
          <h3 className="text-[#b88a2d] font-semibold mb-5 uppercase">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-300">
            {servicesLinks.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="hover:text-white transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="text-[#b88a2d] font-semibold mb-5 uppercase">
            Stay Connected
          </h3>

          <p className="text-gray-300 mb-4">
            Sign up for our newsletter
          </p>

          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-white text-black mb-4
            focus:ring-2 focus:ring-[#b88a2d] outline-none"
          />

          {/* Button */}
          <button className="w-full bg-[#b88a2d] hover:bg-[#a67925] transition text-white py-2 rounded-md font-medium">
            Subscribe
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-[#b88a2d]">
            <a href="https://linkedin.com" target="_blank">
              <Linkedin className="hover:text-white transition cursor-pointer" />
            </a>

            <a href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-white transition cursor-pointer" />
            </a>

            <a href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-white transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>© 2024 Company Name. All rights reserved.</p>

        <p className="flex gap-4">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

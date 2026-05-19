'use client';

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { postSubscriber } from "@/lib/strapi";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await postSubscriber(email);

      await emailjs.send(
        "service_p2zipif",
        "template_bpdk1ma",
        {
          from_name: "Newsletter",
          from_email: email,
          message: `New subscriber: ${email}`,
        },
        "i4bGyEBc8W9aH8CJV"
      );

      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Subscribe error:", error);
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  /* ✅ Dynamic Quick Links */
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
    <footer className="bg-[#201f1f] text-white pt-16 pb-8 px-6">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ================= LEFT COMPANY INFO ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Merch Studio</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Your trusted partner for custom merchandise solutions. We specialize in creating high-quality branded products for businesses of all sizes.
          </p>

          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[#b88a2d] mt-0.5 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-[#b88a2d] mt-0.5 flex-shrink-0" />
              <span>hello@merchstudio.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-[#b88a2d]">
            <a href="https://www.instagram.com/merchstudio_ss/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Instagram size={20} />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61586489281004" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Facebook size={20} />
            </a>

            <a href="https://www.linkedin.com/company/110199122/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-[#b88a2d] font-semibold mb-5 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#b88a2d] font-semibold mb-5 uppercase">
              Stay Connected
            </h3>

            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter</p>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-black text-sm focus:ring-2 focus:ring-[#b88a2d] outline-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-2 rounded-md font-medium transition text-sm ${
                  status === "success"
                    ? "bg-green-600 text-white"
                    : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-[#b88a2d] hover:bg-[#a67925] text-white disabled:opacity-50"
                }`}
              >
                {status === "loading" ? "Subscribing..." : status === "success" ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>

            {message && (
              <p className={`text-xs mt-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                {message}
              </p>
            )}
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
    </>
  );
}

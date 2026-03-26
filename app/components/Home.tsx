"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const images = ["/WEBSITE-BANNER1.png", "/WEBSITE-BANNER2.png", "/WEBSITE-BANNER3.png"];

  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#f7efe3]">

      {/* ===================== */}
      {/* ✅ TOP BANNER ONLY */}
      {/* ===================== */}
    <section className="w-full px-0">
  <div className="relative w-full h-50 md:h-80 lg:h-105 overflow-hidden rounded-none md:rounded-xl">
    
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="Banner"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          index === current ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10"></div>

    {/* Dots */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {images.map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i === current ? "bg-white" : "bg-white/50"
          }`}
        ></div>
      ))}
    </div>
  </div>
</section>

      {/* ===================== */}
      {/* ✅ BELOW CONTENT */}
      {/* ===================== */}
     <section className="flex items-center justify-center px-6 py-20">
  <div className="max-w-3xl w-full text-center">
    
    {/* Heading */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2b1a12] leading-tight">
      Thoughtful Gifting Impactful Branding
    </h1>

    {/* Description */}
    <p className="mt-6 text-lg text-[#4a3a32] leading-relaxed">
      From employee engagement to client appreciation, we create premium,
      customizable solutions that bring your brand to life.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      
      <button className="px-6 py-3 rounded-xl bg-[#b88a2d] text-white font-medium shadow-md hover:bg-[#a67925] transition">
        Explore Our Catalog
      </button>

      <a
        href="https://www.youtube.com/watch?v=C1NI7BwpZ-M"
        target="_blank"
      >
        <button className="px-6 py-3 rounded-xl border border-[#2b1a12] text-[#2b1a12] font-medium hover:bg-white transition">
          How It Works
        </button>
      </a>
    </div>

  </div>
</section>

    </main>
  );
}
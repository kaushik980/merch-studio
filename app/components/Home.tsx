"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Banner, getStrapiImageUrl } from "@/lib/strapi";

export default function Home({ banners: initialBanners }: { banners: Banner[] }) {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <main className="bg-[#f7efe3]">
      {/* ===================== */}
      {/* ✅ TOP BANNER ONLY */}
      {/* ===================== */}
      <section className="w-full px-0">
        <div className="relative w-full h-50 md:h-80 lg:h-105 overflow-hidden rounded-none md:rounded-xl">
          {banners.length > 0 ? (
            <>
              {banners.map((banner, index) => (
                <img
                  key={banner.id}
                  src={getStrapiImageUrl(banner.image?.url) || '/WEBSITE-BANNER1.png'}
                  alt={banner.image?.alternativeText || `Banner ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {banners.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === current ? "bg-white" : "bg-white/50"
                    }`}
                  ></div>
                ))}
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">No banners available</p>
            </div>
          )}
        </div>
      </section>

     
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
            <Link
              href="/catalog/all"
              className="px-6 py-3 rounded-xl bg-[#b88a2d] text-white hover:bg-[#a67925] transition inline-block"
            >
              Explore Our Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

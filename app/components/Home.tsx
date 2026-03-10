import Image from "next/image";
import img1 from "../../public/img1.png";

export default function Home() {
  return (
    <main className="bg-[#f7efe3] flex items-center justify-center px-6 py-12">
      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#2b1a12] leading-tight">
            Elevating Corporate <br />
            Connections Through <br />
            Thoughtful Gifting & <br />
            Apparel
          </h1>

          <p className="mt-6 text-lg text-[#4a3a32] max-w-xl leading-relaxed">
            Premium, customizable solutions for employee engagement, client
            appreciation, and brand building.
          </p>

          <div className="mt-8 flex flex-row flex-nowrap gap-3 justify-center lg:justify-start">
            <button className="px-6 py-3 rounded-xl bg-[#b88a2d] text-white font-medium shadow-md hover:bg-[#a67925] transition">
              Explore Our Catalog
            </button>

            <a
              href="https://www.youtube.com/watch?v=C1NI7BwpZ-M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-xl border border-[#2b1a12] text-[#2b1a12] font-medium hover:bg-white transition">
                How It Works
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
       <div className="relative w-full h-65 md:h-85 lg:h-105 rounded-3xl overflow-hidden shadow-xl border border-[#e5d5c5] bg-[#F4F2EF] flex items-center justify-center">
  <img
    src="/WEBSITE BANNER.png"
    alt="Corporate gifting"
    className="max-h-full max-w-full object-contain"
  />
</div>

      </section>
    </main>
  );
}
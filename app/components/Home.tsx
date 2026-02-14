import Image from "../../public/img1.png";

export default function Home() {
  return (
    <main className=" bg-[#f7efe3] flex items-center justify-center px-6 py-12">
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

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-[#b88a2d] text-white font-medium shadow-md hover:bg-[#a67925] transition">
              Explore Our Catalog
            </button>

            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#e5d5c5]">
            <img
              src="/img1.png"
              alt="Corporate gifting"
              className="w-full h-105 object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

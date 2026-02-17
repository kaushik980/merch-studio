import { Handshake, Lightbulb, Leaf } from "lucide-react";

export default function StoryPage() {
  const values = [
    {
      title: "Integrity & Trust",
      desc: "Building strong, honest partnerships is at the core of everything we do.",
      icon: <Handshake size={50} className="text-[#7a4a1f]" />,
    },
    {
      title: "Innovation & Quality",
      desc: "We constantly seek new ideas and ensure the highest standards in our products.",
      icon: <Lightbulb size={50} className="text-[#7a4a1f]" />,
    },
    {
      title: "Sustainability & Responsibility",
      desc: "We are committed to ethical sourcing and minimizing our environmental impact.",
      icon: <Leaf size={50} className="text-[#7a4a1f]" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7efe3] to-[#f2d8b5] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* ================= OUR STORY ================= */}
        <h1 className="text-5xl font-bold text-[#2b1a12] mb-6 font-serif">
          Our Story
        </h1>

        <p className="text-lg text-[#3b2a1d] leading-relaxed max-w-4xl mx-auto">
          Founded on a passion for quality and connection, we began as a small
          team dedicated to reimagining corporate gifting. Today, we are proud
          to be a trusted partner for businesses worldwide, crafting memorable
          experiences through curated apparel and thoughtful gifts. Our journey
          is defined by a commitment to excellence and building lasting
          relationships.
        </p>

        {/* Divider Line */}
        <div className="border-t border-[#b88a2d] mt-16 mb-16"></div>

        {/* ================= OUR VALUES ================= */}
        <h2 className="text-5xl font-bold text-[#2b1a12] mb-16 font-serif">
          Our Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4 font-serif">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#3b2a1d] text-lg leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

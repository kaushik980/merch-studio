import Image from "next/image";

export default function TeamPage() {
  /* ================= TEAM DATA ================= */
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Desai",
      role: "Head of Design",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Operations Lead",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  /* ================= BRAND LOGOS ================= */
  const brands = [
    {
      name: "TATA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
      name: "HDFC Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7efe3] to-[#f2d8b5] px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* ================= OUR TEAM ================= */}
        <h1 className="text-5xl font-extrabold text-[#2b1a12] mb-16">
          Our Team
        </h1>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-24">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              {/* Circle Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#2b1a12]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#4a3a32] text-lg">{member.role}</p>
            </div>
          ))}
        </div>

        {/* ================= TRUSTED BRANDS ================= */}
        <h2 className="text-5xl font-extrabold text-[#2b1a12] mb-14">
          Our Trusted Brands
        </h2>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

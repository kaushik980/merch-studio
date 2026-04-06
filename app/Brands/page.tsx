import Image from "next/image";

export default function TeamPage() {

  // ✅ Your 24 logos (3 rows × 8)
  const brands = [
    "brands/1-ADM-AGRO-LOGO.svg", "/brands/2- ADM AIRTEL PAYMENTS BANK  LOGO.svg", "/brands/3- ADM AMAZOM LOGO.svg", "/brands/4- APOLLO TYRE  LOGO.svg",
    "/brands/5- BUCHER HYDRAULICS  LOGO.svg", "/brands/6- BUCHER CINEPOLIS  LOGO.svg",
     "/brands/7- DP WORLD  LOGO.svg", "/brands/8- EXIDE  LOGO.svg",

    "/brands/9- REHAU  LOGO.svg", "/brands/10- SPLUNK A CISCO  LOGO.svg", "/brands/11- PHILIPS  LOGO.svg", "/brands/12- HINDWARE  LOGO.svg", "/brands/13- HONDA POWER  LOGO.svg", "/brands/14- IENERGIZER  LOGO.svg", "/brands/15- KINETIC GREEN  LOGO.svg", "/brands/16- CHAAYOS  LOGO.svg",

    "/brands/16- KOHLER  LOGO.png", "/brands/17- TELEPERFORMANCE   LOGO.svg", "/brands/18- NIPPON PAINT  LOGO.svg", "/brands/19- WURTH  LOGO.svg",
    "/brands/20- EICHER  LOGO.svg", "/brands/21- UNIGLOBE TRAVEL  LOGO.svg", "/brands/22- VALVOLINE  LOGO.svg", "/brands/23- SUTDDS  LOGO.svg",

    "/brands/25- SAEL  LOGO.svg", "/brands/26- NUVOCO  LOGO.svg", "/brands/27- shree cement  LOGO.svg","/brands/28- SRF LOGO.png", "/brands/29- SAFEXPRESS LOGO.svg", "/brands/  LOGO.svg", "/brands/  LOGO.svg", "/brands/ LOGO.svg",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7efe3] to-[#f2d8b5] px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2b1a12] mb-14">
          Our Trusted Brands
        </h2>

        {/* ✅ Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
          {brands.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Image
  src={logo}
  alt={`Brand ${index + 1}`}
  width={120}
  height={60}
  className="object-contain w-full h-12"
/>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
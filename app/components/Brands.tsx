import Image from "next/image";
import { getBrands, getStrapiImageUrl } from "@/lib/strapi";

export default async function Brands() {
  const brands = await getBrands();

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7efe3] to-[#f2d8b5] px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2b1a12] mb-14">
          Our Trusted Brands
        </h2>

        {/* ✅ Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition h-24"
            >
              {brand.logo?.url ? (
                <Image
                  src={getStrapiImageUrl(brand.logo.url) || ''}
                  alt={brand.logo.alternativeText || brand.name}
                  width={120}
                  height={60}
                  className="object-contain w-full h-full"
                />
              ) : (
                <p className="text-sm font-semibold text-center text-gray-700">{brand.name}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
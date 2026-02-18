import Image from "next/image";
import Link from "next/link";

export default function CatalogPage() {
  const products = [
    {
      name: "Premium Branded Hoodie",
      material: "100% Organic Cotton",
      moq: "50 units",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sustainable Office Kit",
      material: "Bamboo & Recycled Paper",
      moq: "100 units",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Eco-Friendly Tote Bag",
      material: "Reusable Canvas Fabric",
      moq: "200 units",
      image:
        "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Custom Ceramic Mug",
      material: "High Quality Ceramic",
      moq: "75 units",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fdf8f1] px-6 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-[#3b2a1a] mb-3">
          Our Collection
        </h1>

        <p className="text-gray-600 mb-6">
          Curated gifts and premium apparel designed for branding. Minimum Order
          Quantities apply.
        </p>

        <a
  href="https://drive.google.com/drive/folders/1hov4tZYx-A1vs4HNTpGR6Vd0To2eyjF5"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#b88a2d] hover:bg-[#a67925] text-white px-6 py-3 rounded-full font-medium shadow-md transition inline-block"
>
  Download PDF Catalog
</a>

      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition"
            >
              {/* ✅ Same Size Image */}
              <div className="p-6">
                <div className="relative w-full h-52 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  Material: {item.material}
                </p>

                <p className="text-sm text-gray-600">MOQ: {item.moq}</p>

                <button className="mt-5 w-full bg-[#b88a2d] hover:bg-[#a67925] text-white py-2 rounded-full font-medium transition">
                  ADD TO QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-end mt-10">
          <Link
            href="/catalog/all"
            className="bg-[#b88a2d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#a67925] transition shadow-md"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}

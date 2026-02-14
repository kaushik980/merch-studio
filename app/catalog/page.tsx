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
        "https://images.unsplash.com/photo-1719622144274-2408ecf6f6d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VzdGFpbmFibGUlMjBPZmZpY2UlMjBLaXR8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-[#fdf8f1] px-6 py-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-[#3b2a1a] mb-3">
            Our Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Curated gifts and premium apparel designed for branding. Minimum
            Order Quantities apply.
          </p>

          {/* Download Button */}
          <button className="bg-[#b88a2d] hover:bg-[#a67925] text-white px-6 py-3 rounded-full font-medium shadow-md transition">
            Download PDF Catalog
          </button>
        </div>

        {/* Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Filters */}
          <aside className="bg-transparent space-y-8">
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4 flex justify-between">
                Categories <span>⌄</span>
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-black cursor-pointer">Apparel</li>
                <li className="hover:text-black cursor-pointer">
                  Gifting Suites
                </li>
                <li className="hover:text-black cursor-pointer">
                  Eco-Conscious
                </li>
              </ul>
            </div>

            <hr />

            {/* MOQ Range */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800 flex justify-between">
                MOQ Range <span>⌄</span>
              </h3>
            </div>

            <hr />

            {/* Budget */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800 flex justify-between">
                Budget Per Unit <span>⌄</span>
              </h3>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
              >
                {/* Image */}
                <div className="p-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover mx-auto"
                  />
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-600 mt-2">
                    Material: {item.material} | MOQ: {item.moq}
                  </p>

                  {/* Button */}
                  <button className="mt-5 w-full bg-[#b88a2d] hover:bg-[#a67925] text-white py-2 rounded-full font-medium transition">
                    ADD TO QUOTE
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-12">
              <Link
                href="/catalog/all"
                className="bg-[#b88a2d] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a67925] transition shadow-lg"
              >
                View More Products →
              </Link>
            </div>
          </div>

          {/* Floating Inquiry Button */}
          {/* <div className="bottom-6 right-6">
  <button className="flex items-center gap-2 bg-[#b88a2d] hover:bg-[#a67925] text-white px-5 py-3 rounded-full shadow-lg font-medium">
    ✉ Inquiry List (2 Items)
  </button>
</div> */}
        </div>
      </section>
    </>
  );
}

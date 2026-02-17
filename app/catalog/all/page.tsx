import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function FullCatalogPage() {
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
     "/Sustainable Office Kit.jpg",
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
    {
      name: "Luxury Gift Box Set",
      material: "Recycled Packaging",
      moq: "30 units",
      image: "/Luxury Gift Box Set.jpg",
    },
    {
      name: "Corporate Notebook & Pen",
      material: "Leather Finish + Metal Pen",
      moq: "150 units",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#fdf8f1] px-6 py-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-5xl font-bold text-[#3b2a1a] mb-3">
            Full Product Catalog
          </h1>

          <p className="text-gray-600 mb-6">
            Explore our complete merchandise collection for your brand.
          </p>

          {/* Back Button */}
          <Link
            href="/#catalog"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition shadow-md"
          >
            ← Back to Preview
          </Link>
        </div>

        {/* Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="space-y-8">
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

            <h3 className="font-semibold text-lg text-gray-800 flex justify-between">
              MOQ Range <span>⌄</span>
            </h3>

            <hr />

            <h3 className="font-semibold text-lg text-gray-800 flex justify-between">
              Budget Per Unit <span>⌄</span>
            </h3>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition"
              >
                {/* ✅ Fixed Image Box */}
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
        </div>

        {/* Floating Inquiry Button */}
        <div className="fixed bottom-6 right-6">
          <button className="flex items-center gap-2 bg-[#b88a2d] hover:bg-[#a67925] text-white px-5 py-3 rounded-full shadow-lg font-medium">
            ✉ Inquiry List (0 Items)
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

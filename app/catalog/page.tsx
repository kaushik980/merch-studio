import Image from "next/image";
import Link from "next/link";
import { getProducts, getStrapiImageUrl } from "@/lib/strapi";
import AddToQuoteButton from "@/app/components/AddToQuoteButton";

export default async function CatalogPage() {
  const allProducts = await getProducts();
  const products = allProducts.slice(0, 3);

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
  href="https://drive.google.com/drive/folders/1LyqN9QRn2tBjLjUb1KqhSVU1Lm1c_-MX"
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
              {/* ✅ Square Image */}
              <div className="p-6">
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                  {item.image?.url && (
                    <Image
                      src={getStrapiImageUrl(item.image.url) || ''}
                      alt={item.image.alternativeText || item.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  {!item.image?.url && (
                    <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                      No image
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  {item.name}
                </h2>

                {/* <p className="text-sm text-gray-600 mt-2">
                  Material: {item.material}
                </p>

                <p className="text-sm text-gray-600">MOQ: {item.moq}</p> */}

                <div className="mt-5">
                  <AddToQuoteButton product={item} />
                </div>
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

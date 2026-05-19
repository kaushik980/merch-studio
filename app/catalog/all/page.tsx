'use client';

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl, Product } from "@/lib/strapi";
import AddToQuoteButton from "@/app/components/AddToQuoteButton";
import FloatingQuoteButton from "@/app/components/FloatingQuoteButton";
import { useState, useEffect } from "react";

export default function FullCatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=image`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
          }
        );
        const data = await res.json();
        const mappedProducts = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          material: item.material,
          moq: item.moq,
          category: item.category,
          featured: item.featured,
          image: item.image
            ? {
                url: Array.isArray(item.image) ? item.image[0]?.url : item.image.url,
                alternativeText: Array.isArray(item.image)
                  ? item.image[0]?.alternativeText
                  : item.image.alternativeText,
              }
            : null,
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ] as string[];

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
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Categories
              </h3>

              <ul className="space-y-3">
                <li
                  onClick={() => setSelectedCategory("")}
                  className={`cursor-pointer font-medium transition ${
                    selectedCategory === ""
                      ? "text-[#b88a2d]"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  All Products
                </li>
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer font-medium transition ${
                      selectedCategory === category
                        ? "text-[#b88a2d]"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition"
                  >
                    {/* Fixed Image Box */}
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

                      <div className="mt-5">
                        <AddToQuoteButton product={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Floating Quote Button */}
        <FloatingQuoteButton />
      </section>

      <Footer />
    </>
  );
}

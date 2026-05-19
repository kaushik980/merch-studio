import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import CatalogPage from "./catalog/page";
import Footer from "./components/Footer";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Brands from "./components/Brands";
import { getBanners } from "@/lib/strapi";

export default async function Page() {
  const banners = await getBanners();

  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <HomeSection banners={banners} />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CATALOG */}
      <section id="catalog" className="scroll-mt-20">
        <CatalogPage />
      </section>

      {/* BRANDS */}
      <section id="brands">
        <Brands />
      </section>

      {/* PROCESS */}
      <section id="process">
        <Process />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

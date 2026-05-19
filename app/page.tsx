import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import CatalogPage from "./catalog/page";
import ProcessPage from "./process/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";
import About from "./about/page";
import TeamPage from "./Brands/page";
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
      {/* <section id="catalog">
        <CatalogPage />
      </section> */}
      <section id="catalog" className="scroll-mt-20">
  <CatalogPage />
</section>

    <section >
        <TeamPage />
      </section>
 {/* PROCESS */}
      <section id="process">
        <ProcessPage />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactPage />
      </section>

      <Footer />
    </>
  );
}

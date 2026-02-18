import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import CatalogPage from "./catalog/page";
import ProcessPage from "./process/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";
import About from "./about/page";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <HomeSection />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CATALOG */}
      <section id="catalog">
        <CatalogPage />
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

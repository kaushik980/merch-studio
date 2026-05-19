import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import Footer from "./components/Footer";
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

      <Footer />
    </>
  );
}

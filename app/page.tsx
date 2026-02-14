import Navbar from "./components/Navbar";
import HeroSection from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./contact/page";
import Team from "./team/page";
import StoryPage from "./storyPage/page";
import Process from "./process/page";
import Catalog from "./catalog/page";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StoryPage/>
      <Process />
      <Catalog />

      <Team/>
      <Contact />
      <Footer />
    </main>
  );
}

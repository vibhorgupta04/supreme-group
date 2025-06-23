import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";


export default function Home() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
      <SolutionSection />
      <ContactUs />
      </main>
      <Footer />
    </>
  );
}

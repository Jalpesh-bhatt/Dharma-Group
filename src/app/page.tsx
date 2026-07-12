import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BusinessSection from "@/components/BusinessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <BusinessSection />
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
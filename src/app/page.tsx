import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BusinessSection from "@/components/BusinessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-100 via-red-50 to-white dark:from-[#120606] dark:via-[#1b0808] dark:to-[#2b0b0b] transition-colors duration-500">
      <Navbar />

      <Hero />

      <Stats />

      <BusinessSection />

      <WhyChooseUs />

      <CTA />

      <Footer />
    </main>
  );
}
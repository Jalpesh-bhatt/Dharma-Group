import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Handshake, Globe, Building2 } from "lucide-react";

const partners = [
  {
    name: "ABC Industries",
    category: "Strategic Partner",
    logo: "/images/partners/partner1.png",
  },
  {
    name: "Global Tech Solutions",
    category: "Technology Partner",
    logo: "/images/partners/partner2.png",
  },
  {
    name: "Prime Infrastructure",
    category: "Business Partner",
    logo: "/images/partners/partner3.png",
  },
  {
    name: "Vision Enterprises",
    category: "Corporate Client",
    logo: "/images/partners/partner4.png",
  },
  {
    name: "Future Energy",
    category: "Energy Partner",
    logo: "/images/partners/partner5.png",
  },
  {
    name: "Skyline Projects",
    category: "Construction Partner",
    logo: "/images/partners/partner6.png",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909] transition-colors duration-500">

        {/* Hero */}
        <section className="relative py-28 text-center">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10" />

          <div className="relative mx-auto max-w-5xl px-6">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Partnerships
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Partners & Clients
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Long-term relationships built on trust, quality and shared success.
            </p>

          </div>

        </section>

        {/* Highlights */}
        <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg dark:bg-zinc-900">
            <Handshake className="mx-auto text-red-700" size={42} />
            <h3 className="mt-5 text-2xl font-bold dark:text-white">
              Trusted Partnerships
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg dark:bg-zinc-900">
            <Building2 className="mx-auto text-red-700" size={42} />
            <h3 className="mt-5 text-2xl font-bold dark:text-white">
              Corporate Clients
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg dark:bg-zinc-900">
            <Globe className="mx-auto text-red-700" size={42} />
            <h3 className="mt-5 text-2xl font-bold dark:text-white">
              Global Network
            </h3>
          </div>

        </section>

        {/* Partner Grid */}
        <section className="py-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">

            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
              >
                <div className="relative mx-auto mb-6 h-20 w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {partner.name}
                </h3>

                <p className="mt-3 text-red-700 dark:text-red-400">
                  {partner.category}
                </p>
              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
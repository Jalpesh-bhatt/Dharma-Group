import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const businesses = [
  {
    name: "Pingal Prakash",
    icon: "📰",
    description:
      "Publishing and media solutions focused on quality content and trusted journalism.",
    color: "from-red-600 to-red-800",
  },
  {
    name: "Narela Corporation",
    icon: "🏗️",
    description:
      "Infrastructure and construction projects delivering sustainable development.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Fabclen Services",
    icon: "✨",
    description:
      "Professional facility management and industrial cleaning solutions.",
    color: "from-emerald-600 to-green-700",
  },
  {
    name: "i Sugar",
    icon: "🍬",
    description:
      "Food and consumer products built with quality and customer satisfaction.",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Dharma Events",
    icon: "🎪",
    description:
      "Corporate events, exhibitions and premium event management services.",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "Gujarat Essential Goods",
    icon: "🌾",
    description:
      "Wholesale and distribution of essential products across Gujarat.",
    color: "from-lime-600 to-green-700",
  },
];

export default function BusinessesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-gray-900 transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white">

        {/* Hero */}
        <section className="relative overflow-hidden py-32">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10 dark:from-red-900/20" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Our Businesses
            </span>

            <h1 className="mt-8 text-5xl font-black md:text-7xl">
              Diverse Businesses.
              <span className="block text-red-700 dark:text-red-400">
                One Vision.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Dharma Group operates across multiple industries, delivering
              innovation, reliability and sustainable growth.
            </p>

          </div>
        </section>

        {/* Business Cards */}
        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">

            {businesses.map((business) => (
              <div
                key={business.name}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900/20 dark:bg-zinc-900"
              >

                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${business.color} p-8 text-white`}
                >
                  <div className="text-6xl">{business.icon}</div>

                  <h2 className="mt-6 text-3xl font-bold">
                    {business.name}
                  </h2>
                </div>

                {/* Content */}
                <div className="p-8">

                  <p className="leading-7 text-gray-600 dark:text-gray-400">
                    {business.description}
                  </p>

                  <Link
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-red-700 hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
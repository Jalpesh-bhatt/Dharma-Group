import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Eye, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-gray-900 transition-colors duration-500 dark:bg-red-950 dark:text-white">

        {/* Hero */}
        <section className="relative overflow-hidden py-32">

          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-700/10 dark:from-red-900/30" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              About Dharma Group
            </span>

            <h1 className="mt-8 text-5xl font-black md:text-7xl">
              Building Trust.
              <span className="block text-red-700 dark:text-red-400">
                Creating Tomorrow.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Dharma Group is a diversified business conglomerate committed
              to excellence, innovation, and sustainable growth across
              multiple industries.
            </p>

          </div>

        </section>

        {/* Company Story */}

        <section className="py-24">

          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

            <div>

              <h2 className="text-4xl font-black">
                Our Story
              </h2>

              <p className="mt-8 leading-8 text-gray-600 dark:text-gray-400">
                Founded with a vision of creating businesses that positively
                impact society, Dharma Group has grown into a trusted name
                across multiple industries.

                <br /><br />

                Our commitment to innovation, integrity and customer
                satisfaction has enabled us to build long-term partnerships
                while delivering sustainable value.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-zinc-900">

              <Building2 className="h-14 w-14 text-red-700" />

              <h3 className="mt-6 text-3xl font-bold">
                25+ Years of Excellence
              </h3>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                Serving industries with innovation, trust,
                and sustainable growth while continuously
                expanding our business portfolio.
              </p>

            </div>

          </div>

        </section>

        {/* Mission Vision */}

        <section className="py-24 bg-white dark:bg-[#111111]">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl border p-10 shadow-lg dark:border-red-900/30">

                <Target className="h-14 w-14 text-red-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  Mission
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  Deliver innovative business solutions that
                  create value for customers, employees,
                  partners and society.
                </p>

              </div>

              <div className="rounded-3xl border p-10 shadow-lg dark:border-red-900/30">

                <Eye className="h-14 w-14 text-red-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  Vision
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  Become one of India's most respected
                  diversified business groups known for
                  trust and innovation.
                </p>

              </div>

              <div className="rounded-3xl border p-10 shadow-lg dark:border-red-900/30">

                <Award className="h-14 w-14 text-red-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  Values
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  Integrity, Innovation, Excellence,
                  Teamwork and Customer Satisfaction
                  define every decision we make.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
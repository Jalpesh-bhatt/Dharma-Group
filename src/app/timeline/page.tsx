import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const timeline = [
  {
    year: "1998",
    title: "Foundation",
    description:
      "Dharma Group was established with a vision of creating trusted and sustainable businesses.",
  },
  {
    year: "2005",
    title: "Business Expansion",
    description:
      "Expanded operations into multiple industries and strengthened our national presence.",
  },
  {
    year: "2012",
    title: "Technology Adoption",
    description:
      "Invested in modern technology and digital transformation across the organization.",
  },
  {
    year: "2018",
    title: "CSR Initiatives",
    description:
      "Launched community development and social responsibility programs.",
  },
  {
    year: "2026",
    title: "Future Ready",
    description:
      "Continuing to innovate while building a sustainable future for generations to come.",
  },
];

export default function TimelinePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500">

        {/* Hero */}
        <section className="relative py-28 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10" />

          <div className="relative mx-auto max-w-5xl px-6">
            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Our Journey
            </span>

            <h1 className="mt-8 text-5xl font-black text-gray-900 dark:text-white md:text-7xl">
              Company Timeline
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              A journey built on trust, innovation, and continuous growth.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative border-l-4 border-red-700 pl-10">

              {timeline.map((item) => (
                <div key={item.year} className="relative mb-14">

                  <div className="absolute -left-[53px] flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white shadow-lg">
                    <Calendar size={18} />
                  </div>

                  <span className="text-sm font-bold uppercase tracking-widest text-red-700">
                    {item.year}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Trophy,
  Medal,
  Award,
  Star,
} from "lucide-react";

const awards = [
  {
    year: "2025",
    title: "Best Corporate Excellence Award",
    organization: "National Business Council",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Innovation Leadership Award",
    organization: "Indian Industry Association",
    icon: Award,
  },
  {
    year: "2021",
    title: "CSR Excellence Award",
    organization: "Corporate Responsibility Forum",
    icon: Medal,
  },
  {
    year: "2019",
    title: "Trusted Business Brand",
    organization: "Business Today",
    icon: Star,
  },
];

export default function AwardsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909]">

        {/* Hero */}
        <section className="py-28 text-center">

          <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Awards & Recognition
          </span>

          <h1 className="mt-8 text-5xl font-black text-gray-900 dark:text-white md:text-7xl">
            Excellence Recognized
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Our commitment to quality, innovation and integrity has earned
            recognition from leading organizations.
          </p>

        </section>

        {/* Awards */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl space-y-8 px-6">

            {awards.map((award) => {
              const Icon = award.icon;

              return (
                <div
                  key={award.title}
                  className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 dark:bg-zinc-900"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                      <Icon className="text-red-700 dark:text-red-400" size={40} />
                    </div>

                    <div className="flex-1">
                      <span className="text-sm font-bold uppercase tracking-widest text-red-700">
                        {award.year}
                      </span>

                      <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                        {award.title}
                      </h2>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Presented by <strong>{award.organization}</strong>
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
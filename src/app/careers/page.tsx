import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Briefcase,
  Users,
  Award,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const jobs = [
  {
    title: "Business Development Manager",
    location: "Ahmedabad, Gujarat",
    type: "Full Time",
  },
  {
    title: "Marketing Executive",
    location: "Mumbai, Maharashtra",
    type: "Full Time",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    type: "Hybrid",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Great Team",
    desc: "Work with experienced professionals in a collaborative environment.",
  },
  {
    icon: Award,
    title: "Career Growth",
    desc: "Continuous learning, mentorship and leadership opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Professional development and technical skill enhancement.",
  },
  {
    icon: Briefcase,
    title: "Work Culture",
    desc: "Innovation, flexibility and employee-first workplace.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500">

        {/* Hero */}
        <section className="relative overflow-hidden py-28">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Careers
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Build Your
              <span className="block text-red-700 dark:text-red-400">
                Future With Us
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Join Dharma Group and become part of an organization driven by
              innovation, integrity and excellence.
            </p>

          </div>

        </section>

        {/* Benefits */}
        <section className="pb-20">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-lg hover:-translate-y-2 transition"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                    <Icon className="text-red-700 dark:text-red-400" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>

        </section>

        {/* Open Positions */}
        <section className="pb-24">

          <div className="mx-auto max-w-5xl px-6">

            <h2 className="mb-10 text-center text-4xl font-black text-gray-900 dark:text-white">
              Current Openings
            </h2>

            <div className="space-y-6">

              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-lg md:flex-row md:items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {job.location}
                    </p>

                    <span className="mt-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">
                      {job.type}
                    </span>
                  </div>

                  <button className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800">
                    Apply Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="pb-28">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-[40px] bg-gradient-to-r from-red-700 to-red-900 p-12 text-center text-white">

              <h2 className="text-4xl font-black">
                Don't See a Suitable Role?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-red-100">
                We're always looking for talented individuals. Send us your
                resume and we'll contact you when a suitable opportunity arises.
              </p>

              <button className="mt-10 rounded-full bg-white px-8 py-4 font-bold text-red-700 transition hover:scale-105">
                Submit Resume
              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
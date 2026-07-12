import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Dharma Group Announces New Business Expansion",
    date: "July 2026",
    image: "/images/news/news1.jpg",
    excerpt:
      "Expanding into new markets with a focus on innovation and sustainable growth.",
  },
  {
    id: 2,
    title: "Corporate Social Responsibility Initiative",
    date: "June 2026",
    image: "/images/news/news2.jpg",
    excerpt:
      "Supporting education, healthcare and community development through impactful CSR programs.",
  },
  {
    id: 3,
    title: "Annual Leadership Summit 2026",
    date: "May 2026",
    image: "/images/news/news3.jpg",
    excerpt:
      "Leaders from across the group gathered to discuss future strategies and innovation.",
  },
  {
    id: 4,
    title: "New Manufacturing Facility Inaugurated",
    date: "April 2026",
    image: "/images/news/news4.jpg",
    excerpt:
      "A state-of-the-art facility designed to improve production efficiency and sustainability.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500">

        {/* Hero */}
        <section className="relative py-28 text-center">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10 dark:from-red-900/20" />

          <div className="relative mx-auto max-w-6xl px-6">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              News & Media
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Latest
              <span className="block text-red-700 dark:text-red-400">
                Updates
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Stay informed with the latest announcements, milestones,
              events and achievements from Dharma Group.
            </p>

          </div>

        </section>

        {/* News Grid */}
        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

            {news.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <div className="flex items-center gap-2 text-sm text-red-700">

                    <CalendarDays size={16} />

                    {item.date}

                  </div>

                  <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/news/${item.id}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-red-700 hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
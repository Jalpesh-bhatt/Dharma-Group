import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

export default function NewsDetailsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500">

        {/* Hero Image */}

        <section className="relative h-[500px]">

          <Image
            src="/images/news/news1.jpg"
            alt="News"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center">

            <div className="mx-auto max-w-6xl px-6">

              <span className="inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-2 text-sm font-semibold text-white">

                <CalendarDays size={16} />

                July 2026

              </span>

              <h1 className="mt-8 max-w-4xl text-5xl font-black text-white md:text-7xl">
                Dharma Group Announces
                New Business Expansion
              </h1>

            </div>

          </div>

        </section>

        {/* Article */}

        <section className="py-24">

          <div className="mx-auto max-w-4xl px-6">

            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-red-700 font-semibold hover:gap-3 transition"
            >
              <ArrowLeft size={18} />
              Back to News
            </Link>

            <article className="prose prose-lg dark:prose-invert max-w-none mt-10">

              <p>
                Dharma Group proudly announces its latest expansion into new
                markets, strengthening its commitment to innovation,
                sustainability, and long-term value creation.
              </p>

              <p>
                This expansion represents another important milestone in the
                company's journey of building trusted businesses that positively
                impact customers, employees, partners, and communities.
              </p>

              <h2>Future Vision</h2>

              <p>
                Our objective is to continue delivering excellence while
                embracing modern technologies, operational efficiency and
                sustainable business practices.
              </p>

              <blockquote>
                "Success is built through trust, innovation and people."
              </blockquote>

              <h2>Looking Ahead</h2>

              <p>
                Dharma Group remains committed to expanding responsibly while
                maintaining the highest standards of quality, integrity and
                customer satisfaction.
              </p>

            </article>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function ChairmanPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-gray-900 dark:bg-[#0b0b0b] dark:text-white transition-colors duration-500">

        {/* Hero */}
        <section className="relative overflow-hidden py-28">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10 dark:from-red-900/20" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Leadership
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black">
              Chairman's
              <span className="block text-red-700 dark:text-red-400">
                Message
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Leading with integrity, innovation and a long-term vision for
              sustainable growth.
            </p>

          </div>

        </section>

        {/* Message */}

        <section className="pb-24">

          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center px-6">

            {/* Image */}

            <div className="relative">

              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-red-600 to-red-800 blur-2xl opacity-20" />

              <Image
                src="/images/chairman.jpg"
                alt="Chairman"
                width={600}
                height={700}
                className="relative rounded-[40px] object-cover shadow-2xl"
              />

            </div>

            {/* Content */}

            <div>

              <Quote
                size={60}
                className="text-red-700 mb-8"
              />

              <h2 className="text-4xl font-black">
                A Message From
                <span className="block text-red-700">
                  Our Chairman
                </span>
              </h2>

              <p className="mt-8 leading-8 text-gray-600 dark:text-gray-400">

                At Dharma Group, our journey has always been driven by
                purpose, trust, and an unwavering commitment to excellence.

                <br /><br />

                Every business we build reflects our belief that success is
                measured not only by financial growth but also by the value
                we create for our customers, employees, partners, and society.

                <br /><br />

                We continue to embrace innovation while staying grounded in
                the principles that have guided us since our inception.
                Together, we look forward to creating a future filled with
                opportunity, sustainability and shared prosperity.

              </p>

              <div className="mt-12">

                <h3 className="text-2xl font-bold">
                  Mr. Your Name
                </h3>

                <p className="text-red-700 font-semibold">
                  Chairman & Managing Director
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Vision */}

        <section className="pb-28">

          <div className="mx-auto max-w-6xl px-6">

            <div className="rounded-[40px] bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-12 md:p-20 text-center shadow-2xl">

              <h2 className="text-4xl md:text-5xl font-black text-white">
                Our Vision
              </h2>

              <p className="mt-8 text-lg leading-8 text-red-100 max-w-4xl mx-auto">
                To become one of India's most respected diversified business
                groups by creating sustainable value, fostering innovation,
                empowering people and contributing positively to society.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
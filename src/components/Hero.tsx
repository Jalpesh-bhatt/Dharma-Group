"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-red-50 to-white dark:from-zinc-950 dark:via-[#140707] dark:to-black">

      {/* Background Glow */}
      <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex rounded-full bg-red-100 dark:bg-red-900/40 px-5 py-2 text-sm font-semibold text-red-700 dark:text-red-300">
              SINCE 1998 • BUILDING TRUST FOR 25+ YEARS
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">

              Building
              <br />

              <span className="bg-gradient-to-r from-red-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Business Excellence
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">

              Dharma Group is a diversified corporate house committed to
              innovation, integrity and sustainable growth across multiple industries.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/businesses"
                className="rounded-full bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition"
              >
                Explore Businesses
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-8 py-4 font-semibold hover:shadow-xl transition"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

            </div>

          </motion.div>

          {/* Right Side Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/hero.jpg"
                alt="Dharma Group"
                width={900}
                height={700}
                priority
                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
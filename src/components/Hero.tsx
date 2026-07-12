"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Dharma Group"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30 dark:from-black/80 dark:via-black/65 dark:to-black/40" />

      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-red-500/20 blur-[150px]" />

      {/* Content */}
      {/* Added pt-32 to create space between the navbar and the content */}
      <div className="relative z-10 flex h-full items-center pt-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-md">
              Building Excellence Since 1998
            </span>

        

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
              Dharma Group is a diversified business conglomerate committed to
              innovation, integrity and sustainable growth across multiple
              industries.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/businesses"
                className="inline-flex items-center justify-center rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-800"
              >
                Explore Businesses
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
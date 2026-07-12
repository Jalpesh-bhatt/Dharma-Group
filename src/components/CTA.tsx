"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}
     <Image
  src="/images/cta-bg.jpg"
  alt="Dharma Group"
  fill
  sizes="100vw"
  className="object-cover"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/90 to-black/80" />

      {/* Decorative Glow */}
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-red-500/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-red-700/20 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-white backdrop-blur">
            Let's Build Together
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Ready to Partner With
            <span className="block text-red-300">
              Dharma Group?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-red-100">
            Whether you're looking for strategic partnerships,
            investment opportunities or business collaboration,
            we're ready to create long-term value together.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-red-700 transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>

            <Link
              href="tel:+911234567890"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="mr-2" size={18} />
              Call Now
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
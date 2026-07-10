"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500 p-12 text-center shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Let's Build Something Great Together
          </h2>

          <p className="mt-6 text-red-100 text-lg max-w-2xl mx-auto">
            Connect with Dharma Group and discover opportunities
            for partnerships, investments and innovation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-white text-red-700 px-8 py-4 font-bold hover:scale-105 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/businesses"
              className="rounded-full border border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-red-700 transition flex items-center gap-2"
            >
              Explore Businesses
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
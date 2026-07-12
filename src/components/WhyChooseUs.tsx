"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  Globe2,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We build lasting relationships through honesty, transparency and ethical business practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly adopting new technologies and ideas to create future-ready businesses.",
  },
  {
    icon: Globe2,
    title: "Global Vision",
    description:
      "Delivering world-class solutions while creating sustainable value for every stakeholder.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Our commitment to quality and customer satisfaction has earned long-term trust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-950">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-red-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-red-700 dark:bg-red-900/40 dark:text-red-300">
            Why Dharma Group
          </span>

          <h2 className="mt-6 text-4xl font-black text-zinc-900 dark:text-white md:text-5xl">
            Built on Trust.
            <br />
            Driven by Excellence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Every business under Dharma Group shares one common goal —
            creating long-term value through innovation, responsibility and
            sustainable growth.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-red-200 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-all group-hover:bg-red-700 dark:bg-red-900/30">

                  <Icon
                    size={30}
                    className="text-red-700 group-hover:text-white dark:text-red-400"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">

          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition hover:bg-red-800"
          >
            Learn More About Us
            <ArrowRight className="ml-2" size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}
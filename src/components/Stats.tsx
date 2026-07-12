"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Globe2,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "25+",
    label: "Business Verticals",
  },
  {
    icon: Users,
    number: "15K+",
    label: "Employees",
  },
  {
    icon: Globe2,
    number: "12+",
    label: "Countries Served",
  },
  {
    icon: Award,
    number: "30+",
    label: "Years of Excellence",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-24 dark:bg-zinc-950">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/60 via-transparent to-transparent dark:from-red-950/10" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="rounded-full bg-red-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-red-700 dark:bg-red-900/40 dark:text-red-300">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Numbers That Speak
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            For over two decades, Dharma Group has built trusted
            businesses focused on innovation, quality and sustainable
            growth.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .6,
                }}
                className="group rounded-3xl border border-zinc-200 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-red-200 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition group-hover:bg-red-700 dark:bg-red-900/30">

                  <Icon
                    className="text-red-700 group-hover:text-white dark:text-red-400"
                    size={32}
                  />

                </div>

                <h3 className="mt-8 text-5xl font-black text-zinc-900 dark:text-white">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg font-medium text-zinc-600 dark:text-zinc-400">
                  {item.label}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
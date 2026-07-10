"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Newspaper,
  Sparkles,
  Candy,
  CalendarDays,
  Wheat,
} from "lucide-react";

const businesses = [
  {
    title: "Pingal Prakash",
    icon: Newspaper,
    gradient: "from-red-500 via-pink-500 to-orange-500",
  },
  {
    title: "Narela Corporation",
    icon: Building2,
    gradient: "from-blue-500 via-cyan-500 to-indigo-500",
  },
  {
    title: "Fabclen Services",
    icon: Sparkles,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },
  {
    title: "i Sugar",
    icon: Candy,
    gradient: "from-yellow-400 via-orange-400 to-red-500",
  },
  {
    title: "Dharma Events",
    icon: CalendarDays,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Gujarat Essential Goods",
    icon: Wheat,
    gradient: "from-lime-500 via-green-500 to-emerald-600",
  },
];

export default function BusinessSection() {
  return (
    <section className="py-28 bg-white dark:bg-[#090909]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-bold">
            OUR BUSINESSES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Diverse Businesses.
            <br />
            One Vision.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Dharma Group operates across multiple industries, delivering
            innovation, trust and excellence through every business.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {businesses.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 blur-2xl transition duration-500 group-hover:opacity-40`}
                />

                {/* Card */}
                <div className="relative rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl p-6 text-center shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">

                  {/* Icon */}
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white shadow-xl transition duration-500 group-hover:scale-110`}
                  >
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-6 text-sm font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
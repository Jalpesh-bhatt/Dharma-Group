"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "25+",
    label: "Years Experience",
  },
  {
    value: "6",
    label: "Business Verticals",
  },
  {
    value: "1000+",
    label: "Employees",
  },
  {
    value: "5000+",
    label: "Happy Clients",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-[#180505]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-xl text-center"
            >
              <h2 className="text-5xl font-black text-red-600">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import { Award, ShieldCheck, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "25+ Years of Excellence",
    description:
      "A legacy of innovation, trust and business excellence across industries.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description:
      "Building long-term relationships through transparency and commitment.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Delivering future-ready solutions with cutting-edge technology.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Creating lasting value through exceptional customer experiences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50 dark:from-[#120404] dark:to-[#200707]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-red-600 font-bold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            We Build More Than Businesses
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Every venture reflects our commitment to quality, innovation and sustainable growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
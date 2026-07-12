"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const businesses = [
  {
    title: "Agro Tech & Farming",
    description:
      "Developing world-class infrastructure with innovation and quality.",
    image: "/images/business/infrastructure.jpg",
  },
  {
    title: "Evengt Management",
    description:
      "Creating premium residential and commercial developments.",
    image: "/images/business/Events.jpg",
  },
  {
    title: "Essential Goods",
    description:
      "Powering sustainable growth through modern energy solutions.",
    image: "/images/business/Essentialgoods.jpg",
  },
  {
    title: "Services",
    description:
      "Delivering cutting-edge digital transformation services.",
    image: "/images/business/Services.jpg",
  },
];

export default function BusinessSection() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-900">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-red-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-red-700 dark:bg-red-900/40 dark:text-red-300">
            Our Businesses
          </span>

          <h2 className="mt-6 text-4xl font-black text-zinc-900 dark:text-white md:text-5xl">
            Diverse Businesses,
            <br />
            One Vision
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Dharma Group operates across multiple industries, creating long-term
            value through innovation, integrity, and excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {businesses.map((business, index) => (
            <motion.div
              key={business.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl dark:bg-zinc-950"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
               <Image 
  src={business.image}
  alt={business.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white">
                  {business.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">

                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                  {business.description}
                </p>

                <Link
                  href="/businesses"
                  className="mt-8 inline-flex items-center font-semibold text-red-700 transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight
                    className="ml-2 transition"
                    size={18}
                  />
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
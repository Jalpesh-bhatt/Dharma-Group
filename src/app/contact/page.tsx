"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909] pt-32 pb-24 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Contact Us
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Let's Start a <span className="text-red-700 dark:text-red-400">Conversation</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Our Location", desc: "South Bopal, Ahmedabad, Gujarat" },
                { icon: Mail, title: "Email Us", desc: "contact@dharmagroup.com" },
                { icon: Phone, title: "Call Us", desc: "+91 9727670007" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-gray-100 dark:border-zinc-800">
                  <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-2xl">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form className="p-8 md:p-10 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-red-600 outline-none dark:text-white" />
                <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-red-600 outline-none dark:text-white" />
              </div>
              <textarea placeholder="Your Message" rows={5} className="w-full p-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-red-600 outline-none dark:text-white" />
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-red-700 py-4 text-white font-bold hover:bg-red-800 transition">
                <Send size={18} /> Send Message
              </button>
            </form>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
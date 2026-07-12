"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Businesses", href: "/businesses" },
    { title: "Gallery", href: "/Gallery" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 w-full z-50 px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-full ${
            scrolled
              ? "bg-white/90 dark:bg-zinc-900/80 shadow-2xl backdrop-blur-xl border border-white/20"
              : "bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/10"
          }`}
        >
          <div className="h-20 px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="text-3xl font-black tracking-tight">
                <span className="text-red-700 dark:text-red-400">
                  DHARMA
                </span>
              </h1>
              <p className="text-[11px] uppercase tracking-[0.55em] text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition">
                GROUP
              </p>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              {links.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="relative font-semibold text-gray-700 dark:text-gray-200 hover:text-red-600 transition group"
                >
                  {item.title}
                  <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <Link
                href="/portal"
                className="hidden md:flex rounded-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white px-6 py-3 font-semibold shadow-xl transition-all hover:scale-105"
              >
                Portal
              </Link>

              <button
                onClick={() => setOpen(true)}
                // Added text-gray-900 dark:text-white to ensure hamburger lines are visible
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition text-gray-900 dark:text-white"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
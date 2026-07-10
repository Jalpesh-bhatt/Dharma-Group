"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Businesses", href: "/businesses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 z-50 h-screen w-80 bg-white dark:bg-zinc-900 shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b dark:border-zinc-800">
              <div>
                <h2 className="text-xl font-black text-red-700 dark:text-red-400">
                  DHARMA
                </h2>
                <p className="text-xs tracking-[0.3em] text-gray-500">
                  GROUP
                </p>
              </div>

              <button onClick={onClose}>
                <X size={28} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="block text-lg font-semibold hover:text-red-600 transition"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t dark:border-zinc-800">
                <ThemeToggle />
              </div>

              <Link
                href="/portal"
                onClick={onClose}
                className="mt-6 block rounded-full bg-red-700 text-center py-3 text-white font-bold hover:bg-red-800 transition"
              >
                Portal
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
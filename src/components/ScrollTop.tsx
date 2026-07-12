"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = () => setVisible(window.scrollY > 300);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 z-50 rounded-full bg-red-700 p-4 text-white shadow-xl transition hover:scale-110 hover:bg-red-800"
    >
      <ArrowUp size={20} />
    </button>
  );
}
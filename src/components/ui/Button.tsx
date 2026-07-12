"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const classes =
    "inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 hover:scale-105 " +
    className;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
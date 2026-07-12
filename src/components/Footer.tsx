"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const companyLinks = [
    "About",
    "Leadership",
    "Businesses",
    "CSR",
    "Careers",
  ];

  const resourceLinks = [
    "News",
    "Gallery",
    "Contact",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-black text-white">
              DHARMA
            </h2>

            <p className="mt-1 text-sm uppercase tracking-[0.35em] text-red-400">
              GROUP
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Dharma Group is a diversified business conglomerate
              committed to innovation, quality and sustainable growth
              across multiple industries.
            </p>

          </div>

          {/* Company Links */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition hover:text-red-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition hover:text-red-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin
                  className="mt-1 text-red-500"
                  size={20}
                />

                <p>
                  Dharma Group Headquarters
                  <br />
                  Ahmedabad, Gujarat, India
                </p>

              </div>

              <div className="flex gap-3">

                <Phone
                  className="text-red-500"
                  size={20}
                />

                <p>+91 98765 43210</p>

              </div>

              <div className="flex gap-3">

                <Mail
                  className="text-red-500"
                  size={20}
                />

                <p>info@dharmagroup.com</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-zinc-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Dharma Group.
            All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-red-700 transition hover:bg-red-800"
          >
            <ChevronUp
              className="text-white"
              size={20}
            />
          </button>

        </div>

      </div>

    </footer>
  );
}
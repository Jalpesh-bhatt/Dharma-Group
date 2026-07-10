import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-black text-white">
            DHARMA
          </h2>

          <p className="tracking-[0.3em] text-sm text-red-400">
            GROUP
          </p>

          <p className="mt-6 text-gray-400">
            Building values, delivering excellence and creating
            sustainable businesses for tomorrow.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">Company</h3>

          <div className="space-y-3">
            <Link href="/about" className="block hover:text-white">
              About
            </Link>

            <Link href="/businesses" className="block hover:text-white">
              Businesses
            </Link>

            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">Contact</h3>

          <p>Ahmedabad, Gujarat</p>
          <p>info@dharmagroup.com</p>
          <p>+91 98765 43210</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">
            Follow Us
          </h3>

          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dharma Group. All Rights Reserved.
      </div>

    </footer>
  );
}
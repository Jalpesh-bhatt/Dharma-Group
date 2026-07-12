import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
// Ensure 'Linkedin' is spelled exactly like this:
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Mr. John Smith",
    role: "Chairman & Managing Director",
    image: "/images/leadership/chairman.jpg",
  },
  {
    name: "Mrs. Jane Doe",
    role: "Chief Executive Officer",
    image: "/images/leadership/ceo.jpg",
  },
  {
    name: "Mr. David Wilson",
    role: "Chief Financial Officer",
    image: "/images/leadership/cfo.jpg",
  },
  {
    name: "Mr. Michael Brown",
    role: "Chief Operating Officer",
    image: "/images/leadership/coo.jpg",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909]">

        {/* Hero */}
        <section className="py-28 text-center">

          <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Leadership
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
            Meet Our Leadership
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Visionary leaders driving innovation, growth and excellence.
          </p>

        </section>

        {/* Team */}

        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-3 dark:bg-zinc-900"
              >

                <div className="relative h-80">

                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6 text-center">

                  <h3 className="text-2xl font-bold dark:text-white">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-red-700 font-semibold">
                    {leader.role}
                  </p>

                  <div className="mt-6 flex justify-center gap-4">

                    <button className="rounded-full bg-red-100 p-3 hover:bg-red-700 hover:text-white transition">
                      <Linkedin size={18} />
                    </button>

                    <button className="rounded-full bg-red-100 p-3 hover:bg-red-700 hover:text-white transition">
                      <Mail size={18} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
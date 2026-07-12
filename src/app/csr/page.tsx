import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Heart,
  GraduationCap,
  Trees,
  HeartHandshake,
} from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Supporting schools, scholarships, digital education and skill development for future generations.",
    image: "/images/csr/education.jpg",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Organizing health camps, blood donation drives and medical awareness programs.",
    image: "/images/csr/healthcare.jpg",
  },
  {
    icon: Trees,
    title: "Environment",
    description:
      "Tree plantation, renewable energy initiatives and sustainable environmental practices.",
    image: "/images/csr/environment.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Community Development",
    description:
      "Empowering rural communities through livelihood, sanitation and infrastructure projects.",
    image: "/images/csr/community.jpg",
  },
];

export default function CSRPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909] transition-colors duration-500">

        {/* Hero */}

        <section className="relative py-28">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Corporate Social Responsibility
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Creating
              <span className="block text-red-700 dark:text-red-400">
                Lasting Impact
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              We believe that sustainable business growth goes hand in hand
              with social responsibility and community development.
            </p>

          </div>

        </section>

        {/* CSR Cards */}

        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

            {initiatives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 dark:bg-zinc-900"
                >
                  <div className="relative h-72">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="p-8">

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                      <Icon
                        className="text-red-700 dark:text-red-400"
                        size={28}
                      />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* Quote */}

        <section className="pb-28">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-[40px] bg-gradient-to-r from-red-700 to-red-900 p-16 text-center">

              <h2 className="text-4xl font-black text-white">
                "Our responsibility extends beyond business."
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg text-red-100">
                Through education, healthcare, environmental sustainability,
                and community development, Dharma Group remains committed to
                creating meaningful change for society.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
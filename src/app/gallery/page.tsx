import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "Corporate Meeting", image: "/images/gallery/gallery1.jpg" },
  { id: 2, title: "Annual Conference", image: "/images/gallery/gallery2.jpg" },
  { id: 3, title: "Factory Visit", image: "/images/gallery/gallery3.jpg" },
  { id: 4, title: "Community Service", image: "/images/gallery/gallery4.jpg" },
  { id: 5, title: "Award Ceremony", image: "/images/gallery/gallery5.jpg" },
  { id: 6, title: "Business Summit", image: "/images/gallery/gallery6.jpg" },
  { id: 7, title: "Team Building", image: "/images/gallery/gallery7.jpg" },
  { id: 8, title: "Project Launch", image: "/images/gallery/gallery8.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909] transition-colors duration-500">

        {/* Hero */}
        <section className="relative py-28 text-center">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10 dark:from-red-900/20" />

          <div className="relative mx-auto max-w-6xl px-6">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Gallery
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Moments That
              <span className="block text-red-700 dark:text-red-400">
                Define Us
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              A glimpse into our milestones, events, projects and achievements.
            </p>

          </div>

        </section>

        {/* Gallery Grid */}
        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

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
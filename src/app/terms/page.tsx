import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500">

        <section className="relative py-28">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Legal
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-black text-gray-900 dark:text-white">
              Terms & Conditions
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Please read these terms carefully before using our website.
            </p>

          </div>

        </section>

        <section className="pb-24">

          <div className="mx-auto max-w-4xl rounded-3xl bg-white dark:bg-zinc-900 p-10 shadow-xl">

            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-8">

              <section>
                <h2 className="text-2xl font-bold text-red-700 mb-3">
                  Website Usage
                </h2>

                <p>
                  By using this website, you agree to comply with all
                  applicable laws and these Terms & Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-red-700 mb-3">
                  Intellectual Property
                </h2>

                <p>
                  All content, images, graphics and trademarks belong to
                  Dharma Group unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-red-700 mb-3">
                  Limitation of Liability
                </h2>

                <p>
                  Dharma Group is not liable for any indirect damages arising
                  from the use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-red-700 mb-3">
                  Changes
                </h2>

                <p>
                  We reserve the right to modify these Terms at any time
                  without prior notice.
                </p>
              </section>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500">

        {/* Hero */}
        <section className="relative py-28">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Legal
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-black text-gray-900 dark:text-white">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Your privacy is important to us.
            </p>

          </div>

        </section>

        {/* Content */}

        <section className="pb-24">

          <div className="mx-auto max-w-4xl rounded-3xl bg-white dark:bg-zinc-900 p-10 shadow-xl">

            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-8">

              <section>
                <h2 className="text-2xl font-bold mb-3 text-red-700">
                  Information We Collect
                </h2>

                <p>
                  We may collect information including your name, email,
                  phone number and any details you voluntarily submit
                  through our contact forms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-red-700">
                  How We Use Information
                </h2>

                <p>
                  Your information is used only to respond to enquiries,
                  improve our services and communicate important updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-red-700">
                  Data Security
                </h2>

                <p>
                  Dharma Group follows appropriate security measures to
                  protect your information from unauthorized access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-red-700">
                  Cookies
                </h2>

                <p>
                  Our website may use cookies to improve your browsing
                  experience and website performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-red-700">
                  Contact
                </h2>

                <p>
                  If you have any questions regarding this Privacy Policy,
                  please contact Dharma Group.
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
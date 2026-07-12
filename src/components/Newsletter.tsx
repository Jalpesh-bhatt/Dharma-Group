"use client";

export default function Newsletter() {
  return (
    <section className="bg-red-700 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black">
          Stay Updated
        </h2>

        <p className="mt-6 text-red-100">
          Subscribe to receive the latest news and updates from Dharma Group.
        </p>

        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full px-6 py-4 text-black outline-none"
          />

          <button className="rounded-full bg-white px-8 py-4 font-bold text-red-700 hover:bg-gray-100">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
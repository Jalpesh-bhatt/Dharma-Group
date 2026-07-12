import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-[#090909] px-6">

      <div className="text-center">

        <h1 className="text-8xl font-black text-red-700">404</h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition hover:bg-red-800"
        >
          <Home size={18} />
          Back to Home
        </Link>

      </div>

    </main>
  );
}
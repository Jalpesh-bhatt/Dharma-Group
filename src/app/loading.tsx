export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-[#090909]">

      <div className="flex flex-col items-center">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-red-700 border-t-transparent" />

        <p className="mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading...
        </p>

      </div>

    </main>
  );
}
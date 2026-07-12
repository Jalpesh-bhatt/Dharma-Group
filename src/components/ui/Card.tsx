interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
      {children}
    </div>
  );
}
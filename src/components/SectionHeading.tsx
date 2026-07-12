interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <span className="rounded-full bg-red-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
        {subtitle}
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 dark:text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
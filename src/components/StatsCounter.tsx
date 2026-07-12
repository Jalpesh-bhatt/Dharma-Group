"use client";

import CountUp from "react-countup";

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({
  value,
  suffix = "",
  label,
}: Props) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-black text-red-700">
        <CountUp end={value} duration={2.5} />
        {suffix}
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        {label}
      </p>
    </div>
  );
}
// components/LiveTime.tsx
"use client";
import { useEffect, useState } from "react";

export default function Livetime({ locale = "en-IN", hour12 = false }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  return (
    <time dateTime={now.toISOString()} className='text-white'>
      {now.toLocaleString(locale, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12,
      })}
    </time>
  );
}

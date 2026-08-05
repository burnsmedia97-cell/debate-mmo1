import { useEffect, useState } from "react";

const times = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
];

type WorldClockProps = {
  onTimeChange: (time: string) => void;
};

function WorldClock({ onTimeChange }: WorldClockProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onTimeChange(times[index]);

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % times.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, onTimeChange]);

  return null;
}

export default WorldClock;
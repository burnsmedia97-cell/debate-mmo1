import { useEffect, useState } from "react";

type CitizenProps = {
  name: string;
  emoji: string;
  x: string;
  y: string;
  onSelect: (name: string, emoji: string) => void;
};

const destinations = [
  { x: "28%", y: "48%" },
  { x: "66%", y: "45%" },
  { x: "50%", y: "35%" },
  { x: "35%", y: "65%" },
  { x: "60%", y: "65%" },
];

function Citizen({
  name,
  emoji,
  x,
  y,
  onSelect,
}: CitizenProps) {
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    if (name === "Guide") {
      return;
    }

    const interval = setInterval(() => {
      const destination =
        destinations[Math.floor(Math.random() * destinations.length)];

      setPosition(destination);
    }, 4000);

    return () => clearInterval(interval);
  }, [name]);

  return (
    <div
      className="citizen"
      style={{
        left: position.x,
        top: position.y,
        cursor: "pointer",
      }}
      onClick={() => onSelect(name, emoji)}
    >
      <div className="citizen-icon">
        {emoji}
      </div>

      <div className="citizen-name">
        {name}
      </div>
    </div>
  );
}

export default Citizen;
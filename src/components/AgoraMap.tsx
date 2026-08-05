import { useState } from "react";
import "./AgoraMap.css";
import { citizens } from "../data/citizens";
import Citizen from "./Citizen";
import Player from "./Player";
import CitizenPanel from "./CitizenPanel";


const positions = [
  {
    id: "senate",
    name: "Senate Hall",
    icon: "🏛",
    x: "48%",
    y: "8%",
  },
  {
    id: "library",
    name: "Library",
    icon: "📚",
    x: "8%",
    y: "42%",
  },
  {
    id: "court",
    name: "Court",
    icon: "⚖️",
    x: "82%",
    y: "42%",
  },
  {
    id: "plaza",
    name: "Voting Plaza",
    icon: "🗳",
    x: "48%",
    y: "82%",
  },
];

type AgoraMapProps = {
  onEnter: (buildingId: string) => void;
};

function AgoraMap({ onEnter }: AgoraMapProps) {
  const [playerPosition, setPlayerPosition] = useState({
    x: "50%",
    y: "58%",
  });
const [destination, setDestination] = useState({
  x: "50%",
  y: "58%",
});

const [selectedCitizen, setSelectedCitizen] =
  useState<{
    name: string;
    emoji: string;
  } | null>(null);

  function handleMapClick(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setDestination({
  x: `${x}%`,
  y: `${y}%`,
});

setPlayerPosition({
  x: `${x}%`,
  y: `${y}%`,
});
  }

  return (
    <div className="agora-map" onClick={handleMapClick}>
      <div className="sun">☀️</div>

      <div className="fountain">⛲</div>

      {positions.map((building) => (
        <button
          key={building.id}
          className="building"
          onClick={(e) => {
            e.stopPropagation();
            onEnter(building.id);
          }}
          style={{
            left: building.x,
            top: building.y,
          }}
        >
          <div className="building-icon">
            {building.icon}
          </div>

          <div className="building-name">
            {building.name}
          </div>
        </button>
      ))}

      {citizens
  .filter((citizen) => citizen.name !== "You")
  .map((citizen) => (
    <Citizen
  key={citizen.id}
  name={citizen.name}
  emoji={citizen.emoji}
  x={citizen.x}
  y={citizen.y}
  onSelect={(name, emoji) =>
    setSelectedCitizen({ name, emoji })
  }
/>
))}

<div
  className="destination-marker"
  style={{
    left: destination.x,
    top: destination.y,
  }}
>
  ✨
</div>
      <Player
  x={playerPosition.x}
  y={playerPosition.y}
/>

{selectedCitizen && (
  <CitizenPanel
    name={selectedCitizen.name}
    emoji={selectedCitizen.emoji}
    onClose={() => setSelectedCitizen(null)}
  />
)}
    </div>
  );
}

export default AgoraMap;
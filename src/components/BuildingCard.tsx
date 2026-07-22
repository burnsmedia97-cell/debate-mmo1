import type { Building } from "../data/buildings";

type BuildingCardProps = {
  building: Building;
  onEnter: (buildingId: string) => void;
};

function BuildingCard({ building, onEnter }: BuildingCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <h4>
        {building.icon} {building.name}
      </h4>

      <p>{building.description}</p>

      <button onClick={() => onEnter(building.id)}>
        Enter
      </button>
    </div>
  );
}

export default BuildingCard;
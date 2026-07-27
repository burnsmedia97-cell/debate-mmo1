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
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#fafafa",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  }}
>
      <h4>
        {building.icon} {building.name}
      </h4>

      <p>{building.description}</p>

      <button
  onClick={() => onEnter(building.id)}
  style={{
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Enter
</button>
    </div>
  );
}

export default BuildingCard;
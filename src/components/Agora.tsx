import { buildings } from "../data/buildings";
import BuildingCard from "./BuildingCard";


type AgoraProps = {
  onEnterBuilding: (buildingId: string) => void;
};

function Agora({ onEnterBuilding }: AgoraProps) {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2>🏛 Central Agora</h2>

      <p>You arrive in the heart of the Republic.</p>

      <hr />

      <h3>Buildings</h3>

     <div
  style={{
    display: "grid",
    gap: "16px",
    marginTop: "20px",
  }}
>
  {buildings.map((building) => (
    <div
      key={building.id}
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

      <button onClick={() => onEnterBuilding(building.id)}>
  Enter
</button>

    </div>
  ))}
</div>

      <hr />

      <h3>Citizens Nearby</h3>

      <p>Citizen #1 (You)</p>

      <p>No one else is here... yet.</p>
    </main>
  );
}

export default Agora;
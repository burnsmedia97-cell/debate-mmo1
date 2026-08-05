import World from "./World";
import LocationLayout from "./LocationLayout";

type AgoraProps = {
  onEnterBuilding: (buildingId: string) => void;
};

function Agora({ onEnterBuilding }: AgoraProps) {
  return (
    <LocationLayout title="🏛 Central Agora">
      <p>You arrive in the heart of the Republic.</p>

      <h3>Agora</h3>

      <div
  style={{
    width: "100%",
    height: "650px",
    overflow: "auto",
    borderRadius: "18px",
    border: "2px solid #999",
  }}
>
  <World onEnterBuilding={onEnterBuilding} />
</div>

      <hr />

      <h3>Citizens Nearby</h3>

      <p>Citizen #1 (You)</p>

      <p>No one else is here... yet.</p>
    </LocationLayout>
  );
}

export default Agora;
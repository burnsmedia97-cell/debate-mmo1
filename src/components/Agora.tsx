import AgoraMap from "./AgoraMap";
import LocationLayout from "./LocationLayout";

type AgoraProps = {
  onEnterBuilding: (buildingId: string) => void;
};

function Agora({ onEnterBuilding }: AgoraProps) {
  return (
    <LocationLayout title="🏛 Central Agora">
      <p>You arrive in the heart of the Republic.</p>

      <h3>Agora</h3>

      <AgoraMap onEnter={onEnterBuilding} />

      <hr />

      <h3>Citizens Nearby</h3>

      <p>Citizen #1 (You)</p>

      <p>No one else is here... yet.</p>
    </LocationLayout>
  );
}

export default Agora;
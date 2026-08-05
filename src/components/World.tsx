import AgoraMap from "./AgoraMap";

type WorldProps = {
  onEnterBuilding: (buildingId: string) => void;
};

function World({ onEnterBuilding }: WorldProps) {
  return <AgoraMap onEnter={onEnterBuilding} />;
}

export default World;
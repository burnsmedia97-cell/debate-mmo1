type BuildingPosition = {
  id: string;
  name: string;
  icon: string;
  x: string;
  y: string;
};

const positions: BuildingPosition[] = [
  {
    id: "senate",
    name: "Senate Hall",
    icon: "🏛",
    x: "42%",
    y: "8%",
  },
  {
    id: "library",
    name: "Library",
    icon: "📚",
    x: "10%",
    y: "35%",
  },
  {
    id: "court",
    name: "Court",
    icon: "⚖️",
    x: "72%",
    y: "35%",
  },
  {
    id: "plaza",
    name: "Voting Plaza",
    icon: "🗳",
    x: "40%",
    y: "72%",
  },
];

type AgoraMapProps = {
  onEnter: (buildingId: string) => void;
};

function AgoraMap({ onEnter }: AgoraMapProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        border: "2px solid #bbb",
        borderRadius: "16px",
        background:
  "linear-gradient(to bottom, #b9dcff 0%, #dff1ff 30%, #ece5cb 30%, #e6ddbf 100%)",
overflow: "hidden",
      }}
    >

      <div
  style={{
    position: "absolute",
    top: "30px",
    right: "40px",
    fontSize: "48px",
  }}
>
  ☀️
</div>
      {positions.map((building) => (
        <button
          key={building.id}
          onClick={() => onEnter(building.id)}
         style={{
  position: "absolute",
  left: building.x,
  top: building.y,
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #999",
  backgroundColor: "white",
  cursor: "pointer",
  minWidth: "120px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
}}
        >
          <div style={{ fontSize: "30px" }}>{building.icon}</div>
          <div>{building.name}</div>
        </button>
      ))}
<div
  style={{
    position: "absolute",
    left: "47%",
    top: "34%",
    fontSize: "42px",
  }}
>
  ⛲
</div>
      <div
        style={{
          position: "absolute",
          left: "46%",
          top: "50%",
          fontSize: "36px",
        }}
      >
        😊
      </div>
    </div>
  );
}

export default AgoraMap;
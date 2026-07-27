type HUDProps = {
  citizenName: string;
  location: string;
};

function HUD({ citizenName, location }: HUDProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        width: "220px",
        padding: "16px",
        borderRadius: "12px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 1000,
      }}
    >
      <h3 style={{ marginTop: 0 }}>Citizen</h3>

      <p><strong>Name:</strong> {citizenName}</p>

      <p><strong>Location:</strong> {location}</p>

      <hr />

      <p>⭐ Reputation: 0</p>

      <p>🏛 Influence: 0</p>
    </div>
  );
}

export default HUD;
type CitizenPanelProps = {
  name: string;
  emoji: string;
  onClose: () => void;
};

function CitizenPanel({
  name,
  emoji,
  onClose,
}: CitizenPanelProps) {
  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        top: "120px",
        width: "240px",
        padding: "16px",
        background: "white",
        border: "1px solid #bbb",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,.2)",
        zIndex: 1000,
      }}
    >
      <h2 style={{ marginTop: 0 }}>
        {emoji} {name}
      </h2>

      <p>Citizen of the Republic</p>

      <hr />

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default CitizenPanel;
import tree from "../assets/sprites/tree.png";

type DecorationProps = {
  emoji: string;
  x: string;
  y: string;
};

function Decoration({
  emoji,
  x,
  y,
}: DecorationProps) {
  const isTree = emoji === "🌳";

  return (
    <div
      className="decoration"
      style={{
        left: x,
        top: y,
      }}
    >
      {isTree ? (
        <img
          src={tree}
          alt="Tree"
          style={{
            width: "48px",
            height: "48px",
          }}
        />
      ) : (
        emoji
      )}
    </div>
  );
}

export default Decoration;
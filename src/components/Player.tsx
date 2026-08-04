type PlayerProps = {
  x: string;
  y: string;
};

function Player({ x, y }: PlayerProps) {
  return (
    <div
      className="player"
      style={{
        left: x,
        top: y,
      }}
    >
      <div className="player-icon">🧑</div>
      <div className="player-name">You</div>
    </div>
  );
}

export default Player;
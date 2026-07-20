type LandingPageProps = {
  onEnter: () => void;
};

function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h2>Every civilization begins with a conversation.</h2>

      <p>
        Debate ideas, shape your Agora, and influence the future of the world.
      </p>

      <button onClick={onEnter}>Enter the World</button>
    </main>
  );
}

export default LandingPage;
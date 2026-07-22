type LibraryProps = {
  onBack: () => void;
};

function Library({ onBack }: LibraryProps) {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2>📚 Library</h2>

      <p>
        Welcome to the Library. Here you'll eventually browse evidence,
        research topics, and prepare arguments before entering debates.
      </p>

      <button onClick={onBack}>← Return to Agora</button>
    </main>
  );
}

export default Library;
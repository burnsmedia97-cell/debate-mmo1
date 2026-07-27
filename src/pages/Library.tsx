import LocationLayout from "../components/LocationLayout";

type LibraryProps = {
  onBack: () => void;
};

function Library({ onBack }: LibraryProps) {
  return (
    <LocationLayout title="📚 Library">
      <p>
        Welcome to the Library. Here you'll eventually browse evidence,
        research topics, and prepare arguments before entering debates.
      </p>

      <button onClick={onBack}>
        ← Return to Agora
      </button>
    </LocationLayout>
  );
}

export default Library;
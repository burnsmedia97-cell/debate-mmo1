import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Header />
      <LandingPage onEnter={() => {}} />
    </div>
  );
}

export default App;
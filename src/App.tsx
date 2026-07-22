import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Agora from "./components/Agora";
import type { Location } from "./types/location";
import Library from "./pages/Library";

function App() {
  const [currentLocation, setCurrentLocation] =
  useState<Location>("landing");

  console.log(currentLocation);

  if (currentLocation === "landing") {
    return (
      <div>
        <Header />
        <LandingPage onEnter={() => setCurrentLocation("agora")} />
      </div>
    );
  }

  if (currentLocation === "library") {
    return (
      <div>
        <Header />
        <Library onBack={() => setCurrentLocation("agora")} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Agora
        onEnterBuilding={(buildingId) =>
          setCurrentLocation(buildingId as Location)
        }
      />
    </div>
  );
}

export default App;
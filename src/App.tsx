import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Agora from "./components/Agora";
import type { Location } from "./types/location";
import Library from "./pages/Library";
import HUD from "./components/HUD";

function App() {
  
  const [currentLocation, setCurrentLocation] =
  useState<Location>("landing");

  console.log(currentLocation);

const hud = (
  <HUD
    citizenName="Citizen #1"
    location={currentLocation}
  />
);

  if (currentLocation === "landing") {
    return (
      <div>
        <Header />
        {hud}
        <LandingPage onEnter={() => setCurrentLocation("agora")} />
      </div>
    );
  }

  if (currentLocation === "library") {
    return (
      <div>
        <Header />
        {hud}
        <Library onBack={() => setCurrentLocation("agora")} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {hud}
      <Agora
        onEnterBuilding={(buildingId) =>
          setCurrentLocation(buildingId as Location)
        }
      />
    </div>
  );
}

export default App;
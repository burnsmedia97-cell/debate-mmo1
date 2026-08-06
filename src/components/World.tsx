import { useState } from "react";
import AgoraMap from "./AgoraMap";
import WorldClock from "./WorldClock";

type WorldProps = {
  onEnterBuilding: (buildingId: string) => void;
};

function World({ onEnterBuilding }: WorldProps) {
  const [timeOfDay, setTimeOfDay] =
    useState("Morning");

  return (
    <>
      <WorldClock onTimeChange={setTimeOfDay} />

      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "12px",
          fontSize: "20px",
        }}
      >
        🕒 {timeOfDay}
      </div>
//note here
      <AgoraMap
  onEnter={onEnterBuilding}
  timeOfDay={timeOfDay}
/>
    </>
  );
}

export default World;
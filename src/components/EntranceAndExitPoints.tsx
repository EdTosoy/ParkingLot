import React, { useState } from "react";
import Entrance from "./Entrance";

export default function EntranceAndExitPoints() {
  const [numberOfEntrance, setNumberOfEntrance] = useState(3);

  return (
    <div>
      <div>
        {[...Array(numberOfEntrance)].map((_, index) => {
          return <Entrance key={index} />;
        })}
        <button
          onClick={() => {
            setNumberOfEntrance((prevValue) => prevValue + 1);
          }}
        >
          Add Entrance/Exit
        </button>
      </div>
    </div>
  );
}

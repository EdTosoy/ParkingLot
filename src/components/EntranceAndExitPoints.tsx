import React, { useState } from "react";
import Entrance from "./Entrance";

export default function EntranceAndExitPoints() {
  const [numberOfEntrance, setNumberOfEntrance] = useState(3);

  return (
    <div>
      <div className="entrance-container">
        {[...Array(numberOfEntrance)].map((_, index) => {
          return <Entrance key={index} />;
        })}
      </div>
      <div className="add-entrance-container">
        <button
          className="add-entrance-btn"
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

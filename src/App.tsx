import React, { useContext } from "react";
import EntranceAndExitPoints from "./components/EntranceAndExitPoints";
import LargeParkingLot from "./components/LargeParkingLot";
import MediumParkingLot from "./components/MediumParkingLot";
import ParkingStatistics from "./components/ParkingStatistics";
import SmallParkingLot from "./components/SmallParkingLot";
import { AppContext } from "./contextAPI/cars";
import "./App.scss";

function App() {
  const { cars, balance } = useContext(AppContext);
  console.log(cars);
  return (
    <div className="App">
      <EntranceAndExitPoints />
      <div className="parking-complex-wrapper">
        <div className="parking-complex">
          <h1>PARKING COMPLEX</h1>
          <SmallParkingLot cars={cars} />
          <MediumParkingLot cars={cars} />
          <LargeParkingLot cars={cars} />
        </div>

        <ParkingStatistics balance={balance} cars={cars} />
      </div>
    </div>
  );
}

export default App;

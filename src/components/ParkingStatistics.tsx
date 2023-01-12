import React from "react";
import {
  largeCarType,
  largeParkingLimit,
  mediumCarType,
  mediumParkingLimit,
  smallCarType,
  smallParkingLimit,
} from "../Constants";
import { CarInfo } from "../types";

type ParkingStatisticsProps = {
  balance: number;
  cars: CarInfo[];
};

function ParkingStatistics({ balance, cars }: ParkingStatisticsProps) {
  return (
    <div className="parking-info">
      <div className="parking-statistics">
        <div>
          <h2>Parking Statistics : </h2>
          <div>Number of Cars Parked:{cars.length - 1}</div>
          <h3>Parking System Balance : {balance} </h3>
          <p>
            number of Small Vehicle:
            {cars.filter((car) => car.carType === smallCarType).length} /
            {smallParkingLimit}
          </p>
          <p>
            Number of Medium Vehicle:
            {cars.filter((car) => car.carType === mediumCarType).length} /
            {mediumParkingLimit}
          </p>
          <p>
            Number of Large Vehicle:
            {cars.filter((car) => car.carType === largeCarType).length} /
            {largeParkingLimit}
          </p>
        </div>
      </div>
      <div className="legends">
        <h3>Legends:</h3>
        <div className="grid">
          <div className="block-red"></div>
          <div>SMALL VEHICLE</div>
        </div>
        <div className="grid">
          <div className="block-cyan"></div>
          <div>MEDIUM VEHICLE</div>
        </div>
        <div className="grid">
          <div className="block-violet"></div>
          <div>LARGE VEHICLE</div>
        </div>
      </div>
    </div>
  );
}

export default ParkingStatistics;

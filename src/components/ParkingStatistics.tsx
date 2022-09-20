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
    <div>
      <h1>Parking Statistics : </h1>
      <div>Number of Cars:{cars.length}</div>
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
  );
}

export default ParkingStatistics;

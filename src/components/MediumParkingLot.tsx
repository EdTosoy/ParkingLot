import React from "react";
import { mediumCarType } from "../Constants";
import { CarInfo } from "../types";
import MediumCar from "./MediumCar";

type MediumParkingLotProps = {
  cars: CarInfo[];
};

export default function MediumParkingLot({ cars }: MediumParkingLotProps) {
  return (
    <div>
      <div>
        <h4>MEDIUM PARKING </h4>
        {cars
          .filter((car) => car.carType === mediumCarType)
          .map((car) => {
            const { parkingNumber, parkingSize, timeIn } = car;
            return (
              <MediumCar
                parkingNumber={parkingNumber}
                key={parkingNumber}
                timeIn={timeIn}
                parkingSize={parkingSize}
              />
            );
          })}
      </div>
    </div>
  );
}

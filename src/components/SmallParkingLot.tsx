import React from "react";
import { smallCarType } from "../Constants";
import { CarInfo } from "../types";
import SmallCar from "./SmallCar";

type SmallParkingLotProps = {
  cars: CarInfo[];
};

export default function SmallParkingLot({ cars }: SmallParkingLotProps) {
  return (
    <div>
      <div>
        <h4>SMALL PARKING </h4>
        {cars
          .filter((car) => car.carType === smallCarType)
          .map((car) => {
            const { parkingNumber, parkingSize, timeIn } = car;
            return (
              <SmallCar
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

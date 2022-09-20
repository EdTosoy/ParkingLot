import React from "react";
import SmallCar from "./SmallCar";
import MediumCar from "./MediumCar";
import { mediumCarType, smallCarType } from "../Constants";
import { CarInfo } from "../types";

type MediumParkingLotProps = {
  cars: CarInfo[];
};

export default function MediumParkingLot({ cars }: MediumParkingLotProps) {
  return (
    <div>
      <h4>MEDIUM PARKING </h4>
      <div className="medium-parking-lot">
        {cars
          .filter((car) => car.parkingSize === mediumCarType)
          .map((car) => {
            const { parkingNumber, parkingSize, timeIn, carType } = car;
            return carType === smallCarType ? (
              <SmallCar
                parkingNumber={parkingNumber}
                key={parkingNumber}
                timeIn={timeIn}
                parkingSize={parkingSize}
              />
            ) : (
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

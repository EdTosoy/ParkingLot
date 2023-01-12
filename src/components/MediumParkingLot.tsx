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
      <h4 className="parking-label">MEDIUM PARKING </h4>
      <div className="medium-parking-lot">
        {cars
          .filter((car) => car.parkingSize === mediumCarType)
          .map((car) => {
            const { id, parkingSize, timeIn, carType } = car;
            return carType === smallCarType ? (
              <SmallCar
                id={id}
                key={id}
                timeIn={timeIn?.toDate()}
                parkingSize={parkingSize}
              />
            ) : (
              <MediumCar
                id={id}
                key={id}
                timeIn={timeIn?.toDate()}
                parkingSize={parkingSize}
              />
            );
          })}
      </div>
    </div>
  );
}

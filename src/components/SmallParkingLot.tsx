import React from "react";
import SmallCar from "./SmallCar";
import { CarInfo } from "../types";
import { smallCarType } from "../Constants";

type SmallParkingLotProps = {
  cars: CarInfo[];
};

export default function SmallParkingLot({ cars }: SmallParkingLotProps) {
  return (
    <div>
      <h4 className="parking-label">SMALL PARKING </h4>
      <div className="small-parking-lot">
        {cars
          .filter((car) => car.parkingSize === smallCarType)
          .map((car) => {
            const { id, parkingSize, timeIn } = car;
            return (
              <SmallCar
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

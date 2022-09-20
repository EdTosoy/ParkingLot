import React from "react";
import { largeCarType } from "../Constants";
import { CarInfo } from "../types";
import LargeCar from "./LargeCar";

type LargeParkingLotProps = {
  cars: CarInfo[];
};

function LargeParkingLot({ cars }: LargeParkingLotProps) {
  return (
    <div>
      <h4>LARGE PARKING </h4>
      {cars
        .filter((car) => car.carType === largeCarType)
        .map((car) => {
          const { parkingNumber, parkingSize, timeIn } = car;
          return (
            <LargeCar
              parkingNumber={parkingNumber}
              key={parkingNumber}
              timeIn={timeIn}
              parkingSize={parkingSize}
            />
          );
        })}
    </div>
  );
}

export default LargeParkingLot;

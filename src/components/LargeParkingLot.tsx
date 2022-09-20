import React from "react";
import LargeCar from "./LargeCar";
import MediumCar from "./MediumCar";
import SmallCar from "./SmallCar";
import { largeCarType, mediumCarType, smallCarType } from "../Constants";
import { CarInfo } from "../types";

type LargeParkingLotProps = {
  cars: CarInfo[];
};

function LargeParkingLot({ cars }: LargeParkingLotProps) {
  return (
    <div>
      <h4>LARGE PARKING </h4>
      <div className="large-parking-lot">
        {cars
          .filter((car) => car.parkingSize === largeCarType)
          .map((car) => {
            const { parkingNumber, parkingSize, timeIn, carType } = car;
            return carType === smallCarType ? (
              <SmallCar
                parkingNumber={parkingNumber}
                key={parkingNumber}
                timeIn={timeIn}
                parkingSize={parkingSize}
              />
            ) : carType === mediumCarType ? (
              <MediumCar
                parkingNumber={parkingNumber}
                key={parkingNumber}
                timeIn={timeIn}
                parkingSize={parkingSize}
              />
            ) : (
              <LargeCar
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

export default LargeParkingLot;

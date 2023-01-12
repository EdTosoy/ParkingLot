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
      <h4 className="parking-label">LARGE PARKING </h4>
      <div className="large-parking-lot">
        {cars
          .filter((car) => car.parkingSize === largeCarType)
          .map((car) => {
            const { id, parkingSize, timeIn, carType } = car;
            return carType === smallCarType ? (
              <SmallCar
                id={id}
                key={id}
                timeIn={timeIn?.toDate()}
                parkingSize={parkingSize}
              />
            ) : carType === mediumCarType ? (
              <MediumCar
                id={id}
                key={id}
                timeIn={timeIn?.toDate()}
                parkingSize={parkingSize}
              />
            ) : (
              <LargeCar
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

export default LargeParkingLot;

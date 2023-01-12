import React, { useContext } from "react";
import { AppContext } from "../contextAPI/cars";
import { format } from "date-fns";
import { computeParkingFee } from "../utils/computeParkingFee";
import { dateAndTimeFormat } from "../Constants";

type MediumCarProps = {
  id: string;
  timeIn: Date;
  parkingSize: string;
};

export default function MediumCar({ id, timeIn, parkingSize }: MediumCarProps) {
  const { removeCar, addBalance } = useContext(AppContext);

  return (
    <div className="medium-car">
      <p>Time in:</p>
      {timeIn && <p>{format(new Date(timeIn), dateAndTimeFormat)}</p>}
      <button
        className="remove-btn"
        onClick={() => {
          removeCar(id);
          addBalance(computeParkingFee(timeIn, parkingSize));
        }}
      >
        Remove Car
      </button>
    </div>
  );
}

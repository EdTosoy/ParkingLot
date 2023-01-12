import React, { useContext } from "react";
import { AppContext } from "../contextAPI/cars";
import { format } from "date-fns";
import { computeParkingFee } from "../utils/computeParkingFee";
import { dateAndTimeFormat } from "../Constants";

type LargeCarProps = {
  id: string;
  timeIn: Date;
  parkingSize: string;
};

export default function LargeCar({ id, timeIn, parkingSize }: LargeCarProps) {
  const { removeCar, addBalance } = useContext(AppContext);

  return (
    <div className="large-car">
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

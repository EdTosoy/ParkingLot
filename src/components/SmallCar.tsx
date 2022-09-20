import React, { useContext } from "react";
import { AppContext } from "../contextAPI/cars";
import { format } from "date-fns";
import { computeParkingFee } from "../utils/computeParkingFee";
import { dateAndTimeFormat } from "../Constants";

type SmallCarProps = {
  parkingNumber: number;
  timeIn: Date;
  parkingSize: string;
};

export default function SmallCar({
  parkingNumber,
  timeIn,
  parkingSize,
}: SmallCarProps) {
  const { removeCar, balance, setBalance } = useContext(AppContext);

  return (
    <div className="small-car">
      <p>Time in:</p>
      <p>{format(new Date(timeIn), dateAndTimeFormat)}</p>
      <button
        className="remove-btn"
        onClick={() => {
          removeCar(parkingNumber);
          setBalance(balance + computeParkingFee(timeIn, parkingSize));
        }}
      >
        Remove Car
      </button>
    </div>
  );
}

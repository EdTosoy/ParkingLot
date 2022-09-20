import React, { useContext } from "react";
import { AppContext } from "../contextAPI/cars";
import { format } from "date-fns";
import { computeParkingFee } from "../utils/computeBillPayment";
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
    <div>
      <h1>SCar</h1>
      <p>Time IN : {format(new Date(timeIn), dateAndTimeFormat)} </p>
      <button
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
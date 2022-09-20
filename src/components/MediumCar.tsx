import React, { useContext } from "react";
import { AppContext } from "../contextAPI/cars";
import { format } from "date-fns";
import { computeParkingFee } from "../utils/computeBillPayment";
import { dateAndTimeFormat } from "../Constants";

type MediumCarProps = {
  parkingNumber: number;
  timeIn: Date;
  parkingSize: string;
};

export default function MediumCar({
  parkingNumber,
  timeIn,
  parkingSize,
}: MediumCarProps) {
  const { removeCar, balance, setBalance } = useContext(AppContext);

  return (
    <div>
      <h1>MCar</h1>
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
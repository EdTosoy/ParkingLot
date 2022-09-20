import React, { useContext, useState } from "react";
import { AppContext } from "../contextAPI/cars";
import { v4 as uuidv4 } from "uuid";
import { largeCarType, mediumCarType, smallCarType } from "../Constants";
import { findParkingSize } from "../utils/findParkingSize";

function Entrance() {
  const { cars, setCars } = useContext(AppContext);
  const [carType, setCarType] = useState<string>(smallCarType);

  const parkingSize = findParkingSize(cars, carType);
  const AddCar = () => {
    setCars([
      ...cars,
      {
        carType,
        parkingNumber: uuidv4(),
        timeIn: new Date(),
        parkingSize: parkingSize,
      },
    ]);
  };

  return (
    <div>
      <h4>Parking Entrance</h4>
      <div>
        <select
          defaultValue={smallCarType}
          onChange={(event) => {
            setCarType(event.target.value);
          }}
        >
          <option value={smallCarType}>Small</option>
          <option value={mediumCarType}>Meddium</option>
          <option value={largeCarType}>Large</option>
        </select>
        <button onClick={() => AddCar()}>Add Car</button>
      </div>
    </div>
  );
}

export default Entrance;

import { createContext, useState } from "react";

import { ContextProps } from "../types";

export const AppContext = createContext<ContextProps>({
  cars: [],
  balance: 0,
  setCars: () => {},
  removeCar: () => {},
  setBalance: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [cars, setCars] = useState<Array<any>>([]);
  const [balance, setBalance] = useState(0);
  const removeCar = (parkingNumber: number) => {
    const newCarsArray = cars.filter(
      (car) => car.parkingNumber !== parkingNumber
    );
    setCars(newCarsArray);
  };

  return (
    <AppContext.Provider
      value={{
        cars,
        balance,
        setCars,
        removeCar,
        setBalance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export interface CarInfo {
  carType: string;
  id: string;
  timeIn: any;
  parkingSize: string;
}

export type ContextProps = {
  cars: Array<CarInfo>;
  balance: number;
  setCars: React.Dispatch<React.SetStateAction<Array<any>>>;
  addBalance: (amount: number) => void;
  removeCar: (id: string) => void;
  addParking: (
    carType: string,
    parkingNumber: string,
    parkingSize: string
  ) => void;
};

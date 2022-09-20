export interface CarInfo {
  carType: string;
  parkingNumber: number;
  timeIn: Date;
  parkingSize: string;
}

export type ContextProps = {
  cars: Array<CarInfo>;
  balance: number;
  setCars: React.Dispatch<React.SetStateAction<Array<any>>>;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  removeCar: (parkingNumber: number) => void;
};

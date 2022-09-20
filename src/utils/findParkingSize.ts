import {
  largeCarType,
  largeParkingLimit,
  mediumCarType,
  mediumParkingLimit,
  smallCarType,
  smallParkingLimit,
} from "../Constants";
import { CarInfo } from "../types";

export const findParkingSize = (cars: CarInfo[], carType: string) => {
  const isSmallParkingFull =
    cars.filter((car) => car.carType === smallCarType).length >=
    smallParkingLimit;
  const isMediumParkingFull =
    cars.filter((car) => car.carType === mediumCarType).length >=
    mediumParkingLimit;
  const isLargeParkingFull =
    cars.filter((car) => car.carType === largeCarType).length >=
    largeParkingLimit;

  if (isSmallParkingFull && isMediumParkingFull && isLargeParkingFull)
    return "";

  switch (carType) {
    case smallCarType:
      return !isSmallParkingFull
        ? smallCarType
        : !isMediumParkingFull
        ? mediumCarType
        : largeCarType;

    case mediumCarType:
      return !isMediumParkingFull ? mediumCarType : largeCarType;

    case largeCarType:
      return !isLargeParkingFull ? largeCarType : "";

    default:
      break;
  }
};

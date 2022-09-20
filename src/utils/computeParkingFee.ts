import { largeCarType, mediumCarType, smallCarType } from "../Constants";

export const computeParkingFee = (timeIn: Date, parkingSize: string) => {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const currentTime = new Date().getTime();
  const consumedHours = Math.ceil((currentTime - timeIn.getTime()) / hour);

  const flatRate = 40;
  let additionaFee = 0;
  let parkingPenaltyFee = 0;

  if (consumedHours > 3 && consumedHours < 24) {
    switch (parkingSize) {
      case smallCarType:
        additionaFee = (consumedHours - 3) * 20;
        break;
      case mediumCarType:
        additionaFee = (consumedHours - 3) * 60;
        break;
      case largeCarType:
        additionaFee = (consumedHours - 3) * 100;
        break;
      default:
        break;
    }
  }
  if (consumedHours > 24) {
    parkingPenaltyFee = Math.floor(consumedHours / 24) * 5000;
  }
  return flatRate + additionaFee + parkingPenaltyFee;
};

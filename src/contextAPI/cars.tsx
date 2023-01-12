import { createContext, useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { ContextProps } from "../types";

import { v4 as uuidv4 } from "uuid";
import db from "../firebase";

export const AppContext = createContext<ContextProps>({
  cars: [],
  balance: 0,
  setCars: () => {},
  removeCar: () => {},
  addBalance: () => {},
  addParking: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const colletionRefParking = collection(db, "parking");
  const colletionRefBalance = collection(db, "balance");
  const [cars, setCars] = useState<Array<any>>([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const unsubParking = onSnapshot(colletionRefParking, (querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCars(items);
    });

    const unsubBalance = onSnapshot(colletionRefBalance, (querySnapshot) => {
      let balance = 0;
      querySnapshot.forEach((doc) => {
        balance += doc.data()?.amount || 0;
      });
      setBalance(balance);
    });

    return () => {
      unsubParking();
      unsubBalance();
    };

    // eslint-disable-next-line
  }, []);
  async function addParking(
    carType: string,
    parkingNumber: string,
    parkingSize: string
  ) {
    const newparking = {
      carType,
      parkingNumber,
      parkingSize,
      id: uuidv4(),
      timeIn: serverTimestamp(),
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
    };

    try {
      const parkingRef = doc(colletionRefParking, newparking.id);
      await setDoc(parkingRef, newparking);
    } catch (error) {
      console.error(error);
    }
  }

  async function removeCar(parkingId: string) {
    try {
      const parkingRef = doc(colletionRefParking, parkingId);
      await deleteDoc(parkingRef);
    } catch (error) {
      console.error(error);
    }
  }
  async function addBalance(amount: number) {
    try {
      const parkingRef = doc(colletionRefBalance);
      await setDoc(parkingRef, { amount });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        cars,
        balance,
        setCars,
        removeCar,
        addParking,
        addBalance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { useEffect, useState } from "react";
import { IData } from "../types/data.type";

interface IUseLocalstorage {
  key: string;
  initalValue: IData[];
}

const useLocalstorage = ({ key, initalValue }: IUseLocalstorage) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalstorage;

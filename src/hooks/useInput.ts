import { useState } from "react";

interface IUseInput {
  name: string;
  lastname: string;
}

interface IUseInputPhone {
  phone: number;
  err: string;
}

export const useInput = ({ name, lastname }: IUseInput) => {
  const [inputValue, setInputValue] = useState({
    name,
    lastname,
  });

  const handleChange = (e: any) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: [e.target.value.trim()],
    });
  };

  return { inputValue, handleChange };
};

export const useInputPhone = ({ phone, err }: IUseInputPhone) => {
  const [inputValue, setInputValue] = useState({
    phone,
    err,
  });

  const handleChange = (e: any) => {
    setInputValue({
      phone: e.target.value.trim(),
      err: e.target.validationMessage,
    });
  };

  return { inputValue, handleChange };
};

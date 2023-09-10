import axios from "axios";
import { useEffect, useState } from "react";

interface IUseFetch {
  url: string;
  initialValue: any;
}

export const useFetch = ({ url, initialValue }: IUseFetch) => {
  const [value, setValue] = useState(initialValue);

  const getData = async () => {
    return axios
      .get(url)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return [value, setValue];
};

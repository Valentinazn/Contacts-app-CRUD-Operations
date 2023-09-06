import { IData } from "../types/data.type";

export interface IPostModal {
  onPostSubmit: (e: any, name: string, lastname: string, phone: number) => void;
  onClose: () => void;
}

export interface IEditModal {
  onClose: () => void;
  data: IData;
  onEditSubmit: (
    e: any,
    id: string,
    name: string,
    lastname: string,
    phone: number
  ) => void;
}

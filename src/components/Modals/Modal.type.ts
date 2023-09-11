import { Profile } from "../types/data.type";

export interface IPostModal {
  onPostSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    lastname: string,
    phone: number
  ) => void;
  onClose: () => void;
}

export interface IEditModal {
  onClose: () => void;
  data: Profile;
  onEditSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
    img: string,
    name: string,
    lastname: string,
    phone: number
  ) => void;
}

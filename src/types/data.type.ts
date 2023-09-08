export interface Contacts {
  profile: Profile[];
}

export interface Profile {
  id: string;
  img: string;
  name: string;
  lastname: string;
  phone: number;
}

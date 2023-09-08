import UpdateIcon from "../../assets/svg/UpdateIcon";
import DeleteIcon from "../../assets/svg/DeleteIcon";
import { Contacts, Profile } from "../../types/data.type";

interface IContact {
  data: Profile[];

  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    img: string,
    name: string,
    lastname: string,
    phone: number
  ) => void;
}
const Contact = ({ data, onDelete, onEdit }: IContact) => {
  return (
    <section className="w-full">
      {data.map((i) => {
        return (
          <div
            className="border-b-[black] border-b-2 grid-cols-1 grid border-solid pb-[10px] mb-[20px]"
            key={i.id}
          >
            <div className="grid grid-cols-[50px_1fr_1fr] items-start text-left gap-[10px]">
              <img
                width={50}
                height={50}
                src={i.img}
                className="rounded-[50%] object-cover"
              />
              <div>
                <h3 className="font-bold">
                  {i.name} {i.lastname}
                </h3>

                <p className="text-[#67727E]">{i.phone}</p>
              </div>

              <div className="flex justify-end gap-[10px]">
                <UpdateIcon
                  className="hover:cursor-pointer hover:opacity-[0.6]"
                  fill={"#4169e1"}
                  width={20}
                  height={20}
                  onClick={() =>
                    onEdit(i.id, i.img, i.name, i.lastname, i.phone)
                  }
                />
                <DeleteIcon
                  className="hover:cursor-pointer hover:opacity-[0.6]"
                  fill={"#ED6368"}
                  width={20}
                  height={20}
                  onClick={() => onDelete(i.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Contact;

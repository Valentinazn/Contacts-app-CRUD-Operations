import { useEffect, useState } from "react";

import AddButton from "./components/AddButton";
import Contact from "./components/Contact";
import { IData } from "./types/data.type";
import axios from "axios";
import PostModal from "./Modals/PostModal";
import UserDefaultImg from "../src/assets/svg/userImg.svg";
import { v4 as uuidv4 } from "uuid";
import EditModal from "./Modals/EditModal";

import useLocalstorage from "./hooks/useLocalstorage";

import ModalDelete from "./Modals/DeleteModal";

function App() {
  const [data, setData] = useState<IData[]>([]);

  const getData = () => {
    return axios
      .get("db.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const [contacts, setContact] = useLocalstorage({
    key: "key",
    initalValue: data,
  });

  const [contactEdit, setContactEdit] = useState({} as IData);
  const [contactDelete, setContactDelete] = useState({} as IData);
  const [postModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const onPostSubmit = (
    e: any,
    name: string,
    lastname: string,
    phone: number
  ) => {
    e.preventDefault();

    const data: IData = {
      id: uuidv4(),
      img: UserDefaultImg,
      name: name,
      lastname: lastname,
      phone: phone,
    };

    axios
      .post("db.json", data)
      .then((res) => {
        if (res.status === 200) {
          alert("operazione eseguita con successo");
        } else {
          alert("Ops, qualcosa è andato storto!");
        }
        setContact(contacts?.concat(data));
        setPostModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  // PUT

  const onEdit = (
    id: string,
    name: string,
    lastname: string,
    phone: number
  ) => {
    setContactEdit({
      id: id,
      name: name,
      lastname: lastname,
      phone: phone,
    });
    setEditModalOpen(true);
  };

  const onEditSubmit = (
    e: any,
    id: string,
    name: string,
    lastname: string,
    phone: number
  ) => {
    e.preventDefault();
    const editContact = contacts?.map((i: IData) => {
      if (i.id === id) {
        return { ...i, name: name, lastname: lastname, phone: phone };
      }
      return i;
    });

    setContact(editContact);
    setEditModalOpen(false);
  };

  const onDelete = (id: string) => {
    setContactDelete({
      id: id,
      lastname: "",
      name: "",
      phone: 111,
      img: "",
    });
    setDeleteModalOpen(true);
  };

  // DELETE
  const onDeleteSumit = (e: any, contactId: string) => {
    e.preventDefault();
    setContact(contacts?.filter((i: IData) => i.id !== contactId));
    setDeleteModalOpen(false);
  };

  return (
    <main className="grid grid-cols-1 place-items-center gap-[30px] max-w-7xl min-h-[100vh]">
      <div className="grid w-full gap-[30px] min-w-[375px] lg:w-[730px] min-h-[50vh] p-6">
        <div className="grid justify-self-end">
          <AddButton
            onClick={() => setPostModalOpen(true)}
            textButton="Aggiungi"
          />
        </div>

        {contacts.length > 0 ? (
          <Contact
            data={contacts ?? []}
            onDelete={(id) => onDelete(id)}
            onEdit={(id, name, lastname, phone) =>
              onEdit(id, name, lastname, phone)
            }
          />
        ) : (
          <div className="grid place-items-center ">
            <h3 className="text-[#334253] font-bold text-lg">
              Aggiungi un contatto
            </h3>
          </div>
        )}
      </div>
      {deleteModalOpen && (
        <ModalDelete
          title={"Sei sicuro di voler eliminare questo contatto?"}
          confirmButtonText={"Conferma"}
          exitButtonText={"Annulla"}
          onClose={() => setDeleteModalOpen(false)}
          onDeleteSubmit={onDeleteSumit}
          data={contactDelete}
        />
      )}
      {editModalOpen && (
        <EditModal
          onClose={() => setEditModalOpen(false)}
          onEditSubmit={onEditSubmit}
          data={contactEdit}
        />
      )}

      {postModalOpen && (
        <PostModal
          onPostSubmit={onPostSubmit}
          onClose={() => setPostModalOpen(false)}
        />
      )}
    </main>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";
import UserDefaultImg from "/image/profile/userImg.svg";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../../hooks/useFetch";
import { Profile } from "../../types/data.type";
import AddButton from "../Buttons/AddButton";
import Contact from "../Contact";
import ModalDelete from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";
import PostModal from "../Modals/PostModal";

interface IHome {
  text: string;
}

function Home({ text }: IHome) {
  const [contactEdit, setContactEdit] = useState({} as Profile);
  const [contactDelete, setContactDelete] = useState({} as Profile);
  const [postModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  // GET
  const [contacts, setContact] = useFetch({
    url: "http://localhost:3000/profile",
    initialValue: [],
  });

  // POST

  const onPostSubmit = (
    e: any,
    name: string,
    lastname: string,
    phone: number
  ) => {
    e.preventDefault();

    const data: Profile = {
      id: uuidv4(),
      img: UserDefaultImg,
      name: name,
      lastname: lastname,
      phone: phone,
    };

    axios
      .post(" http://localhost:3000/profile", data)
      .then((res) => {
        if (res.status === 200) {
          alert("operazione eseguita con successo");
        }
        setContact(contacts.concat(data));
        setPostModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  // PUT

  const onEdit = (
    id: string,
    img: string,
    name: string,
    lastname: string,
    phone: number
  ) => {
    setContactEdit({
      id: id,
      img: img,
      name: name,
      lastname: lastname,
      phone: phone,
    });
    setEditModalOpen(true);
  };

  const onEditSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
    img: string,
    name: string,
    lastname: string,
    phone: number
  ) => {
    e.preventDefault();

    const editContact = contacts.map((i: Profile) => {
      if (i.id === id) {
        return {
          ...i,
          img: img,
          name: name,
          lastname: lastname,
          phone: phone,
        };
      }
      return i;
    });

    axios
      .put(" http://localhost:3000/profile/" + id, {
        img,
        name,
        lastname,
        phone,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("operazione eseguita con successo");
        }
        setContact(editContact);
        setEditModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  // DELETE

  const onDelete = (id: string) => {
    setContactDelete({
      id: id,
      lastname: "",
      name: "",
      phone: 0,
      img: "",
    });
    setDeleteModalOpen(true);
  };

  const onDeleteSumit = (
    e: React.FormEvent<HTMLFormElement>,
    contactId: string
  ) => {
    e.preventDefault();
    axios
      .delete(" http://localhost:3000/profile/" + contactId)
      .then((res) => {
        if (res.status === 200) {
          alert("operazione eseguita con successo");
        }
        setContact(contacts?.filter((i: Profile) => i.id !== contactId));
        setDeleteModalOpen(false);
      })
      .catch((err) => console.log(err));
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
            onEdit={(id, img, name, lastname, phone) =>
              onEdit(id, img, name, lastname, phone)
            }
          />
        ) : (
          <div className="grid place-items-center ">
            <h3 className="text-[#334253] font-bold text-lg">{text}</h3>
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

export default Home;

import { useState } from "react";
import CloseIcon from "../../assets/svg/CloseIcon";

import "../style.css";
import { IPostModal } from "../Modal.type";

import ModalContainer from "../ModalContainer";
import ModalInputs from "../ModalInputs";
import SubmitButton from "../../components/Buttons/SubmitButton";

const PostModal = ({ onClose, onPostSubmit }: IPostModal) => {
  const [contactPostName, setContactPostName] = useState<string>("");
  const [contactPostLastname, setContactPostLastname] = useState<string>("");
  const [contactPostPhone, setContactPostPhone] = useState({
    data: 3334445555,
    err: "",
  });

  const onContactPostName = (e: any) => {
    setContactPostName(e.target.value.trim());
  };
  const onContactPostLastname = (e: any) => {
    setContactPostLastname(e.target.value.trim());
  };

  const onContactPostPhone = (e: any) => {
    setContactPostPhone({
      data: e.target.value.trim(),
      err: e.target.validationMessage,
    });
  };
  return (
    <ModalContainer>
      <div className="form-close-icon">
        <CloseIcon onClick={onClose} width={15} height={15} />
      </div>

      <form
        onSubmit={(e) =>
          onPostSubmit(
            e,
            contactPostName,
            contactPostLastname,
            contactPostPhone.data
          )
        }
      >
        <ModalInputs
          contactName={contactPostName}
          onContactName={onContactPostName}
          contactLastname={contactPostLastname}
          onContactLastname={onContactPostLastname}
          contactPhone={{
            data: contactPostPhone.data,
            err: contactPostPhone.err,
          }}
          onContactPhone={onContactPostPhone}
        />

        <SubmitButton textButton={"Aggiungi"} bgColor="bg-[#4169e1]" />
      </form>
    </ModalContainer>
  );
};

export default PostModal;

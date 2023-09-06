import { useState } from "react";
import CloseIcon from "../../assets/svg/CloseIcon";

import "../style.css";

import { IEditModal } from "../Modal.type";

import ModalContainer from "../ModalContainer";
import ModalInputs from "../ModalInputs";

const EditModal = ({ onClose, onEditSubmit, data }: IEditModal) => {
  const [contactEditName, setContactEditName] = useState(data.name);
  const [contactEditLastname, setContactEditLastname] = useState(data.lastname);
  const [contactEditPhone, setContactEditPhone] = useState({
    data: data.phone,
    err: "",
  });

  const onContactEditName = (e: any) => {
    setContactEditName(e.target.value.trim());
  };
  const onContactEditLastName = (e: any) => {
    setContactEditLastname(e.target.value.trim());
  };

  const onContactEditPhone = (e: any) => {
    setContactEditPhone({
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
          onEditSubmit(
            e,
            data.id,
            contactEditName,
            contactEditLastname,
            contactEditPhone.data
          )
        }
      >
        <ModalInputs
          contactName={contactEditName}
          onContactName={onContactEditName}
          contactLastname={contactEditLastname}
          onContactLastname={onContactEditLastName}
          contactPhone={{
            data: contactEditPhone.data,
            err: contactEditPhone.err,
          }}
          onContactPhone={onContactEditPhone}
        />
      </form>
    </ModalContainer>
  );
};

export default EditModal;

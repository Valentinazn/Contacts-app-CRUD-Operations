import "../style.css";

import { IEditModal } from "../Modal.type";

import ModalContainer from "../ModalContainer";
import ModalInputs from "../ModalInputs";
import { useInput, useInputPhone } from "../../../hooks/useInput";
import CloseIcon from "../../../assets/svg/CloseIcon";
import SubmitButton from "../../Buttons/SubmitButton";

const EditModal = ({ onClose, onEditSubmit, data }: IEditModal) => {
  const { inputValue, handleChange } = useInput({
    name: data.name,
    lastname: data.lastname,
  });
  const { inputValue: inputPhone, handleChange: handleChangePhone } =
    useInputPhone({ phone: data.phone, err: "" });

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
            data.img,
            inputValue.name,
            inputValue.lastname,
            inputPhone.phone
          )
        }
      >
        <ModalInputs
          contactName={inputValue.name}
          handleChangePhone={handleChangePhone}
          contactLastname={inputValue.lastname}
          handleChange={handleChange}
          contactPhone={{
            data: inputPhone.phone,
            err: inputPhone.err,
          }}
        />
        <SubmitButton textButton={"Modifica"} bgColor="bg-[#4169e1]" />
      </form>
    </ModalContainer>
  );
};

export default EditModal;

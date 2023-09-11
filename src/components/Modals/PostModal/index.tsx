import "../style.css";
import { IPostModal } from "../Modal.type";

import ModalContainer from "../ModalContainer";
import ModalInputs from "../ModalInputs";
import { useInput, useInputPhone } from "../../../hooks/useInput";
import CloseIcon from "../../../assets/svg/CloseIcon";
import SubmitButton from "../../Buttons/SubmitButton";

const PostModal = ({ onClose, onPostSubmit }: IPostModal) => {
  const { inputValue, handleChange } = useInput({ name: "", lastname: "" });
  const { inputValue: inputPhone, handleChange: handleChangePhone } =
    useInputPhone({ phone: 3334445555, err: "" });

  return (
    <ModalContainer>
      <div className="form-close-icon">
        <CloseIcon onClick={onClose} width={15} height={15} />
      </div>

      <form
        onSubmit={(e) =>
          onPostSubmit(
            e,
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

        <SubmitButton textButton={"Aggiungi"} bgColor="bg-[#4169e1]" />
      </form>
    </ModalContainer>
  );
};

export default PostModal;

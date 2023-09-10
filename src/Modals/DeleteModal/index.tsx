import CancelButton from "../../components/Buttons/CancelButton";
import SubmitButton from "../../components/Buttons/SubmitButton";
import { Profile } from "../../types/data.type";
import ModalContainer from "../ModalContainer";
interface IModalDelete {
  title: string;
  confirmButtonText: string;
  exitButtonText: string;
  onClose: () => void;
  onDeleteSubmit: (e: React.FormEvent<HTMLFormElement>, id: string) => void;
  data: Profile;
}

const ModalDelete = ({
  confirmButtonText,
  exitButtonText,
  onClose,
  title,
  data,
  onDeleteSubmit,
}: IModalDelete) => {
  return (
    <ModalContainer>
      <form
        className="grid grid-cols-1 gap-[30px]"
        onSubmit={(e) => onDeleteSubmit(e, data.id)}
      >
        <h3 className="text-[24px] font-bold text-[#334253]">{title}</h3>
        <div className="grid grid-cols-2 gap-5 content-end">
          <CancelButton onClick={onClose} textButton={exitButtonText} />
          <SubmitButton textButton={confirmButtonText} bgColor="bg-red-700" />
        </div>
      </form>
    </ModalContainer>
  );
};

export default ModalDelete;

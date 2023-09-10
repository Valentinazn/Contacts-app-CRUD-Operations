import AddButton from "../../components/Buttons/AddButton";
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
        className="grid grid-cols-1 gap-[20px] h-[200px]"
        onSubmit={(e) => onDeleteSubmit(e, data.id)}
      >
        <h3 className="text-[24px]">{title}</h3>
        <div className="grid grid-cols-2 gap-5 content-end">
          <AddButton onClick={onClose} textButton={exitButtonText} />
          <SubmitButton textButton={confirmButtonText} bgColor="bg-red-700" />
        </div>
      </form>
    </ModalContainer>
  );
};

export default ModalDelete;

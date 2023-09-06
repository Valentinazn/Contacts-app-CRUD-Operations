import AddButton from "../../components/AddButton";
import SubmitButton from "../../components/SubmitButton";
import { IData } from "../../types/data.type";
import ModalContainer from "../ModalContainer";
interface IModalDelete {
  title: string;
  confirmButtonText: string;
  exitButtonText: string;
  onClose: () => void;
  onDeleteSubmit: (e: any, id: string) => void;
  data: IData;
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
          <SubmitButton textButton={confirmButtonText} />
        </div>
      </form>
    </ModalContainer>
  );
};

export default ModalDelete;

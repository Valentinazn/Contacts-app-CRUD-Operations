import AddIcon from "../../assets/svg/AddIcon";

interface IAddButton {
  onClick: (e: any) => void;
  textButton: string;
}

const AddButton = ({ onClick, textButton }: IAddButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover:bg-[#C5C6EF] inline-flex items-center gap-2 w-full max-w-[150px] bg-[#4169e1] rounded-lg text-white font-bold h-[48px] leading-6 p-3 text-sm"
    >
      <AddIcon width={20} height={20} fill={"white"} />
      {textButton}
    </button>
  );
};

export default AddButton;

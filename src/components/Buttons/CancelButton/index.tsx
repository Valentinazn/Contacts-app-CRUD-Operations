interface ISubmitButton {
  textButton: string;
  onClick: () => void;
}

const CancelButton = ({ textButton, onClick }: ISubmitButton) => {
  return (
    <button
      onClick={onClick}
      className="justify-self-center bg-[#67727E] rounded-lg text-white font-bold hover:opacity-60 w-full py-[10px] px-[20px] leading-6  "
    >
      {textButton}
    </button>
  );
};

export default CancelButton;

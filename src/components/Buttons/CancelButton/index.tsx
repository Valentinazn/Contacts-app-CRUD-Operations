interface ISubmitButton {
  textButton: string;
}

const CancelButton = ({ textButton }: ISubmitButton) => {
  return (
    <button
      type="submit"
      className="justify-self-center bg-red-700 rounded-lg text-white font-bold hover:opacity-5 w-full py-[10px] px-[20px] leading-6  "
    >
      {textButton}
    </button>
  );
};

export default CancelButton;

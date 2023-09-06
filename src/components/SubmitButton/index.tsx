interface ISubmitButton {
  textButton: string;
}

const SubmitButton = ({ textButton }: ISubmitButton) => {
  return (
    <button
      type="submit"
      className="justify-self-center bg-[#4169e1] rounded-lg text-white font-bold hover:bg-[#C5C6EF] w-full py-[10px] px-[20px] leading-6  "
    >
      {textButton}
    </button>
  );
};

export default SubmitButton;

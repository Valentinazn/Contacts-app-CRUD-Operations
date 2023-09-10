interface ISubmitButton {
  textButton: string;
  bgColor: string;
}

const SubmitButton = ({ textButton, bgColor }: ISubmitButton) => {
  return (
    <button
      type="submit"
      className={`justify-self-center ${bgColor} rounded-lg text-white font-bold hover:bg-[#C5C6EF] w-full py-[10px] px-[20px] leading-6  `}
    >
      {textButton}
    </button>
  );
};

export default SubmitButton;

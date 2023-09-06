interface IAddIcon {
  width: number;
  height: number;
  fill: string;
}

const AddIcon = ({ width, height, fill }: IAddIcon) => {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
    >
      <path
        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default AddIcon;

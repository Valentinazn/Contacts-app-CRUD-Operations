interface ICloseIcon {
  width: number;
  height: number;

  onClick: () => void;
}

const CloseIcon = ({ onClick, width, height }: ICloseIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      onClick={onClick}
      className="hover:opacity-60"
    >
      <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
    </svg>
  );
};

export default CloseIcon;

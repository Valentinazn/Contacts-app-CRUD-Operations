import "../style.css";
interface IModalContainer {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: IModalContainer) => {
  return (
    <div className="overlay">
      <div className="form-container lg:min-w-[375px]">{children}</div>
    </div>
  );
};

export default ModalContainer;

export interface IModalInputs {
  contactName: string;
  handleChangePhone: (e: any) => void;
  contactLastname: string;
  handleChange: (e: any) => void;
  contactPhone: {
    data: number;
    err: string;
  };
}

const ModalInputs = ({
  contactName,
  contactLastname,
  contactPhone,
  handleChange,
  handleChangePhone,
}: IModalInputs) => {
  return (
    <>
      <input
        name="name"
        type="text"
        id="name"
        required
        className="focus:outline-none placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-[#67727E] bg-transparent p-[5px]"
        value={contactName}
        onChange={handleChange}
        placeholder="Nome.."
      />
      <input
        name="lastname"
        type="text"
        id="lastname"
        required
        className="focus:outline-none placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-[#67727E] bg-transparent p-[5px]"
        value={contactLastname}
        onChange={handleChange}
        placeholder="Cognome..."
      />
      <input
        type="tel"
        name="phone"
        className="focus:outline-none placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-[#67727E] bg-transparent p-[5px]"
        pattern="^\d{10}$"
        value={contactPhone.data}
        onChange={handleChangePhone}
        placeholder="Cellulare..."
        required
      />

      <p className="text-[#ED6368] text-xs">
        {contactPhone.err ? `Err: Ci vogliono 10 caratteri numerici` : ""}
      </p>
    </>
  );
};

export default ModalInputs;

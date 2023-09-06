import SubmitButton from "../../components/SubmitButton";

export interface IModalInputs {
  contactName: string;
  onContactName: (e: any) => void;
  contactLastname: string;
  onContactLastname: (e: any) => void;
  contactPhone: {
    data: any;
    err: any;
  };
  onContactPhone: (e: any) => void;
}

const ModalInputs = ({
  contactName,
  contactLastname,
  contactPhone,
  onContactLastname,
  onContactName,
  onContactPhone,
}: IModalInputs) => {
  return (
    <>
      <input
        name="name"
        type="text"
        className="focus:outline-none placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-[#67727E] bg-transparent p-[5px]"
        value={contactName}
        onChange={(e) => onContactName(e)}
        placeholder="Nome.."
      />
      <input
        name="lastname"
        type="text"
        className="focus:outline-none placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-[#67727E] bg-transparent p-[5px]"
        value={contactLastname}
        onChange={(e) => onContactLastname(e)}
        placeholder="Cognome..."
      />
      <input
        type="tel"
        name="phone"
        className="focus:outline-none placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-[#67727E] bg-transparent p-[5px]"
        pattern="^\d{10}$"
        value={contactPhone.data}
        onChange={(e) => onContactPhone(e)}
        placeholder="Cellulare..."
        required
      />

      <p className="text-[#ED6368] text-xs">
        {contactPhone.err ? `Err: Ci vogliono 10 caratteri numerici` : ""}
      </p>
      <SubmitButton textButton={"Modifica"} />
    </>
  );
};

export default ModalInputs;

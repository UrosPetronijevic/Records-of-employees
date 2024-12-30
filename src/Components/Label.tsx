import { Employee } from "./Classes";

type LabelProps = {
  placeholder: string;
  type: string;
  value: any;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>; // Fu
  keyOf: any;
};

export default function Label({
  placeholder,
  type,
  value,
  setEmployee,
  keyOf,
}: LabelProps) {
  //////////////////////////////////////////////////////////////////////////
  const handleInputChange = (field: keyof Employee, value: any) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <label className="flex gap-1 flex-col">
      <input
        placeholder={placeholder}
        type={type}
        className="rounded-[.3rem] h-10 border-slate-300 border px-2"
        value={value}
        onChange={(e) =>
          handleInputChange(
            keyOf,
            type === "text" ? e.target.value : parseInt(e.target.value)
          )
        }
      />
    </label>
  );
}

import { Employee } from "./Classes";

type LabelProps<T extends keyof Employee> = {
  placeholder: string;
  type: "text" | "number";
  value: Employee[T];
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  keyOf: T;
};

export default function Label<T extends keyof Employee>({
  placeholder,
  type,
  value,
  setEmployee,
  keyOf,
}: LabelProps<T>) {
  const handleInputChange = (field: T, inputValue: string) => {
    // Parse the inputValue based on the expected type of the field
    const parsedValue =
      type === "number"
        ? (parseInt(inputValue) as Employee[T])
        : (inputValue as Employee[T]);

    setEmployee((prev) => ({
      ...prev,
      [field]: parsedValue,
    }));
  };

  return (
    <label className="flex gap-1 flex-col">
      <input
        placeholder={placeholder}
        type={type}
        className="rounded-[.3rem] h-10 border-slate-300 border px-2"
        value={value as string | number} // Type assertion to match input value type
        onChange={(e) => handleInputChange(keyOf, e.target.value)}
      />
    </label>
  );
}

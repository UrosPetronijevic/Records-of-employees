import { useState } from "react";
import { Employee } from "./Classes";

type NewMemberProps = {
  newMember: boolean;
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[]; // Array of Employee objects
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>; // Function to update employees state
};

export default function NewMember({
  newMember,
  setNewMember,
  employees,
  setEmployees,
}: NewMemberProps) {
  const [name, setName] = useState<string>("");

  return (
    <div className="absolute inset-0 bg-slate-500/90 flex justify-center items-center flex-col p-4 backdrop-blur-sm">
      <div className="w-[35%] h-[85%] bg-gradient-to-br from-blue-700 to-slate-800 flex flex-col p-1 items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
        <button
          className="text-red-500 text-3xl w-fit self-end py-1 px-2 rounded-lg"
          type="button"
          onClick={() => setNewMember((prev) => !prev)}
        >
          &#x2715;
        </button>

        <h1 className="text-5xl font-bold text-white">FORM</h1>

        <div className="h-max w-full">
          <form>
            <label className="flex gap-2 justify-start">
              IME:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="flex gap-2 justify-start">
              PREZIME
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="flex gap-2 justify-start">
              SAP:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

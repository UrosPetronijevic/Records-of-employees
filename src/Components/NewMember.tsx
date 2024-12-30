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
  const [employee, setEmployee] = useState<Employee>(
    new Employee(0, "", "", 0, "", "", 0, 0, 0, 0, 0, 0, 0, 0)
  );

  const handleInputChange = (field: keyof Employee, value: any) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setEmployees((prev) => [...prev, employee]);
  //   setNewMember(false);
  // };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Push the new employee object into the employees array
    setEmployees((prev) => [...prev, employee]);

    // Clear the form and close the modal
    setEmployee(new Employee(0, "", "", 0, "", "", 0, 0, 0, 0, 0, 0, 0, 0));
    setNewMember(false);
  };

  return (
    <div className="absolute inset-0 bg-slate-500/90 flex justify-center items-center flex-col p-4 backdrop-blur-sm">
      <div className="w-[35%] h-[85%] bg-gradient-to-br from-blue-700 to-slate-800 flex flex-col p-1 items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
        <button
          className="text-red-500 text-3xl w-fit self-end py-1 px-2 rounded-lg"
          type="button"
          onClick={() => setNewMember(false)}
        >
          &#x2715;
        </button>

        <h1 className="text-5xl font-bold text-white">FORM</h1>

        <form onSubmit={handleFormSubmit} className="h-max w-full">
          <label className="flex gap-2 justify-start">
            IME:
            <input
              type="text"
              value={employee.imeZaposlenog}
              onChange={(e) =>
                handleInputChange("imeZaposlenog", e.target.value)
              }
            />
          </label>

          <label className="flex gap-2 justify-start">
            PREZIME:
            <input
              type="text"
              value={employee.prezimeZaposlenog}
              onChange={(e) =>
                handleInputChange("prezimeZaposlenog", e.target.value)
              }
            />
          </label>

          <label className="flex gap-2 justify-start">
            SAP:
            <input
              type="number"
              value={employee.kadrovskiBroj}
              onChange={(e) =>
                handleInputChange("kadrovskiBroj", parseInt(e.target.value))
              }
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

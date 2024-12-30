import { useState } from "react";
import { Employee } from "./Classes";
import Label from "./Label";

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
    new Employee("", "", "", 0, "", "", 0, 0, 0, 0, 0, 0, 0, 0)
  );

  // const handleInputChange = (field: keyof Employee, value: any) => {
  //   setEmployee((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

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
    <div className="absolute inset-0 bg-slate-700/90 flex justify-center items-center flex-col p-4 backdrop-blur-sm">
      <div className="w-[35%] bg-white flex flex-col p-1 items-center shadow-[4.0px_4.0px_4.0px_4.0px_rgba(0,0,0,0.18)] rounded-lg backdrop-blur-sm">
        <button
          className="text-slate-700 text-3xl w-fit self-end py-1 px-2 rounded-lg"
          type="button"
          onClick={() => setNewMember(false)}
        >
          &#x2715;
        </button>

        <h1 className="text-5xl font-thin text-slate-700">FORM</h1>

        <div className="h-max w-full flex flex-col-reverse p-4">
          <form
            onSubmit={handleFormSubmit}
            className=" w-full flex flex-col h-full justify-between p-8 text-slate-700 "
          >
            <div className="flex flex-col justify-center h-max gap-10 text-[1rem] w-full">
              <Label
                placeholder={"Ime"}
                type={"text"}
                value={employee.imeZaposlenog}
                setEmployee={setEmployee}
                keyOf={"imeZaposlenog"}
              />

              <Label
                placeholder={"Prezime"}
                type={"text"}
                value={employee.prezimeZaposlenog}
                setEmployee={setEmployee}
                keyOf={"prezimeZaposlenog"}
              />

              <Label
                placeholder={"Sab br."}
                type={"number"}
                value={employee.kadrovskiBroj}
                setEmployee={setEmployee}
                keyOf={"kadrovskiBroj"}
              />

              {/* <label className="flex gap-1 flex-col">
                <input
                  placeholder="Sab br."
                  type="number"
                  className="rounded-[.3rem] h-10 border-slate-300 border px-2"
                  value={employee.kadrovskiBroj}
                  onChange={(e) =>
                    handleInputChange("kadrovskiBroj", parseInt(e.target.value))
                  }
                />
              </label> */}

              <div className="flex justify-between mt-4 text-white">
                <button type="submit" className="p-4 bg-indigo-500 rounded-md">
                  Dodatno Opt.
                </button>
                <button type="submit" className="p-4 bg-indigo-500 rounded-md">
                  Pripravnost
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-slate-800 text-white px-8 py-4 mt-10 rounded-[.5rem]"
            >
              Zavrsi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

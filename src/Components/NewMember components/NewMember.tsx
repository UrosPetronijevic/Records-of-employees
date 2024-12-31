import { useState } from "react";
import { Employee } from "../Utility Classes/Classes";
import Label from "./Label";

type NewMemberProps = {
  newMember: boolean;
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function NewMember({
  // newMember,
  setNewMember,
  // employees,
  setEmployees,
}: NewMemberProps) {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  function calculateWorkingHours(
    year: number,
    month: number,
    hoursPerDay: number = 8
  ): number {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let totalWorkingHours = 0;

    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      const dayOfWeek = day.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclude Sunday (0) and Saturday (6)
        totalWorkingHours += hoursPerDay;
      }
    }

    return totalWorkingHours;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [employee, setEmployee] = useState<Employee>(
    new Employee(
      "",
      "",
      "",
      calculateWorkingHours(year, month),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add new employee to the list
    setEmployees((prev) => [...prev, employee]);

    // Reset form and close modal
    setEmployee(new Employee(0, "", "", 0, 0, 0, 0, 0, 0, 0, 0, 0));
    setNewMember(false);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            className="w-full flex flex-col h-full justify-between p-8 text-slate-700"
          >
            <div className="flex flex-col justify-center h-max gap-10 text-[1rem] w-full">
              <Label
                placeholder="Ime"
                type="text"
                value={employee.imeZaposlenog}
                setEmployee={setEmployee}
                keyOf="imeZaposlenog"
              />

              <Label
                placeholder="Prezime"
                type="text"
                value={employee.prezimeZaposlenog}
                setEmployee={setEmployee}
                keyOf="prezimeZaposlenog"
              />

              <Label
                placeholder="Sab br."
                type="number"
                value={employee.kadrovskiBroj}
                setEmployee={setEmployee}
                keyOf="kadrovskiBroj"
              />

              <div className="flex justify-between mt-4 text-white">
                <button type="button" className="p-4 bg-indigo-500 rounded-md">
                  Dodatno Opt.
                </button>
                <button type="button" className="p-4 bg-indigo-500 rounded-md">
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

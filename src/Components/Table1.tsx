import { Employee } from "./Classes";

type Table1Props = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  newMember: boolean;
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[]; // Array of Employee objects
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>; // Function to update employees state
};

export default function Table1({
  absence,
  setAbsence,
  newMember,
  setNewMember,
  employees,
  setEmployees,
}: Table1Props) {
  const rows = 5;
  const columns = 13;

  const tableData = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: columns }, (_, colIndex) => ``)
  );
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            {Array.from({ length: columns }, (_, colIndex) => (
              <th
                key={`header-${colIndex}`}
                className="border border-gray-300 px-4 py-2 bg-gray-100"
              >
                Column {colIndex + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, colIndex) => (
                <td
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="border border-gray-300 px-4 py-2"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex bg-lime-200 flex-row-reverse">
        <button
          type="submit"
          className="bg-slate-500 rounded-md text-2xl p-2"
          onClick={() => {
            setNewMember(!newMember);
          }}
        >
          Novi clan
        </button>
      </div>
    </div>
  );
}

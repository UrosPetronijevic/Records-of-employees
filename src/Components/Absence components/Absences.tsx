import { AbsenceType } from "../Utility Classes/Classes";

type AbsenceProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  absenceTypes: AbsenceType[];
  setAbsenceTypes: React.Dispatch<React.SetStateAction<AbsenceType[]>>;
  selectedDays: number[];
  setSelectedDays: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Absences({
  setAbsence,
  absence,
  absenceTypes,
  setAbsenceTypes,
  selectedDays,
  setSelectedDays,
}: AbsenceProps) {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleAbsenceClick = (type: AbsenceType) => {
    type.setFunc((prev) => {
      // Create a new array by combining previous days and selectedDays
      const updatedArray = [...prev, ...selectedDays];

      // Remove duplicates by using a filter
      const uniqueArray = updatedArray.filter(
        (day, index) => updatedArray.indexOf(day) === index
      );

      return uniqueArray; // Return the updated array without duplicates
    });

    // Remove the selected days from all other absence types
    absenceTypes.forEach((absenceType) => {
      if (absenceType !== type) {
        absenceType.setFunc((prev) =>
          prev.filter((day) => !selectedDays.includes(day))
        );
      }
    });

    setSelectedDays([]); // Clear selectedDays after use
  };

  return (
    <div className="w-[35%] bg-purple-950/70 p-8 flex flex-col gap-10 rounded-lg backdrop-blur-sm">
      <h1 className="text-5xl font-bold self-center">Odsustva</h1>

      <ol className="h-full w-full flex flex-col text-2xl justify-center gap-5">
        {absenceTypes.map((type) => (
          <li
            key={type.type}
            className="flex justify-between bg-purple-950/30 p-4 rounded-md shadow-md"
            onClick={() => handleAbsenceClick(type)}
          >
            <span>{type.type}</span>
            <div className={`h-7 w-7 rounded-full ${type.color}`}></div>
          </li>
        ))}
      </ol>
    </div>
  );
}

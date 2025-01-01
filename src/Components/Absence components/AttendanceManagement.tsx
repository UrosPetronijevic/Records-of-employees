import { AbsenceType } from "../Utility Classes/Classes";
import Absences from "./Absences";
import Calendar from "./Calendar";

type AttendanceManagementProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  absenceTypes: AbsenceType[];
  setAbsenceTypes: React.Dispatch<React.SetStateAction<AbsenceType[]>>;
};

export default function AttendanceManagement({
  setAbsence,
  absence,
  absenceTypes,
  setAbsenceTypes,
}: AttendanceManagementProps) {
  return (
    <div
      className="absolute inset-0 bg-white text-white flex flex-col p-8 justify-center"
      onClick={() => {
        setAbsence(!absence);
      }}
    >
      <div className="flex justify-between">
        <Calendar />
        <Absences
          setAbsence={setAbsence}
          absence={absence}
          absenceTypes={absenceTypes}
          setAbsenceTypes={setAbsenceTypes}
        />
      </div>
    </div>
  );
}

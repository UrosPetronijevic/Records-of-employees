import Absences from "./Absences";
import Calendar from "./Calendar";

type AttendanceManagementProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
};

export default function AttendanceManagement({
  setAbsence,
  absence,
}: AttendanceManagementProps) {
  return (
    <div
      className="absolute inset-0 bg-white text-white flex flex-col p-8 justify-center"
      onClick={() => {
        setAbsence(!absence);
      }}
    >
      <div className="flex gap-4">
        <Calendar />
        <Absences setAbsence={setAbsence} absence={absence} />
      </div>
    </div>
  );
}

import { useState } from "react";
import { AbsenceType } from "../Utility Classes/Classes";
import Absences from "./Absences";
import Calendar from "./Calendar";

type AttendanceManagementProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  absenceTypes: AbsenceType[];
  setAbsenceTypes: React.Dispatch<React.SetStateAction<AbsenceType[]>>;
  selectedDays: number[];
  setSelectedDays: React.Dispatch<React.SetStateAction<number[]>>;
  // color: string;
  // setColor: React.Dispatch<React.SetStateAction<string>>; // Add setColor prop
};

export default function AttendanceManagement({
  setAbsence,
  absence,
  absenceTypes,
  setAbsenceTypes,
  selectedDays,
  setSelectedDays,
}: // color,
// setColor,
AttendanceManagementProps) {
  return (
    <div className="absolute inset-0 bg-white/90 text-white flex flex-col p-8 justify-center">
      <div className="flex justify-between">
        <Calendar
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          absenceTypes={absenceTypes}
          setAbsenceTypes={setAbsenceTypes}

          // setColor={setColor}
        />
        <Absences
          setAbsence={setAbsence}
          absence={absence}
          absenceTypes={absenceTypes}
          setAbsenceTypes={setAbsenceTypes}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </div>
    </div>
  );
}

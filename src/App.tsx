import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Table1 from "./Components/Table1";
import Table2 from "./Components/Table2";
import Table3 from "./Components/Table3";
import Table4 from "./Components/Table4";
import { useState } from "react";
import NewMember from "./Components/NewMember components/NewMember";
import { AbsenceType, Employee } from "./Components/Utility Classes/Classes";
import AttendanceManagement from "./Components/Absence components/AttendanceManagement";

export default function App() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Individual state sets
  const [godisnjiOdmorArr, setGodisnjiOdmorArr] = useState<Set<number>>(
    new Set()
  );

  const [placenoOdsustvo, setPlacenoOdsustvo] = useState<Set<number>>(
    new Set()
  );

  const [bolovanjeArr, setBolovanjeArr] = useState<Set<number>>(new Set());

  const [drzavniPraznikArr, setDrzavniPraznikArr] = useState<Set<number>>(
    new Set()
  );

  const [verskiPraznikArr, setVerskiPraznikArr] = useState<Set<number>>(
    new Set()
  );

  const [slavaArr, setSlavaArr] = useState<Set<number>>(new Set());

  // AbsenceType array
  const [absenceTypes, setAbsenceTypes] = useState<AbsenceType[]>([
    new AbsenceType("Godisnji Odmor", setGodisnjiOdmorArr, "bg-green-500"),
    new AbsenceType("Placeno odsustvo", setPlacenoOdsustvo, "bg-blue-500"),
    new AbsenceType("Bolovanje", setBolovanjeArr, "bg-yellow-500"),
    new AbsenceType("Drzavni praznik", setDrzavniPraznikArr, "bg-red-500"),
    new AbsenceType("Verski praznik", setVerskiPraznikArr, "bg-purple-500"),
    new AbsenceType("Slava", setSlavaArr, "bg-orange-500"),
  ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [employees, setEmployees] = useState<Employee[]>([]);

  const [newMember, setNewMember] = useState<boolean>(false);

  const [absence, setAbsence] = useState<boolean>(false);

  return (
    <div className=" font-bold text-slate-700">
      <Router>
        <Navigation />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/table1" />} />
            <Route
              path="/table1"
              element={
                <Table1
                  setAbsence={setAbsence}
                  absence={absence}
                  newMember={newMember}
                  setNewMember={setNewMember}
                  employees={employees}
                  setEmployees={setEmployees}
                />
              }
            />
            <Route path="/table2" element={<Table2 />} />
            <Route path="/table3" element={<Table3 />} />
            <Route path="/table4" element={<Table4 />} />
          </Routes>
        </main>
      </Router>

      {absence && (
        <AttendanceManagement
          setAbsence={setAbsence}
          absence={absence}
          absenceTypes={absenceTypes}
          setAbsenceTypes={setAbsenceTypes}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      )}
      {newMember && (
        <NewMember
          newMember={newMember}
          setNewMember={setNewMember}
          employees={employees}
          setEmployees={setEmployees}
        />
      )}
    </div>
  );
}

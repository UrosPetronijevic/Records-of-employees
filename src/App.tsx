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
import Absences from "./Components/Absences";

export default function App() {
  const [employees, setEmployees] = useState();

  const [newMember, setNewMember] = useState<boolean>(false);

  const [absence, setAbsence] = useState<boolean>(false);

  return (
    <div className=" font-bold text-cyan-300">
      <Router>
        <Navigation />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/table1" />} />
            <Route
              path="/table1"
              element={<Table1 setAbsence={setAbsence} absence={absence} />}
            />
            <Route path="/table2" element={<Table2 />} />
            <Route path="/table3" element={<Table3 />} />
            <Route path="/table4" element={<Table4 />} />
          </Routes>
        </main>
      </Router>

      {absence ? <Absences /> : ""}
    </div>
  );
}

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

export default function App() {
  return (
    <div className="text-7xl font-bold text-cyan-300">
      <Router>
        <Navigation />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/table1" />} />
            <Route path="/table1" element={<Table1 />} />
            <Route path="/table2" element={<Table2 />} />
            <Route path="/table3" element={<Table3 />} />
            <Route path="/table4" element={<Table4 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/table1" className="hover:underline">
        Table 1
      </Link>
      <Link to="/table2" className="hover:underline">
        Table 2
      </Link>
      <Link to="/table3" className="hover:underline">
        Table 3
      </Link>
      <Link to="/table4" className="hover:underline">
        Table 4
      </Link>
    </nav>
  );
}

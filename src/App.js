
import "./App.css";

import Sidebar from "./components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { DashBoard } from "./pages/Dashboard";
import {
  Attendance,
} from "./pages/Attendance";
import Leave from "./pages/Leave";
import Salary from "./pages/Salary";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";
import AddEmployee from "./pages/AddEmployee";
import AddPayroll from "./pages/AddPayroll";

function App() {
	return (
		<Router>
			
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/attendance"
					element={<Attendance />}
				/>
				<Route
					path="/leave"
					element={<Leave />}
				/>
				
				<Route
					path="/salary"
					element={<Salary />}
				/>
				
				<Route
					path="/Dashboard"
					element={<DashBoard />}
				/>
				<Route
				path="/Admin"
				element={<Admin />}
				/>
				<Route
				path="/Logout"
				element={<Logout />}
				/>
				<Route
				path="/AddEmployee"
				element={<AddEmployee />}
				/>
				<Route
				path="/AddPayroll"
				element={<AddPayroll />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MoneyManagement from "./pages/MoneyManagement";
import TimeManagement from "./pages/TimeManagement";
import SkillManagement from "./pages/SkillManagement";
import Top from "./pages/Top";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Top />} />
				<Route path="money-management" element={<MoneyManagement />} />
				<Route path="time-management" element={<TimeManagement />} />
				<Route path="work-experience-management" element={<TimeManagement />} />
				<Route path="skill-management" element={<SkillManagement />} />
			</Routes>
		</Router>
	);
}

export default App;

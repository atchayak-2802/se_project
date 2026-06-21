import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import StudentRegister from "./pages/StudentRegister";
import StaffRegister from "./pages/StaffRegister";
import AdminDashboard from "./pages/AdminDashboard";
import AddStudent from "./pages/AddStudent";
import AddStaff from "./pages/AddStaff";
import AddTimetable from "./pages/AddTimetable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/staff-register" element={<StaffRegister />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-staff" element={<AddStaff />} />
        <Route path="/add-timetable" element={<AddTimetable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

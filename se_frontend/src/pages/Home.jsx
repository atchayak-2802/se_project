import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-5xl">

        <h1 className="text-4xl font-bold text-center text-slate-800">
          QR Attendance System
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Smart Attendance Management System
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Link to="/admin-login">
            <div className="bg-blue-600 text-white p-8 rounded-2xl text-center hover:scale-105 transition">
              <h2 className="text-2xl font-bold">Admin</h2>
              <p className="mt-2">Manage Students & Timetable</p>
            </div>
          </Link>

          <Link to="/student-register">
            <div className="bg-green-600 text-white p-8 rounded-2xl text-center hover:scale-105 transition">
              <h2 className="text-2xl font-bold">Student</h2>
              <p className="mt-2">Register Student Details</p>
            </div>
          </Link>

          <Link to="/staff-register">
            <div className="bg-purple-600 text-white p-8 rounded-2xl text-center hover:scale-105 transition">
              <h2 className="text-2xl font-bold">Staff</h2>
              <p className="mt-2">Register Staff Details</p>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Home;
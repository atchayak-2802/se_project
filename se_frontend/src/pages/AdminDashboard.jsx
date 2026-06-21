function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="bg-blue-700 text-white p-5">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Students
          </h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Add Student
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Staff
          </h2>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Add Staff
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Timetable
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add Timetable
          </button>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;

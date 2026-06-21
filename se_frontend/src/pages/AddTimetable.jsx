
function AddTimetable() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          Add Timetable
        </h2>

        <input
          type="text"
          placeholder="Department"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="text"
          placeholder="Year"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
          Add Timetable
        </button>

      </div>
    </div>
  );
}

export default AddTimetable;

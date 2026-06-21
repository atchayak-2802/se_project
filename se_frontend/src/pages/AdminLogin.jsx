import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default AdminLogin;

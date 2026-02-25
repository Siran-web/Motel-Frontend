import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ApiService from "../../services/ApiService";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || '/home';


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            setTimeout(() => setError(''), 5000);
            return;
        }

        try {
            const response = await ApiService.loginUser({email, password});
            if (response.statusCode === 200) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('role', response.role);
                navigate(from, { replace: true });
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login
      </h2>

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <a
          href="/register"
          className="text-blue-600 font-medium hover:underline"
        >
          Register
        </a>
      </p>
    </div>
  </div>
);
}

export default LoginPage;

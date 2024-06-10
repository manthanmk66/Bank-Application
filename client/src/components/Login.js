import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const handleCustomerLogin = (event) => {
    event.preventDefault();
    // Handle customer login logic here
    navigate("/dashboard");
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();
    // Handle admin login logic here
    navigate("/adminDashboard");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="login-container p-8 border border-gray-300 rounded-lg bg-white">
        <h1 className="text-2xl font-bold text-blue-900 mb-8">Login</h1>
        <div className="tabs mb-8">
          <button
            className={`tab-button ${
              !isAdmin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } rounded-l-md focus:outline-none`}
            onClick={() => setIsAdmin(false)}
          >
            Customer Login
          </button>
          <button
            className={`tab-button ${
              isAdmin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } rounded-r-md focus:outline-none`}
            onClick={() => setIsAdmin(true)}
          >
            Admin Login
          </button>
        </div>

        {!isAdmin ? (
          <form onSubmit={handleCustomerLogin}>
            <div className="form-group mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <div className="create-account mt-4">
              <p>
                Don't have an account?{" "}
                <Link to="/registration" className="text-blue-500">
                  Create one
                </Link>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleAdminLogin}>
            <div className="form-group mb-4">
              <label
                htmlFor="adminId"
                className="block text-gray-700 font-bold mb-2"
              >
                Admin ID:
              </label>
              <input
                type="text"
                id="adminId"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="adminPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="adminPassword"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        )}

        <footer className="footer mt-8">
          <p>&copy; 2024 Krasv Bank. All rights reserved.</p>
          <div className="footer-links mt-2">
            <Link to="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-blue-500 ml-4">
              Terms of Service
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;

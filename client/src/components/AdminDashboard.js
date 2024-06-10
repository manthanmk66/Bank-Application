import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    navigate("/");
  };

  return (
    <div className="dashboard-container font-sans">
      <header className="dashboard-header bg-gray-100 border-b border-gray-300 flex justify-end p-4">
        <button
          onClick={handleLogout}
          className="logout-button px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
        >
          Logout
        </button>
      </header>
      <div className="dashboard-content p-4">
        <h1 className="text-blue-500">Customer Management</h1>
        <p>Manage customer accounts and activities here.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
        <h1 className="text-xl">Welcome to Krasv Bank</h1>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Logout
        </Link>
      </header>
      <div className="flex flex-1">
        <div className="w-1/5 p-4 bg-gray-100 border-r border-gray-300">
          <ul>
            <li>
              <Link
                to="/amount-transfer"
                className="text-blue-500 hover:underline"
              >
                Amount Transfer
              </Link>
            </li>
            <li>
              <Link
                to="/credit-history"
                className="text-blue-500 hover:underline"
              >
                Credit History
              </Link>
            </li>
            <li>
              <Link
                to="/debit-history"
                className="text-blue-500 hover:underline"
              >
                Debit History
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-4/5 p-4">
          <img src="/images/account.png" alt="Dashboard" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

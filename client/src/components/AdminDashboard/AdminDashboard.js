import React, { useState } from "react";

const AdminDashboard = () => {
  // Dummy data for users and transactions
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      accountNumber: "123456789",
      balance: "5000.00",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      accountNumber: "987654321",
      balance: "2500.00",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      accountNumber: "456789123",
      balance: "10000.00",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      accountNumber: "456789123",
      balance: "10000.00",
    },
    {
      id: 4,
      name: "Bob Johnson",
      email: "bob@example.com",
      accountNumber: "456789123",
      balance: "10000.00",
    },
    {
      id: 5,
      name: "Bob Johnson",
      email: "bob@example.com",
      accountNumber: "456789123",
      balance: "10000.00",
    },
    {
      id: 6,
      name: "Bob Johnson",
      email: "bob@example.com",
      accountNumber: "456789123",
      balance: "10000.00",
    },
    {
      id: 7,
      name: "Bob Johnson",
      email: "bob@example.com",
      accountNumber: "456789123",
      balance: "10000.00",
    },
  ]);

  const transactions = [
    { date: "2024-06-10", description: "Groceries", amount: -50.0 },
    { date: "2024-06-09", description: "Salary", amount: 2000.0 },
    { date: "2024-06-08", description: "Dinner", amount: -30.0 },
    { date: "2024-06-07", description: "Gasoline", amount: -40.0 },
    { date: "2024-06-06", description: "Utilities", amount: -100.0 },
    { date: "2024-06-05", description: "Coffee", amount: -5.0 },
    { date: "2024-06-04", description: "Movie tickets", amount: -20.0 },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  // Function to handle user selection
  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  // Function to handle editing user details
  const handleEditUser = (userId, updatedData) => {
    // Update user details
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, ...updatedData } : user
      )
    );
    // Clear selected user and edited user
    setSelectedUser(null);
    setEditedUser(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Main content */}
      <main className="flex-1 p-6">
        {/* User details */}
        <div className="mb-6">
          {/* Table header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">User Details</h2>
            {/* Search and filter buttons */}
            <div className="flex items-center gap-4">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs"
                placeholder="Search users..."
                type="search"
                value=""
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Filter
              </button>
            </div>
          </div>
          {/* User table */}
          <div className="overflow-x-auto">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-1xl">
                <thead>
                  <tr>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground cursor-pointer">
                      Name <span className="ml-2">↑</span>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Email
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Account Number
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">
                      Balance
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over users data */}
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="p-4 align-middle">{user.name}</td>
                      <td className="p-4 align-middle">{user.email}</td>
                      <td className="p-4 align-middle">{user.accountNumber}</td>
                      <td className="p-4 align-middle text-right">
                        {user.balance}
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                            onClick={() => handleUserSelect(user.id)}
                          >
                            Edit
                          </button>
                          {/* Add delete button if needed */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold">User Transactions</h2>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                  <div>
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      John Doe
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Account Number: 123456789
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 mr-2"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                      Filter
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 mr-2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full caption-bottom text-1xl">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 cursor-pointer">
                          Date
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 cursor-pointer">
                          Description
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 cursor-pointer text-right">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      {transactions.map((transaction, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {transaction.date}
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {transaction.description}
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                            {transaction.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Edit User Details section */}
        {/* Transaction section */}
      </main>
    </div>
  );
};

export default AdminDashboard;

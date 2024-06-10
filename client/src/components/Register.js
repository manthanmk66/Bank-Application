import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    customerId: "",
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
    aadharNumber: "",
    panNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 mt-20">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 font-bold mb-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="aadharNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Aadhar Number
          </label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="panNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
      <footer className="mt-8">
        <p className="text-center text-gray-600">
          &copy; 2024 Krasv Bank. All rights reserved.
        </p>
        <div className="flex justify-center mt-2">
          <a href="/privacy-policy" className="text-blue-500 mr-4">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-blue-500">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Register;

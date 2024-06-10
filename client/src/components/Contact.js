import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form data submitted:", formData);
  };

  return (
    <div className="max-w-6xl  mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-center text-blue-900 mb-4">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">
        At Krasv Bank, we value your feedback and inquiries. Whether you have a
        question about our services, need assistance, or want to provide
        feedback, our team is here to help you. Please fill out the form below
        to get in touch with us.
      </p>
      <div className="flex items-center justify-center flex-wrap gap-8 mb-8">
        <div className="w-full md:w-1/2 ">
          <h3 className="text-lg flex items-center justify-center text-blue-900 mb-2">
            Our Contact Information
          </h3>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 1234 Bank Street, Financial City, Country
            <br />
            <strong>Phone:</strong> +1 234 567 890
            <br />
            <strong>Email:</strong> support@krasvbank.com
          </p>
          <h3 className="text-lg text-blue-900 mb-2">Business Hours</h3>
          <p className="text-gray-600">
            <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
            <br />
            <strong>Saturday:</strong> 10:00 AM - 2:00 PM
            <br />
            <strong>Sunday:</strong> Closed
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-lg text-blue-900 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <label htmlFor="email" className="block text-gray-700 font-bold">
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
            <label htmlFor="subject" className="block text-gray-700 font-bold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded resize-none h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <div className="header-image">
        <img src="/images/logo.png" alt="Header" />
      </div>

      <div className="info-section flex items-center justify-center gap-8 py-12">
        <img src="/images/savings.jpg" alt="Header" className="w-1/3" />
        <div className="info-box">
          <h2 className="text-2xl font-bold mb-4">
            Benefits of Creating an Account
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>24/7 Customer Support</li>
            <li>Easy Account Setup</li>
            <li>High Security</li>
            <li>Mobile Banking</li>
            <li>Debit Card Delivery</li>
          </ul>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="additional-image">
        <img src="/images/logo3.jpg" alt="Header" />
      </div>

      <div className="three-sections flex items-center justify-around py-12">
        <div className="section-box">
          <h2 className="text-2xl font-bold mb-4">A Bank That Cares</h2>
          <p>We listen to your needs,</p>
          <p>
            understand your ambitions and support your plans so you can succeed
            and be happy.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Learn More
          </button>
        </div>
        <div className="section-box">
          <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
          <p>Discover the benefits of becoming a Krasv Bank customer.</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Join Us
          </button>
        </div>
        <div className="section-box">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p>Contact us for any inquiries or support.</p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">KRASV BANK</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="flex items-center hover:text-blue-300">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center hover:text-blue-300">
              <FaInfoCircle className="mr-1" /> About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center hover:text-blue-300"
            >
              <FaEnvelope className="mr-1" /> Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center hover:text-blue-300">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex items-center hover:text-blue-300"
            >
              <FaUserPlus className="mr-1" /> Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

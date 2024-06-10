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
    <header className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center">
      <h1 className="text-xl">KRASV BANK</h1>
      <nav>
        <ul className="flex">
          <li className="mx-2">
            <Link to="/" className="flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/about" className="flex items-center">
              <FaInfoCircle className="mr-1" /> About
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/contact" className="flex items-center">
              <FaEnvelope className="mr-1" /> Contact
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/login" className="flex items-center">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/register" className="flex items-center">
              <FaUserPlus className="mr-1" /> Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

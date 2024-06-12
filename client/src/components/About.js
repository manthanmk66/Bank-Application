import React from "react";

const About = () => {
  return (
    <div className="about-container max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl mb-6 text-blue-900 border-b-2 border-blue-900 pb-2">
        About Krasv Bank
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Founded in 2000, Krasv Bank has been a pillar of trust and reliability
        in the banking industry for over two decades. Our mission is to provide
        comprehensive financial solutions that empower individuals and
        businesses to achieve their financial goals.
      </p>
      <div className="mb-8">
        <h3 className="mb-4 text-2xl text-blue-900 border-b border-blue-900 pb-2">
          Our Vision
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          At Krasv Bank, our vision is to be the most trusted and innovative
          financial institution, creating lasting value for our customers,
          employees, and stakeholders. We aim to foster financial inclusion and
          contribute to the economic growth of the communities we serve.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="mb-4 text-2xl text-blue-900 border-b border-blue-900 pb-2">
          Our Services
        </h3>
        <ul className="mb-6 text-lg list-disc pl-6">
          <li className="mb-2">
            <strong>Personal Banking:</strong> Tailored solutions for your
            savings, loans, and daily banking needs.
          </li>
          <li className="mb-2">
            <strong>Business Banking:</strong> Comprehensive services to support
            your business growth and financial management.
          </li>
          <li className="mb-2">
            <strong>Investment Services:</strong> Expert advice and investment
            options to grow your wealth.
          </li>
          <li className="mb-2">
            <strong>Digital Banking:</strong> Convenient and secure online
            banking services at your fingertips.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="mb-4 text-2xl text-blue-900 border-b border-blue-900 pb-2">
          Our Commitment
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          We are committed to maintaining the highest standards of integrity,
          transparency, and customer service. Our dedicated team of
          professionals works tirelessly to ensure that our customers receive
          personalized and efficient banking experiences.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="mb-4 text-2xl text-blue-900 border-b border-blue-900 pb-2">
          Corporate Responsibility
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          Krasv Bank believes in giving back to the community. Through various
          CSR initiatives, we support education, healthcare, and environmental
          sustainability projects, aiming to make a positive impact on society.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-2xl text-blue-900 border-b border-blue-900 pb-2">
          Join Us
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          Become a part of the Krasv Bank family and experience banking like
          never before. Whether you are looking to manage your personal finances
          or grow your business, we have the right solutions for you. Visit our
          branches or explore our digital banking platform to get started.
        </p>
      </div>
    </div>
  );
};

export default About;

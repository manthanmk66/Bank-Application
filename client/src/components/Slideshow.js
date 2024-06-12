import React, { useState, useEffect } from "react";

const images = [
  "images/logo.png", // Replace with your actual image paths
  "images/logo2.png",
  "images/logo3.jpg",
  // Add more images as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 md:w-full mx-auto overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide absolute w-full top-0 left-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

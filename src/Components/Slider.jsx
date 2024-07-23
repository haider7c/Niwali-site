import React, { useState, useEffect } from "react";
import hbanner from "../assets/home-banner1.svg";

const images = [hbanner, hbanner, hbanner, hbanner];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto px-6 py-20 overflow-hidden ">
      <div className="relative h-40 sm:h-60 md:h-80 lg:h-96 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;

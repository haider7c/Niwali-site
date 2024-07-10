import React, { useState } from "react";
import FramSlidStr from "./FramSlidStr";
import { useSelector } from "react-redux";

function FramSlider() {
  const product = useSelector((state) => state.Products.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % product.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + product.length) % product.length
    );
  };

  return (
    <div>
      <div className="mt-4 flex justify-between px-20 py-5">
        <div>
          <h1 className="text-3xl font-bold">Latest</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300"
          >
            &#8594;
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 gap-4">
          {product
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item) => (
              <FramSlidStr key={item.id} frame={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FramSlider;

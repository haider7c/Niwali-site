import React, { useState } from "react";
import PSliderCard from "./PSliderCard";
import { useSelector } from "react-redux";
import Cards from "./Cards";

function ProductSlider() {
  const products = useSelector((state) => state.Products.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % products.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + products.length) % products.length
    );
  };

  return (
    <div>
      <div className="mt-4 flex justify-between px-20 py-5">
        <div>
          <div className="flex items-center gap-1">
            <div className="bg-[#0A8746] h-[25px] w-[15px] rounded-l-full"></div>
            <h1 className="text-3xl font-bold">Explore Our Products</h1>
          </div>
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
          {products
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((product) => (
              <Cards
                key={product.id}
                id={product.id}
                cardImg={product.cardImg}
                prodname={product.prodname}
                price={product.price}
                orders={product.orders}
                discount={product.discount}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;

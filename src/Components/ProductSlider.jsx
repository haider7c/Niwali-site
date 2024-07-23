import React, { useState } from "react";
import PSliderCard from "./PSliderCard";
import { useSelector } from "react-redux";
import Cards from "./Cards";

function ProductSlider() {
  const products = useSelector((state) => state.Products.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + productsPerPage) % products.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - productsPerPage + products.length) % products.length
    );
  };

  return (
    <div>
      <div className=" flex justify-between my-5">
        <div>
          <div className="flex products-center gap-1">
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
      <div className="flex flex-wrap justify-center gap-5 my-6 sm:w-1/3 lg:w-full">
        {products
          .slice(currentIndex, currentIndex + productsPerPage)
          .map((product) => (
            <Cards
              id={product.id}
              cardImg={product.image_url + product.prod_image}
              prodname={product.prodname}
              price={(Number(product.rate) + 10).toFixed(2)}
              orders={product.purchase_rate}
              discount={product.rate}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductSlider;

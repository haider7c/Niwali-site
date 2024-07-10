import React from "react";
import PropTypes from "prop-types";
import star from "../assets/fiveStar.svg";

const PSliderCard = ({ product }) => {
  return (
    <div className="max-w-[300px] rounded-lg border shadow-md border-gray-300">
      <div>
        <img
          src={product.cardImg}
          alt={product.prodname}
          className="h-[260px] w-full object-cover"
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h2 className="">{product.prodname}</h2>
        <div className="flex gap-3">
          <span className="text-blue-500 font-semibold">
            {product.discount}
          </span>
          <span className="line-through">{product.price}</span>
        </div>
        <div className="flex gap-3">
          <img src={star} alt="star" />
          <span>({product.orders})</span>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-green-700 py-2 px-9 rounded-md text-white font-bold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

PSliderCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PSliderCard;

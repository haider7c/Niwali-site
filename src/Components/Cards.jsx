import React, { useState, useEffect } from "react";
import star from "../assets/fiveStar.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartReducer";
import toast from "react-hot-toast";

const Cards = ({ id, cardImg, prodname, price, orders, discount }) => {
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);

  const addProductCart = () => {
    const payload = {
      id,
      cardImg,
      prodname,
      discount: parseInt(discount),
      orders,
      quantity: 1,
    };
    dispatch(addToCart(payload));
    toast.success("Added To Cart Successfully");
    setAdded(true);
  };

  const addedItems = useSelector((state) => state.Cart.addedItems);

  useEffect(() => {
    if (addedItems && addedItems.includes(id)) {
      setAdded(true);
    }
  }, [addedItems, id]);

  return (
    <div
      className="max-w-[300px] rounded-lg border shadow-md border-gray-300"
      id={id}
    >
      <div>
        <Link to={`/productdet/${id}`}>
          <img src={cardImg} alt="" className="h-[260px] w-full object-cover" />
        </Link>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h2 className="">{prodname}</h2>
        <div className="flex gap-3">
          <span className="text-blue-500 font-semibold">${discount}</span>
          <span className="line-through">{price}</span>
        </div>
        <div className="flex gap-3">
          <img src={star} alt="" />
          <span>({orders})</span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-700 py-2 px-9 rounded-md text-white font-bold"
            onClick={addProductCart}
            disabled={added}
          >
            {added ? <h1>Added To Cart</h1> : <h1>Add To Cart</h1>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

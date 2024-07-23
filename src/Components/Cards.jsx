import React from "react";
import star from "../assets/fiveStar.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartReducer";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import toast from "react-hot-toast";

const Cards = ({ id, cardImg, prodname, price, orders, discount }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useSelector((item) => item.Cart);

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
  };

  return (
    <div
      className=" rounded-lg border shadow-md border-gray-300 h-[20rem] md:h-[30rem] w-[10rem] md:w-[20rem] lg:h-[28rem]"
      id={id}
    >
      <div className=" ">
        <Link to={`/productdet/${id}`}>
          <img
            src={cardImg}
            alt={prodname}
            className="mx-auto w-full md:h-[18rem] h-[9rem] rounded-md"
          />
        </Link>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h2 className="">{prodname}</h2>
        <div className="flex gap-3">
          <span className="text-blue-500 font-semibold">${discount}</span>
          <span className="line-through">{price}</span>
        </div>
        <div className="flex gap-3">
          <img src={star} alt="Rating" />
          <span>({orders})</span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-700 py-2 px-2 md:px-9 rounded-md text-white font-bold"
            onClick={() => {
              !cartItems.find((item) => item.id === id) && addProductCart();
            }}
          >
            {cartItems.find((item) => item.id === id) ? (
              <LiaCartArrowDownSolid size={30} />
            ) : (
              <h1>Add To Cart</h1>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

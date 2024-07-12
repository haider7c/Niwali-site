import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/features/cartReducer";

const CartProduct = ({
  id,
  cardImg,
  prodname,
  price,
  orders,
  discount,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const subTotal = quantity * discount;

  return (
    <div className="flex flex-row py-1 justify-between rounded-md items-center pr-5">
      <div className="flex items-center border shadow-md px-5 py-2 gap-3 rounded-md ">
        <img src={cardImg} alt="img" className="h-[50px] rounded-md" />
        <div className="relative">
          <AiTwotoneDelete
            className="cursor-pointer absolute right-0 mt-[3px] mr-[-16px] text-red-700"
            onClick={() => dispatch(removeFromCart({ id }))}
            size={20}
          />
        </div>
      </div>
      <p className="text-[14px] mr-10">${discount}</p>
      <div className="flex border p-1 gap-5 items-center rounded-md">
        <p className="text-[14px] mx-2">{quantity}</p>
        <div className="flex flex-col">
          <IoIosArrowUp
            className="cursor-pointer"
            onClick={() => dispatch(incrementQuantity({ id }))}
          />
          <IoIosArrowDown
            className="cursor-pointer"
            onClick={() => dispatch(decrementQuantity({ id }))}
          />
        </div>
      </div>
      <p className="text-[14px] text-gray-600">$ {subTotal.toFixed(2)}</p>
    </div>
  );
};

export default CartProduct;

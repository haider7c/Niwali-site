import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
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
    <div className="flex flex-row py-2 px-5 border justify-between">
      <img src={cardImg} alt="img" className="h-[40px] rounded-full" />
      <p className="text-[14px] text-gray-600">${discount}</p>
      <div className="flex border p-1 gap-3 items-center ">
        <p className="text-[14px] text-gray-600">{quantity}</p>
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
      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart({ id }))}
      />
    </div>
  );
};

export default CartProduct;

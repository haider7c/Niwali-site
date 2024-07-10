import React, { useState } from "react";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";
import fourstar from "../../assets/fourstar.png";
import deli1 from "../../assets/deli1.svg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartReducer";
import { Toaster } from "react-hot-toast";

import toast from "react-hot-toast";
// import { Cart } from "../../Components/Cart";
const Productdet = () => {
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const { products } = useSelector((state) => state.Products);

  const findProduct = products.find((product) => product.id == productId);

  const dispatch = useAppDispatch();
  const addProductCart = () => {
    dispatch(addToCart({ ...findProduct, quantity: count }));
    toast.success("Added To Cart Successfully");
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    // Main Div
    <div className="mt-20">
      <Nbar />
      {/* {showCart && <Cart setShowCart={setShowCart} />} */}
      {/* 2 Sections Div */}
      <div className="flex justify-center items-center gap-10 py-11">
        {/* Section 1 */}
        <div className="flex flex-col w-[400px] h-[500px] bg-cardbg shadow-lg justify-center items-center border">
          <img
            src={findProduct.cardImg}
            alt=""
            className="w-[200px] h-[300px] rounded-md"
          />
        </div>
        {/* Section 2 */}
        <div className="flex flex-col w-[400px] h-[500px]">
          <h1 className="text-xl font-bold">{findProduct.prodname}</h1>
          <div className="flex gap-2 items-center">
            <img src={fourstar} alt="" />
            <h3 className="text-gray-500">({findProduct.orders} Reviews) | </h3>
            <h3 className="text-green-700 text-xl">In stock</h3>
          </div>
          <h1 className="text-3xl py-2">${findProduct.discount}</h1>
          <p>{findProduct.description}</p>
          <hr className="my-5" />
          <div className="flex justify-between text-xl">
            <h1 className="font-bold">SubTotal</h1>
            <h1 className="font-semibold">${findProduct.discount * count}</h1>
          </div>

          <div className="flex items-center justify-start gap-10">
            <div className="h-[40px] w-[130px] flex justify-between border items-center my-5">
              <button
                className="border-l w-[30px] h-full bg-green-800 text-white"
                onClick={decrementCount}
              >
                -
              </button>
              <h1>{count}</h1>
              <button
                className="border-r w-[30px] h-full bg-green-800 text-white"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
            <div>
              <button
                className="h-[40px] w-[150px] border text-white bg-green-800 rounded-md"
                onClick={addProductCart}
              >
                Add Cart
              </button>
            </div>
          </div>
          <button className="w-[190px] py-2 border text-white bg-green-800 rounded-md">
            Order Via Whatsapp{" "}
          </button>
          {/* Last part of 2nd section main div */}
          <div className="h-[200px] w-[300px] border flex gap-7 p-2 mt-5 shadow-dm">
            <img src={deli1} alt="" />
            <div>
              <h1 className="">Free Delivery</h1>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="Bottom-center" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default Productdet;

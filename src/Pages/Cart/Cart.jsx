import React from "react";
import CartProduct from "../../Layouts/CartProduct";
import { useSelector } from "react-redux";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.Cart);
  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.discount * item.quantity;
    });
    return total.toFixed(2); // Ensures the total is displayed with two decimal places
  };
  const getTaxedTotal = () => {
    const total = parseFloat(getTotal());
    const tax = total * 0.1; // 10% tax
    return (total + tax).toFixed(2);
  };

  return (
    <div>
      <Nbar />
      <div className="pt-6 mt-20 mx-20 flex gap-2 items-center">
        <h3 className="text-black text-3xl font-semibold uppercase ">
          My Cart
        </h3>
        <PiShoppingCartSimpleDuotone size={25} />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between gap-20 my-10 ">
          <div className="flex justify-center">
            <div className="w-[800px] bg-white">
              <div className="flex flex-row py-2 px-5 border justify-between shadow-md rounded-md">
                <h1 className="font-semibold">Product</h1>
                <h1 className="font-semibold">Price</h1>
                <h1 className="font-semibold">Quantity</h1>
                <h1 className="font-semibold">Subtotal</h1>
              </div>
              <div className="mt-6 space-y-2 mb-5">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <CartProduct
                      key={item.id}
                      id={item.id}
                      cardImg={item.cardImg}
                      prodname={item.prodname}
                      price={item.price}
                      discount={item.discount}
                      orders={item.orders}
                      quantity={item.quantity}
                    />
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <Link className="p-3 border shadow-md rounded-md" to={"/"}>
                Return To Shop
              </Link>
            </div>
          </div>
          <div className="h-[300px] w-[300px] border p-10 rounded-md shadow-2xl">
            <h1 className="font-semibold">Cart Total</h1>
            <div className="flex justify-between mt-5">
              <h2>Subtotal:</h2>
              <span>${getTotal()}</span>
            </div>
            <hr className="m-2" />
            <div className="flex justify-between">
              <h2>Tax:</h2>
              <span>10%</span>
            </div>
            <hr className="m-2" />
            <div className="flex justify-between">
              <h2>Total:</h2>
              <span>${getTaxedTotal()}</span>
            </div>
            <div className="flex justify-center mb-5">
              <Link
                to={"/checkout"}
                className="px-3 py-1 text-white rounded-md mt-8 bg-[#2f8747]"
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* //////////  */}

      <Footer />
    </div>
  );
};

export default Cart;

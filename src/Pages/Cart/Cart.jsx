import React from "react";
import CartProduct from "../../Layouts/CartProduct";
import { useSelector } from "react-redux";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";
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
      <div className=" mt-10 flex justify-center">
        <div className=" w-[950px] bg-white p-6">
          <h3 className="text-black pt-6 text-lg font-medium uppercase">
            Your Cart
          </h3>
          <div className="flex flex-row py-2 px-5 border justify-between">
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
            <h1>Remove</h1>
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
          <Link className="p-3 border" to={"/"}>
            Return To Shop
          </Link>
          <div className="flex justify-between mt-10">
            <div className="flex gap-3 h-[50px]">
              <input
                type="text"
                className="p-2 border rounded-sm"
                placeholder="Coupon Code"
              />
              <button className="bg-[#2f8747] text-white rounded-sm p-2">
                Apply Coupon
              </button>
            </div>

            <div className="h-[250px] w-[300px] border py-5 px-3 border-black">
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
                  className="p-2 text-white w-[200px] rounded-sm mt-5 bg-[#2f8747]"
                >
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

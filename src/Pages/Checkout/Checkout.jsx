import React, { useState } from "react";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";
import Checkbox from "../../Components/Checkbox";
import { useSelector } from "react-redux";
import bank1 from "../../assets/bank1.svg";
import bank2 from "../../assets/bank2.svg";
import bank3 from "../../assets/bank3.svg";
import bank4 from "../../assets/bank4.svg";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.Cart);
  const [paymentMethod, setPaymentMethod] = useState("Bank");
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.discount * item.quantity;
    });
    return total.toFixed(2);
  };
  const getTaxedTotal = () => {
    const total = parseFloat(getTotal());
    const tax = total * 0.1;
    return (total + tax).toFixed(2);
  };
  return (
    <div>
      <Nbar />
      <h1 className="mt-20 mx-20 text-3xl font-semibold">Billing Details</h1>
      <div className="flex mx-20 justify-between">
        {/* Inputs Section  */}
        <div className="flex flex-col w-[450px]">
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="">First Name</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="">Street Address</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="">Appartment, floor, etc. (optional)</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="">Town/City</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="">Zip Code</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex flex-col gap-2 mt-8 mb-6">
            <label htmlFor="">Email Address</label>
            <input type="text" className="p-3 bg-[#f5f5f5]" />
          </div>
          <div className="flex gap-3 mb-10">
            <Checkbox />
            <p>Save this information for faster check-out next time.</p>
          </div>
        </div>
        {/* Cart Section  */}
        <div className="w-[450px]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="flex items-center justify-between mb-5"
                key={item.id}
              >
                <div className="flex items-center">
                  <img
                    src={item.cardImg}
                    alt=""
                    className="h-[50px] rounded-full"
                  />
                  <h1 className="ml-3">{item.prodname}</h1>
                </div>
                <span>${item.discount}</span>
              </div>
            ))
          ) : (
            <div>Cart is Empty</div>
          )}
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${getTotal()}</span>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between">
            <span>Total With 10% Tax</span>
            <span>${getTaxedTotal()}</span>
          </div>
          <div className="flex justify-between mt-8 mb-4">
            <div className="flex gap-2">
              <input
                type="radio"
                id="Bank"
                name="paymentMethod"
                value="Bank"
                checked={paymentMethod === "Bank"}
                onChange={handlePaymentMethodChange}
              />
              <p>Bank</p>
            </div>
            <div className="flex gap-1">
              <img src={bank1} alt="" />
              <img src={bank2} alt="" />
              <img src={bank3} alt="" />
              <img src={bank4} alt="" />
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="Cash"
              name="paymentMethod"
              value="Cash"
              checked={paymentMethod === "Cash"}
              onChange={handlePaymentMethodChange}
            />
            <p>Cash on Delivery</p>
          </div>
          <div className="my-5 flex gap-3">
            <input
              type="text"
              className="border p-3 rounded-sm"
              placeholder="Coupon Code"
            />
            <button className="bg-[#2f8747] py-2 px-7 text-white rounded-md">
              Apply Coupon
            </button>
          </div>
          <button className="bg-[#2f8747] py-2 px-7 text-white rounded-md">
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

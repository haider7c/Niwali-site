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
  const [formValues, setFormValues] = useState({
    firstName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formValues,
      paymentMethod,
      cartItems,
    });
  };

  return (
    <div>
      <Nbar />
      <h1 className="mt-20 mx-20 text-3xl font-semibold">Billing Details</h1>
      <div className="flex mx-20 justify-between">
        {/* Inputs Section */}
        <div className="flex flex-col w-[450px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-8">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.streetAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <label htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                name="apartment"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.apartment}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <label htmlFor="city">Town/City</label>
              <input
                type="text"
                name="city"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8 mb-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                className="p-3 bg-[#f5f5f5]"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-3 mb-10">
              <Checkbox />
              <p>Save this information for faster check-out next time.</p>
            </div>
            <button
              type="submit"
              className="bg-[#2f8747] py-2 px-7 text-white rounded-md mb-10"
            >
              Place Order
            </button>
          </form>
        </div>
        {/* Cart Section */}
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
                // checked={paymentMethod === "Bank"}
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
              // checked={paymentMethod === "Cash"}
              onChange={handlePaymentMethodChange}
            />
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

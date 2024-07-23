import React, { useState } from "react";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";
import Accountform from "../../Components/Accountform";
import Accountaddress from "../../Components/Accountaddress";
import Accountpayment from "../../Components/Accountpayment";
import Accountorders from "../../Components/Accountorders";

const Account = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  return (
    <div className="mt-16">
      <Nbar />
      <div className="flex justify-between mx-16 mt-4">
        <div>
          <span>Home</span>/<span>My Account</span>
        </div>
        <div>
          <span>Home</span>/<span>My Account</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 my-16 mx-16">
        <div className="lg:col-span-3">
          <nav>
            <h1 className="font-semibold">Manage My Account</h1>
            <ul className="ml-5 my-3">
              <li className="my-2">
                <button
                  href="#"
                  className=" hover:underline"
                  onClick={() => setCurrentScreen(0)}
                >
                  My Profile
                </button>
              </li>
              <li className="my-2">
                <button
                  href="#"
                  className="text-gray-700 hover:underline"
                  onClick={() => setCurrentScreen(1)}
                >
                  Address Book
                </button>
              </li>
              <li className="my-2">
                <button
                  href="#"
                  className="text-gray-700 hover:underline"
                  onClick={() => setCurrentScreen(2)}
                >
                  My Payment Options
                </button>
              </li>
            </ul>
            <h1 className="font-semibold">My Orders</h1>
            <ul className="ml-5 my-3">
              <li className="my-2">
                <button
                  href="#"
                  className="text-gray-700 hover:underline"
                  onClick={() => setCurrentScreen(3)}
                >
                  My Orders
                </button>
              </li>
              <li className="my-2">
                <button
                  href="#"
                  className="text-gray-700 hover:underline"
                  onClick={() => setCurrentScreen(4)}
                >
                  My Cancellations
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:col-span-9 bg-white p-8 rounded-lg shadow-lg">
          {/* <Accountform /> */}
          {currentScreen === 0 ? (
            <Accountform />
          ) : currentScreen === 1 ? (
            <Accountaddress />
          ) : currentScreen === 2 ? (
            <Accountpayment />
          ) : (
            <Accountorders />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;

import React from "react";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";

const Account = () => {
  return (
    <div>
      <Nbar />
      <div className="flex my-20 ml-20 justify-center gap-40">
        {/* Left Side  */}
        <div>
          <div className="mb-5 mt-20">
            <h1 className="font-semibold">Manage My Account</h1>
            <ul>
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">My Orders</h1>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>
        </div>
        {/* Right Side  */}
        <div className="mt-20 mr-20">
          <h1 className="font-semibold left-0">Edit Your Profile</h1>
          <form action="">
            <div className="flex justify-between gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="MD"
                  className="p-3 bg-[#f5f5f5]"
                />
                <label htmlFor="" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="MD"
                  className="p-3 bg-[#f5f5f5]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="p-3 bg-[#f5f5f5]"
                />
                <label htmlFor="" className="font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="chak #123 fsd"
                  className="p-3 bg-[#f5f5f5]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Password Changes</h1>
              <input
                type="text"
                placeholder="chak #123 fsd"
                className="p-3 bg-[#f5f5f5]"
              />
              <input
                type="text"
                placeholder="chak #123 fsd"
                className="p-3 bg-[#f5f5f5]"
              />
              <input
                type="text"
                placeholder="chak #123 fsd"
                className="p-3 bg-[#f5f5f5]"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;

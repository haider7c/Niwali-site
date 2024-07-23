import React from "react";

const Accountaddress = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Address</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Rimel"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded"
              placeholder="rimel111@gmail.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="phone"
              className="mt-1 p-2 w-full border rounded"
              placeholder="+912332323"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Address</h3>
        <div className="grid md:grid-cols-1 gap-6 mb-6">
          <div>
            {/* <label className="block text-gray-700">Current Password</label> */}
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Street Address"
            />
          </div>
          <div>
            {/* <label className="block text-gray-700">New Password</label> */}
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Appartment, floor, etc. (optional)"
            />
          </div>
          <div>
            {/* <label className="block text-gray-700">Confirm New Password</label> */}
            <input
              type="address"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Town/City*"
            />
          </div>
          <div>
            {/* <label className="block text-gray-700">Confirm New Password</label> */}
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 px-4 py-2 border rounded text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Accountaddress;

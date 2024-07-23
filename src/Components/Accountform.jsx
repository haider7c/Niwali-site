import React from "react";

const Accountform = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Your Profile</h1>
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
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Kingston, 5236, United State"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Password Changes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Current Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Current Password"
            />
          </div>
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
              placeholder="New Password"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Confirm New Password"
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

export default Accountform;

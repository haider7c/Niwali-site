import React from "react";

const Accountorders = () => {
  return (
    <div>
      <h1 className="font-semibold text-green-700">Orders</h1>
      <div className="my-5 shadow-lg overflow-x-auto ">
        <table className="min-w-full border-separate border-spacing-2">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-5 py-2 text-left"></th>
              <th className="px-3 py-2 text-left  ">Order ID</th>
              <th className="px-3 py-2 text-left">Order Date</th>
              <th className="px-3 py-2 text-left">Customer</th>
              <th className="px-3 py-2 text-left">Tracking ID</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Total Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            <tr>
              <td>+</td>
              <td className="px-3 py-2">12345</td>
              <td className="px-3 py-2">2024-07-22</td>
              <td className="px-3 py-2">John Doe</td>
              <td className="px-3 py-2">TRACK123</td>
              <td className="px-3 py-2">Shipped</td>
              <td className="px-3 py-2">$100.00</td>
            </tr>
            <tr>
              <td>+</td>
              <td className="px-3 py-2">67890</td>
              <td className="px-3 py-2">2024-07-20</td>
              <td className="px-3 py-2">Jane Smith</td>
              <td className="px-3 py-2">TRACK456</td>
              <td className="px-3 py-2">Delivered</td>
              <td className="px-3 py-2">$200.00</td>
            </tr>
            <tr>
              <td>+</td>
              <td className="px-3 py-2">67890</td>
              <td className="px-3 py-2">2024-07-20</td>
              <td className="px-3 py-2">Jane Smith</td>
              <td className="px-3 py-2">TRACK456</td>
              <td className="px-3 py-2">Delivered</td>
              <td className="px-3 py-2">$200.00</td>
            </tr>
            <tr>
              <td>+</td>
              <td className="px-3 py-2">67890</td>
              <td className="px-3 py-2">2024-07-20</td>
              <td className="px-3 py-2">Jane Smith</td>
              <td className="px-3 py-2">TRACK456</td>
              <td className="px-3 py-2">Delivered</td>
              <td className="px-3 py-2">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accountorders;

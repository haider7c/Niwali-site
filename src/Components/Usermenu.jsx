import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { PiShoppingBagOpen } from "react-icons/pi";
import { SlLogout } from "react-icons/sl";

const Usermenu = () => {
  const menuItems = [
    {
      title: "Manage My Account",
      path: "/account",
      icon: <FiUser />,
    },
    {
      title: "My Order",
      path: "/myorder",
      icon: <PiShoppingBagOpen />,
    },
    {
      title: "Logout",
      path: "/logout",
      icon: <SlLogout />,
    },
  ];
  return (
    <div className="">
      {menuItems.map((item) => (
        <div>
          <div className="flex gap-2 items-center">
            <div className="text-white">{item.icon}</div>
            <Link to={item.path} className="text-white">
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Usermenu;

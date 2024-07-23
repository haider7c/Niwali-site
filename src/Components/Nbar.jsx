import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser, FiMenu, FiX } from "react-icons/fi"; // Import FiMenu and FiX icons
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import Usermenu from "./Usermenu";

export default function Nbar() {
  const [userMenu, setUserMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // State to handle mobile menu visibility

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Category", path: "/category" },
    { title: "Blogs", path: "/blogs" },
    { title: "About", path: "/about" },
    { title: "Clients", path: "/clients" },
    { title: "Contact", path: "/contact" },
  ];

  const { cartItems } = useSelector((state) => state.Cart);

  const toggleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="flex py-2 pl-10 pr-5 bg-hcolor items-center fixed w-full top-0 z-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu}>
          {mobileMenu ? (
            <FiX size={24} className="text-white" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </button>
      </div>
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src={logo} className="h-10 w-30 mx-5" alt="Logo" />
        </Link>
      </div>

      {/* Desktop Navigation Items */}
      <div className="hidden lg:flex left-0 gap-5 pl-10">
        {menuItems.map((item, index) => (
          <div key={index} className="text-white">
            <Link to={item.path}>{item.title}</Link>
          </div>
        ))}
        <div className="flex ml-5 relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full pl-10 bg-[#d9d9d9]"
          />
          <IoIosSearch className="absolute ml-2 mt-1" />
        </div>
      </div>

      {/* Mobile Navigation Items */}
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-hcolor z-40 flex flex-col items-center lg:hidden">
          {menuItems.map((item, index) => (
            <div key={index} className="text-white py-2">
              <Link to={item.path} onClick={() => setMobileMenu(false)}>
                {item.title}
              </Link>
            </div>
          ))}
          <div className="flex relative py-2">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full pl-10 bg-[#d9d9d9]"
            />
            <IoIosSearch className="absolute ml-2 mt-1" />
          </div>
        </div>
      )}

      {/* Shopping Cart and User Menu */}
      <div className="ml-auto flex gap-3 content-center pr-5 lg:mr-0">
        <div className="relative">
          <Link to="/cart">
            <MdOutlineShoppingCart
              className="text-white cursor-pointer"
              size={25}
            />
          </Link>
          <div className="absolute right-[-4px] top-[-6px] grid h-[15px] w-[16px] place-items-center content-center rounded-full bg-[#5ee547] text-sm text-black">
            {cartItems.length}
          </div>
        </div>

        {/* User Menu */}
        <div className="bg-[#2f8747] rounded-full p-1 relative">
          <FiUser
            className="text-white cursor-pointer"
            onClick={toggleUserMenu}
          />
          {userMenu && (
            <div className="absolute right-0 top-10 z-50 bg-[#185c5b] p-5">
              <Usermenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

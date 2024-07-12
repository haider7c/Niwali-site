import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import Usermenu from "./Usermenu";

export default function Nbar() {
  const [userMenu, setUserMenu] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Category", path: "/category" },
    { title: "Blogs", path: "/blogs" },
    { title: "About", path: "/about" },
    { title: "Clients", path: "/clients" },
    { title: "Contact", path: "/contact" },
  ];

  const { cartItems } = useSelector((state) => state.Cart);
  return (
    <div className="flex py-2 pl-10 pr-5 bg-hcolor items-center fixed w-full top-0 z-50 ">
      {/* Logo Section  */}
      <div>
        <Link to="/">
          <img src={logo} className="h-10 w-30 mx-5" alt="" />
        </Link>
      </div>
      {/* Navigation Items  */}
      <div className="flex left-0 gap-5 pl-10">
        {menuItems.map((item) => {
          return (
            <div className=" text-white">
              <Link to={item.path}>{item.title}</Link>
            </div>
          );
        })}
        <div className="flex ml-5">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full pl-10 bg-[#d9d9d9] "
          />
          <IoIosSearch className="absolute ml-2 mt-1 " />
        </div>
      </div>
      {/* Shoping Cart  */}

      {/* Login / Sign Up  */}
      {/* <div className="ml-auto flex space-x-3 mx-5 justify-between bg-[#d9d9d9] rounded-full">
        <Link className="rounded-full p-2 text-sm font-semibold" to="/login">
          Log in
        </Link>
        <Link
          className="text-white font-semibold rounded-full p-2 text-sm bg-[#368c28]"
          to="signup"
        >
          Sign up
        </Link>
      </div> */}
      <div className="ml-auto flex gap-3 content-center pr-5">
        <div className="relative">
          <Link to="/cart">
            <MdOutlineShoppingCart
              className="text-white cursor-pointer"
              size={25}
            />
          </Link>
          <div className="absolute right-[-4px] top-[-6px] grid h-[15px] w-[16px] place-items-center content-center rounded-full bg-[#5ee547] text-sm text-black ">
            {cartItems.length}
          </div>
        </div>
        <div className="bg-[#2f8747] rounded-full p-1">
          <FiUser
            className="text-white cursor-pointer"
            onClick={() => setUserMenu(!userMenu)}
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

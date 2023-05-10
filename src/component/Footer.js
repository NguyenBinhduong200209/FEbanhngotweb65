import React from "react";
import {  Link } from "react-router-dom";
import logo from "../assest/logo.png";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-500 text-white">
      <div className="container px-4 py-2 mx-auto lg:flex lg:justify-between">
        <div className="lg:w-1/3">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-20 mr-2" alt="Logo"></img>
            <span className="text-2xl font-semibold">Anh Dương Bakery</span>
          </Link>
          <p className="mt-2">
            We make the most delicious pastries and bread in town. Come and
            visit us!
          </p>
          <p className="mt-2 ">
            <i className="fas fa-map-marker-alt mr-2"></i> HaNoi, VietNam
          </p>
          <p className="flex">
            <span>
              {" "}
              <AiOutlinePhone className="text-2xl mx-2" />
            </span>{" "}
            +123-456-7890
          </p>
          <p className="flex">
            <span>
              {" "}
              <AiOutlineMail className="text-2xl mx-2" />
            </span>
            nguyenbinhduong200209@gmail.com
          </p>
          <p className="flex">
            <span>
              {" "}
              <AiOutlineClockCircle className="text-2xl mx-2" />
            </span>
            7:00am - 10:00pm
          </p>
        </div>
        <div className="lg:w-1/3 ml-20 lg:mt-0">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="mt-2 text-lg ">
            <Link
              to="/"
              className="block py-2 hover:underline hover:text-red-500"
              activeclassname="underline"
            >
              Home
            </Link>
            <Link
              to="menu/6439561f307ca1a748b152fc"
              className="block py-2 hover:underline  hover:text-red-500"
              activeclassname="underline"
            >
              Menu
            </Link>
            <Link
              to="menu/6439561f307ca1a748b152fc"
              className="block py-2 hover:underline  hover:text-red-500"
              activeclassname="underline"
            >
              About
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:underline  hover:text-red-500"
              activeclassname="underline"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="mt-2">Đăng Ký để nhận thông tin sớm nhất</p>
          <form action="" className="mt-4">
            <div className="flex">
              <input
                type="email"
                className="w-full px-2 py-2 mr-2 placeholder-gray-600 bg-gray-800 rounded-md text-gray-100 focus:outline-none focus:bg-gray-700 focus:shadow-outline-gray"
                placeholder="Enter your email"
              />
              <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-600">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;

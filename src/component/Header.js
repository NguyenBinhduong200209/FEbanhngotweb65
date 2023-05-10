import React, { useState } from "react";
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast(" Đăng xuất thành công! See you a later!!!");
  };
  const CartItemNumber = useSelector((state)=>state.product.cartItem)
  
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex item-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img className="h-full" src={logo} />
          </div>
        </Link>
        <div className="flex items-center font-bold text-3xl text-slate-400">
          <h2 className="ml-2">Anh Dương Bakery</h2>
        </div>
        <div className="flex items-center gap-4 md:gap7">
          <nav className=" gap-4 md:gap-6 text-base md:text-lg hidden md:flex font-bold text-slate-900">
            <Link to={"/"}>Home</Link>
            <Link to={"menu/6439561f307ca1a748b152fc"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to='cart'> <BsFillCartFill className="cursor-pointer" /></Link> 
            <div className=" absolute -top-3 -right-3  h-2 w-4 rounded-full m-0 p-0 text-sm font-bold text-center">
              <div className=' bg-red-300 rounded-full'>{CartItemNumber.length}</div>
              
            </div>
          </div>
          <div className="text-slate-600 " onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full  overflow-hidden drop-shadow">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            <div className="cursor-pointer">
              {showMenu && (
                <div className=" absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                  {userData.email === process.env.REACT_APP_ADMIN_EMAIL  && (
                    <>
                    <Link to={"newproduct"} className="whitespace-nowrap">
                      New product
                    </Link>
                    <Link to={"deleteproduct"} className="whitespace-nowrap">
                      Delete Product
                    </Link>
                    </>
                  )}

                  {userData.image ? (
                    <p
                      className="cursor-pointer text-white bg-red-500"
                      onClick={handleLogout}
                    >
                      Logout:({userData.lastName})
                    </p>
                  ) : (
                    <Link
                      to={"login"}
                      className="whitespace-nowrap cursor-pointer px-2  md:text-lg"
                    >
                      Login
                    </Link>
                  )}
                  <nav className=" text-base md:text-lg flex flex-col ">
                    <Link to={"/"} className="px-2 py-1">
                      Home
                    </Link>
                    <Link to={"menu/6439561f307ca1a748b152fc"} className="px-2 py-1">
                      Menu
                    </Link>
                    <Link to={"about"} className="px-2 py-1">
                      About
                    </Link>
                    <Link to={"contact"} className="px-2 py-1">
                      Contact
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

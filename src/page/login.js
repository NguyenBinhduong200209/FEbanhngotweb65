import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
 


  const [showPassword, setshowPassword] = useState(false);
  
  const [data, setData] = useState({
    
    email: "",
    password: "",
    
  });
 
  const navigate =useNavigate()

  const userData =useSelector(state =>state)
  

  const dispatch =useDispatch()

  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
  
    if (email && password) {
      try {
        const token = localStorage.getItem("token");
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login/userlogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
           
          },
          body: JSON.stringify(data),
        });
        const dataRes = await fetchData.json();
  
        console.log(dataRes);
  
        toast(dataRes.message);
  
        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (err) {
        console.error(err);
        toast("Đã xảy ra lỗi khi đăng nhập");
      }
    } else {
      alert("Đăng nhập thất bại");
    }
  };
  
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-mb shadow-mb ">
         
          <img src={loginSignupImage} className="w-full "></img>
        </div>

        <form className="w-full py-2 flex-col " onSubmit={handleSubmit}>
          

          <label htmlFor="email"> Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            placeholder="nguyenbinhduong@gmail"
          ></input>

          <label htmlFor="password" placeholder="nguyenbinhduong@gmail">
            {" "}
            Password
          </label>
          <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className=" w-full  bg-slate-200 border-none outline-none "
            ></input>
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>
      
          <div className="flex mt-6">
            <button className=" max-w-[150px] m-auto w-full bg-red-400 hover:bg-red-700 cursor-pointer text-white text-2xl font-medium text-center py-1 rounded-full ">
              Login
            </button>
          </div>
        </form>
        <p className=" text-sm mt-3">
          {" "}
          Bạn chưa có tài khoản ?
          <Link to={"/signup"} className="text-red-500">
            {" "}
            Signup
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

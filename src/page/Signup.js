import React, { useState } from "react";
import { toast } from "react-hot-toast";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link ,useNavigate} from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const Signup = () => {
  const navigate =useNavigate()
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image:""
  });
  console.log(data);

  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleOnChange = (e) => {
    const {name,value} =e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  };
const handleUploadProfileImage = async(e) =>{
    const data = await ImagetoBase64(e.target.files[0])

    setData((prev) =>{
      return{
        ...prev,
        image:data
      }
    })
}

console.log(process.env.REACT_APP_SERVER_DOMIN);
const handleSubmit = async (e) =>{
  e.preventDefault()
  const {firstName,email,password,confirmPassword} =data;
  if( firstName && email && password && confirmPassword){
    if( password === confirmPassword)
    {
     const fetchData =await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup/usersign`,{
      method:"POST",
      headers :{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)

     })
     const dataRes =await fetchData.json()
      
      console.log(dataRes);
      // alert(dataRes.message)
      toast(dataRes.message)
      if(dataRes.alert){
        navigate('/login')
      }
      // 
    }
    else{
      alert('Mật khẩu không giống nhau')
    }
  }
  else{
    alert('Hãy điền đủ thông tin để đăng ký')
  }
}

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex  flex-col p-4">
        <div className="w-20 h-full overflow-hidden rounded-full drop-shadow-mb shadow-mb m-auto relative cursor-pointer ">
          <img src={data.image ? data.image: loginSignupImage} className="w-full "></img>
          <label htmlFor="profileImage">

               <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-40 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white"> Upload</p>
              </div>
              <input type={'file'} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}></input>
          </label>
        </div>
          
        <form className="w-full py-2 flex-col " onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            placeholder="Nguyễn"
          ></input>

          <label htmlFor="lastName"> Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            placeholder="Dương"
          ></input>

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

          <label htmlFor="confirmpassword" placeholder="nguyenbinhduong@gmail">
            Confirm Password
          </label>
          <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleOnChange}
              className=" w-full  bg-slate-200  border-none outline-none"
            ></input>
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>

          <div className="flex mt-6">
            <button  className=" max-w-[150px] m-auto w-full bg-red-400 hover:bg-red-700 cursor-pointer text-white text-2xl font-medium text-center py-1 rounded-full ">
              Signup
            </button>
          </div>
        </form>
        <p className=" text-sm mt-3">
          {" "}
          Bạn đã có tài khoản ?
          <Link to={"/login"} className="text-red-500">
            {" "}
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;

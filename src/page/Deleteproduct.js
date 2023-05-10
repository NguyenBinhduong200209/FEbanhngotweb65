import React, { useState } from 'react'
import{BsCloudUploadFill} from "react-icons/bs"
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { json } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Deleteproduct = () => {
  const [data,setData] =useState({
    name:'',
    category:'',
    image:"",
    price:"",
    description:'',
  })
    
  const handleOnChange =(e)=>{
    const{name,value} =e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }



  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data);
    const {name,image,category,price,} =data
    if(name&&category ){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`,{
        method:'DELETE',
        headers:{
          "content-type":'application/json'
        },
        body:JSON.stringify(data)
      })
      const fetchRes =await fetchData.json()
      console.log(fetchRes);
      toast(fetchRes.message)
      setData(()=>{
        return{
          name:'',
          category:'',
          image:"",
          price:"",
          description:'',
        }
      })
    }
    else
      {
        toast("Hãy kiểm tra lại bạn đã điền đủ thông tin sản phẩm chưa !")
      }
    }

    
  return (
    <div className='p-4'>
      <div className='flex items-center justify-center py-2 mb-2'>
      <nav className="  gap-4 md:gap-6 text-base md:text-xl  md:flex font-bold text-red-400 ">
            <Link className=' hover:text-red-500 ' to={"/newproduct"}>New product</Link>
            <Link  className=' hover:text-red-500' to={"/updateproduct"}> Update product</Link>
            <Link  className=' hover:text-red-500' to={"/deleteproduct"}>Remove product</Link>
            
          </nav>
      </div>
      <form className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white rounded ' onSubmit={handleSubmit}>
        <label htmlFor='name'> Name</label>
        <input type={"text"} name='name' value={data.name} className=' bg-slate-200 p-1 my-1 rounded' onChange={handleOnChange}></input>

        <label htmlFor='category'> Category</label>

        <select className='bg-slate-250 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>Chọn loại bánh</option>
          <option value={"Bánh Mỳ"}>Bánh Mỳ</option>
          <option value={"Bánh Ngọt"}>Bánh Ngọt</option>
          <option value={"Bông Lan"}>Bánh Bông Lan</option>
          <option value={"Bánh Kem"}>Bánh Kem</option>
          <option value={"Pizza"}>Pizza</option>
        </select>

     
        
        <button className='rounded bg-blue-400 hover:bg-blue-500 text-white text-lg font-medium drop-shadow my-2'>Delete</button>
      </form>
    </div>
  )
}

export default Deleteproduct
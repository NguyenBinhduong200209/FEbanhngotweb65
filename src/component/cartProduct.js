import React from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartItem,increaseQty,decreaseQty } from "../redux/productSlide";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch =useDispatch()
  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border-2 border-slate-300">
      <div className="bg-white p-3 rounded">
        <img src={image} className="h-30 w-40 object-cover max-h-[180px]" />
      </div>
      <div className="flex flex-col gap-1 w-full ">
        <div className="flex justify-between">
        <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
          {name}
        </h3>
        <span className="cursor-pointer text-slate-600 hover:text-red-600 text-2xl" onClick={()=>dispatch(deleteCartItem(id))}>
          <AiTwotoneDelete />
        </span>
        </div>
        <p className=" text-slate-500  font-medium ">{category}</p>
        <p className=" font-bold text-base">
          <span>{price}.</span>
          <span className="text-red-500 font-medium">VND</span>
        </p>

        <div className=" flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <button onClick={()=>dispatch(increaseQty(id))} className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-2">
              <BsPlusLg />
            </button>
            <p className="font-bold pt-1">{qty}</p>
            <button onClick={()=>dispatch(decreaseQty(id))} className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-640 p-2">
              <BiMinus />
            </button>
          </div>
          <div className="flex items-center font-semibold">
            <p>Thành Tiền :</p>
            <p>
              {total}
              <span className="text-red-400">.VND</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

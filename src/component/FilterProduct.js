import React from "react";

import { GiCupcake } from "react-icons/gi";

const FilterProduct = ({ category,onClick,isActive }) => {
  return (
    <div className="mx-4" onClick={onClick} >
      <div className={`text-3xl p-5 bg-pink-300 rounded-full flex justify-center max-w-[70px] cursor-pointer ${isActive ?"bg-red-600 text-white":"bg-yellow-500"}`}>
        <GiCupcake />
      </div >
      <p className="text-center font-medium my-3 capitalize ">{category}</p>
    </div>
  );
};

export default FilterProduct;

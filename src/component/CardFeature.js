import React from "react";
import { Link } from "react-router-dom";
import { addCartItem ,increaseQty} from "../redux/productSlide";
import { useDispatch } from "react-redux";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();
  const handleAddCart = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };
  return (
    <div className=" w-full min-w-[220px] max-w-[220px] hover:shadow-lg drop-shadow-lg  py-3 px-2 cursor-pointer flex flex-col rounded-lg bg-slate-300">
      {image ? (
        <>
        <Link
          to={`/menu/${id}`}
          onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          className="block"
        >
          <div className="w-full min-h-[150px] flex flex-col justify-center">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
          </div>
          <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap">
            {name}
          </h3>
          <p className="text-slate-500 font-medium">{category}</p>
          <p className="font-bold">
            <span>{price}</span>
            <span className="text-red-500 font-medium">VND</span>
          </p>
        </Link>
        <button
          className="bg-yellow-500 py-2 my-4 rounded-lg hover:bg-yellow-600 w-full flex justify-center text-white font-medium"
          onClick={() => handleAddCart(id)}
        >
          Thêm vào giỏ
        </button>
      </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;

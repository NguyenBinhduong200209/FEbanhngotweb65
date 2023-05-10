import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCart from '../assest/emptyCart.gif'

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <>
      <div className="p-2 md:p-4">
    
        <h3 className="text-lg md:text-2xl font-bold text-slate-700">
          Giỏ hàng của bạn
        </h3>
        {productCartItem[0]?
        <div className="my-4 flex">
          {/* Hiện giỏ hàng */}
          <div className="w-full max-w-3xl ">
            {productCartItem.map((e) => {
              return (
                <CartProduct
                  key={e._id}
                  id={e._id}
                  name={e.name}
                  image={e.image}
                  category={e.category}
                  qty={e.qty}
                  total={e.total}
                  price={e.price}
                />
              );
            })}
          </div>

          <div className="w-full max-w-sm ml-auto mx-10 flex flex-col ">
            <h2 className="bg-blue-400 text-white p-2 text-lg items-center w-full ">
              {" "}
              Sản Phẩm Đã Chọn
            </h2>

            <div className="flex w-full py-2 text-lg border-b">
              <p>Tổng sản phẩm:</p>
              <p className=" ml-auto w-32 font-bold "> {totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Thành Tiền:</p>
              <p className=" ml-auto w-32 font-bold ">
                <span> {totalPrice}</span>
              </p>
            </div>
            <button className="bg-red-400 w-full text-lag font-bold py-3 hover:bg-red-600">
              {" "}
              Thanh toán
            </button>
          </div>
        </div>
        :
        <>
        <div className="flex w-full justify-center items-center flex-col">
          <img src={emptyCart} className="w-full max-w-lg"></img>
          <p className=" text-slate-700 text-3xl font-bold"> Chưa có gì !!!</p>
        </div>
        </>
}
      </div>
    </>
  );
};

export default Cart;

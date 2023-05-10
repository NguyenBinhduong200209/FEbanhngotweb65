import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaBirthdayCake } from "react-icons/fa";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = Array.isArray(productData)
    ? productData.slice(4, 12)
    : [];
  const homeProductCartListBanhKem = productData.filter(
    (e) => e.category === "Bánh Kem",
    []
  );


  const loadingArray = new Array(4).fill(null);
    const loadingArrayFeature = new Array(10).fill(null)
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };


  //

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-3 py-2">
        <div className="md:w-1/2">
          <div className=" flex gap-3 bg-slate-200 w-36 px-2 items-center rounded-full ">
            <p className="text-sm font-medium ">Express Delivery</p>
            <img
              src="https://senviethvac.vn/upload/images/thanh-toan-va-van-chuyen_master.png"
              className="h-8"
            />
          </div>
          <h2 className="text-3xl font-bold  md:text-4xl py-3">
            Giao hàng nhanh chóng ,
            <span className="text-red-500 "> Miễn Phí !!!</span>
          </h2>
          <h2 className=" text-2xl text-cyan-600">
            Luôn luôn lắng nghe , Sẵn sàng chia sẻ !!!
          </h2>
          <h2 className=" text-3xl text-slate-600">
            Anh Dương Bakery xin chào quý khách
          </h2>
          <p className="py-3 text-medium max-w-lg">
            Tiệm Bánh Anh Dương Bakery được ra đời với thông điệp mang đam mê của chúng tôi
            gửi gắm đến bạn qua những chiếc bánh ngọt và thức uống ngon, giá rẻ,
            vệ sinh và chất lượng luôn được đặt lên hàng đầu. Sự ra đời của mỗi
            chiếc bánh đều được chọn lọc kỹ lưỡng tâm huyết của đội ngũ chúng
            tôi từ khâu nguyên liệu, chế biến để khi đến tay của các bạn, chúng
            đều trở thành sản phẩm hoàn hảo nhất
          </p>
          <button className=" font-bold bg-red-500 text-slate-100 px-3 py-2 rounded-md">
            Xem sản phẩm
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-6 px-4 justify-center items-center">         
          
            {homeProductCartList[0]
              ? homeProductCartList.map((e) => (
                  <HomeCard
                    key={e._id}
                    id ={e._id}
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    category={e.category}
                  />
                ))
              : loadingArray.map((e, index) => {
                  return <HomeCard key={index} loading={"loading..."} />;
                })}
          
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center px-5">
          <h2 className="font-bold text-2xl text-slate-800 mb-1 flex  ">
            Bánh Kem <FaBirthdayCake className="mx-4 text-3xl" />
          </h2>

          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded"
            >
              <FcPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded"
            >
              <FcNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all "
          ref={slideProductRef}
        >
          {homeProductCartList[0]
            ? homeProductCartListBanhKem.map((e) => (
                <CardFeature
                  key={e._id}
                  id={e._id}
                  name={e.name}
                  category={e.category}
                  price={e.price}
                  image={e.image}
                />
              ))
            : loadingArrayFeature.map((e, index) => {
                return <CardFeature key={index} loading={"loading..."} />;
              })}
        </div>
      </div>
      <AllProduct heading={"Các sản phẩm bánh"}/>

    </div>
  );
};

export default Home;

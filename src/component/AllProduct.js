import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading}) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((e) => e.category))];

  //Filterdata
  const [filter,setFilterBy] =useState('')
  const [dataFilter, setDataFilter] = useState([]);
  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category)
    const filter = productData.filter(
      (e) => e.category === category
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  
  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList.length > 0 ? (
          categoryList.map((e, index) => (
            <FilterProduct
              key={index}
              
              category={e}
              onClick={() => handleFilterProduct(e)}
            />
          ))
        ) : (
          loadingArrayFeature.map((e, index) => {
            return <CardFeature key={index} loading={"loading..."} />;
          })
        )}
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-4">
        {dataFilter.length > 0 ?
        dataFilter.map((e) => {
          return (
            <CardFeature
              key={e._id}
              id={e._id}
              name={e.name}
              category={e.category}
              price={e.price}
              image={e.image}
            />
          );
        })
          : loadingArrayFeature.map((e, index) => {
            return <CardFeature key={index} loading={"loading..."} />;
          })}
      </div>
    </div>
  );
};

export default AllProduct;
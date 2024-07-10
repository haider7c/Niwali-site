import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const Shop = () => {
  const { products } = useSelector((state) => state.Products);
  return (
    <div className="flex flex-wrap justify-center gap-5 py-8">
      {products?.slice(0, 4).map((item) => (
        <div className="md:2/4 lg:1/4 ">
          <Cards
            key={item.id}
            id={item.id}
            cardImg={item.cardImg}
            prodname={item.prodname}
            price={item.price}
            orders={item.orders}
            discount={item.discount}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;

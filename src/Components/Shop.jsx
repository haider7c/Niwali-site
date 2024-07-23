import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const Shop = () => {
  const { products } = useSelector((state) => state.Products);

  return (
    <div className="flex flex-wrap justify-center gap-5 my-6 sm:w-1/3 lg:w-full">
      {products?.slice(0, 4).map((item) => (
        <div key={item.id}>
          <Cards
            id={item.id}
            cardImg={item.image_url + item.prod_image}
            prodname={item.prodname}
            price={(Number(item.rate) + 10).toFixed(2)}
            orders={item.purchase_rate}
            discount={item.rate}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;

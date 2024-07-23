import React from "react";
import { useSelector } from "react-redux";

import Cards from "./Cards";

const Topproducts = () => {
  const item = useSelector((state) => state.Products.products);

  return (
    <div className="flex flex-wrap justify-center gap-5 py-8">
      {item.slice(0, 4).map((item) => (
        <div className="md:2/4 lg:1/4 ">
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

export default Topproducts;

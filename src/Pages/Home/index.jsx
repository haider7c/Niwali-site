import React from "react";
import Nbar from "../../Components/Nbar";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider";
import catall from "../../assets/catall.png";
import catmen from "../../assets/catmen.png";
import catwomen from "../../assets/catwomen.png";
import { Link } from "react-router-dom";
import Buton from "../../Components/Buton";
import b1 from "../../assets/b1.png";
import Servisec from "../../Components/Servisec.jsx";
import spv1 from "../../assets/spv1.png";
import spv2 from "../../assets/spv2.png";
import spv3 from "../../assets/spv3.png";
import ProductSlider from "../../Components/ProductSlider.jsx";
import FramSlider from "../../Components/FramSlider.jsx";
import Shop from "../../Components/Shop.jsx";
import Topproducts from "../../Components/Topproducts.jsx";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice.js";

export default function Index() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="bg-pagescolor w-full overflow-hidden ">
      <Nbar />
      <div className="w-full">
        <Slider />
      </div>
      <div className="flex items-center gap-1 ml-4 sm:ml-20">
        <div className="bg-[#0A8746] h-[25px] w-[15px] rounded-l-full"></div>
        <h1 className="text-3xl font-bold">Flash Sales - 25% OFF</h1>
      </div>
      <Shop />
      <div className="mb-5 flex justify-center">
        <Buton
          title="View All Products"
          className="bg-btcol px-8 py-3 rounded-md text-white shadow-md"
          to="/"
        />
      </div>
      <hr className="mb-6" />
      <div className="flex items-center gap-1 ml-4 sm:ml-20 my-10">
        <div className="bg-[#0A8746] h-[25px] w-[15px] rounded-l-full"></div>
        <h1 className="text-3xl font-bold">Browse By Category</h1>
      </div>
      <div className="flex justify-center gap-10 flex-wrap">
        <Link>
          <img src={catall} alt="All Categories" className="w-full sm:w-auto" />
        </Link>
        <Link>
          <img
            src={catmen}
            alt="Men's Categories"
            className="w-full sm:w-auto"
          />
        </Link>
        <Link>
          <img
            src={catwomen}
            alt="Women's Categories"
            className="w-full sm:w-auto"
          />
        </Link>
      </div>
      <hr className="mb-6 mt-4" />
      <div className="flex items-center gap-1 ml-4 sm:ml-20 my-10">
        <div className="bg-[#0A8746] h-[25px] w-[15px] rounded-l-full"></div>
        <h1 className="text-3xl font-bold">Best Selling Products</h1>
      </div>
      <section>
        <Topproducts />
      </section>
      <section className="flex justify-center">
        <img src={b1} alt="Banner" />
      </section>
      <ProductSlider />
      <div className="mb-5 flex justify-center">
        <Buton
          title="View All Products"
          className="bg-btcol px-8 py-3 mt-5 rounded-md text-white shadow-md"
          to="/"
        />
      </div>
      <section className="flex justify-center">
        <img src={b1} alt="Banner" />
      </section>
      <FramSlider />
      <div className="flex justify-center gap-10 flex-wrap my-10">
        <Servisec
          icon={spv1}
          heading="FREE AND FAST DELIVERY"
          description={"Free delivery over all orders above 140$"}
        />
        <Servisec
          icon={spv2}
          heading="24/7 CUSTOMER SERVICE"
          description={"Friendly 24/7 customer support"}
        />
        <Servisec
          icon={spv3}
          heading="MONEY BACK GURANTEE"
          description={"We return money within 30 days"}
        />
      </div>
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

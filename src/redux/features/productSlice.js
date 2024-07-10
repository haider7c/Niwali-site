import { createSlice } from "@reduxjs/toolkit";
import p1 from "../../assets/p1.svg";
import p2 from "../../assets/p2.svg";
import p3 from "../../assets/p3.svg";
import p4 from "../../assets/p4.svg";
import p5 from "../../assets/p5.svg";
import p6 from "../../assets/p6.svg";
import p7 from "../../assets/p7.svg";
import p8 from "../../assets/p8.svg";

const initialState = {
  products: [
    {
      id: 1,
      cardImg: p1,
      prodname: "pds1",
      price: 360,
      orders: 50,
      discount: 260,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 2,
      cardImg: p2,
      prodname: "pds2",
      price: 250,
      orders: 70,
      discount: 150,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 3,
      cardImg: p3,
      prodname: "pds3",
      price: 110,
      orders: 40,
      discount: 55,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 4,
      cardImg: p4,
      prodname: "pds4",
      price: 150,
      orders: 20,
      discount: 75,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 5,
      cardImg: p5,
      prodname: "pds5",
      price: 460,
      orders: 40,
      discount: 360,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 6,
      cardImg: p6,
      prodname: "pds6",
      price: 342,
      orders: 60,
      discount: 150,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 7,
      cardImg: p7,
      prodname: "pds7",
      price: 115,
      orders: 35,
      discount: 55,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
    {
      id: 8,
      cardImg: p8,
      prodname: "pds8",
      price: 159,
      orders: 20,
      discount: 65,
      smdescription: "GUCCI INTENSE OUD EDP",
      description:
        "PlayStation 5 controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    },
  ],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
});

// export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;

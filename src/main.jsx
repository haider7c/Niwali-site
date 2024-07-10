import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Clients from "./Pages/Clients/Clients.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import Productdet from "./Pages/Productdet/Productdet.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Cart from "./Pages/Cart/Cart.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Category from "./Pages/Category/Category.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/productdet/:productId",
    element: <Productdet />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

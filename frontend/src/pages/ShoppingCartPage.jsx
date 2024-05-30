import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingPage/Footer";
import ShoppingCart from "../components/ShoppingCart";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ShoppingCart />
      <Footer></Footer>
      <div className="checkout sticky bottom-0 w-full flex justify-center items-center bg-white md:hidden">
        <Link to="/checkout">
          <button className="text-white bg-black py-4 my-4 rounded-3xl w-[90vw] font-bold">
            Go to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

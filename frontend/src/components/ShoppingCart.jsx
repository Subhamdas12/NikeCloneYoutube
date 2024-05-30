import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartAsync,
  selectItems,
  updateCartAsync,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import dustbin from "../assets/dustbin.png";
import { getTotalAmount, indianCurrency, tax } from "../constants/services";
import Swal from "sweetalert2";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);
  const totalAmountExcludingTax = getTotalAmount(cartItems);
  const handleQuantity = (e, item) => {
    console.log(item);
    dispatch(updateCartAsync({ _id: item._id, quantity: +e.target.value }));
  };
  const handleRemove = (item) => {
    Swal.fire({
      title: `Are you sure you want to delete ${item.product.title}`,
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "blue",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCartAsync(item._id));
      }
    });
  };
  return (
    <div>
      <div className="md:flex lg:px-48">
        <div className="bag w-full md:w-2/3">
          <div className="bag-first flex flex-col ">
            <h1 className="text-2xl font-semibold">Bag</h1>
            <h1 className="text-lg opacity-80 md:hidden">
              {cartItems.length}
              {cartItems.length > 1 ? "Items" : "Item"}| -
            </h1>
          </div>
          <div className="bag-second mb-5">
            {cartItems &&
              cartItems.map((item) => (
                <div className="flex py-4">
                  <div className="items-img w-1/6 flex justify-center mx-3">
                    <Link to={`/productOverview/${item.product._id}`}>
                      {console.log(item.product)}
                      <img
                        src={item.product.images[0]}
                        className="w--16 h-16 md:w-36 md:h-36"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="items-details w-3/6 md:ml-5 space-y-2">
                    <Link to={`/productOverview/${item.product._id}`}>
                      <p className="text-base font-medium leading-6 text-gray-900">
                        {item.product.title}
                      </p>{" "}
                    </Link>
                    <p>{item.product.category}</p>
                    <p className="text-sm font-medium leading-6 text-gray-900">
                      Size:{item.size}
                    </p>

                    <p className="text-sm font-medium leading-6 text-gray-900">
                      Color:{item.color}
                    </p>
                    <div className="">
                      <label htmlFor="quantity" className="">
                        Qty{"    "}
                      </label>
                      <select
                        value={item.quantity}
                        onChange={(e) => handleQuantity(e, item)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <img
                      src={dustbin}
                      onClick={() => handleRemove(item)}
                      className="w-6 h-6"
                      alt=""
                    />
                  </div>
                  <div className="items-price w-2/6 justify-center">
                    <p className="text-sm font-medium leading-6 text-gray-900">
                      MRP: {item.product.discountPrice}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="summery md:w-1/3">
          <div className="flex flex-col my-10">
            <h1 className="text-2xl font-semibold">Summery</h1>
          </div>
          <div className="pricing">
            <div className="subtotal flex justify-between">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Subtotal
              </h2>
              <h2 className="text-lg">
                {indianCurrency}
                {totalAmountExcludingTax}
              </h2>
            </div>
            <div className="estimatedDeliveryAndHandling flex justify-between">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Estimated Delivery & Handling
              </h2>
              <h2 className="text-lg">
                {indianCurrency}
                {tax}
              </h2>
            </div>
            <div className="Total mt-4 flex justify-between">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Total
              </h2>
              <h2 className="text-lg">
                {indianCurrency}
                {totalAmountExcludingTax + tax}
              </h2>
            </div>
          </div>
          <Link to="/checkout">
            <button className="w-full bg-black text-white py-4 rounded-3xl mb-8 mt-14 md:flex hidden justify-center items-center cursor-pointer hover:opacity-75">
              Member Checkout
            </button>
          </Link>
        </div>
      </div>

      <div className="md:w-1/3"></div>
    </div>
  );
};

export default ShoppingCart;

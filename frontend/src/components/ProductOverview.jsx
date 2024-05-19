import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByIdAsync,
  selectSelectedProduct,
} from "../features/product/productSlice";
import { indianCurrency } from "../constants/services";
import { RadioGroup } from "@headlessui/react";
import outlineHeart from "../assets/outline-heart.png";
import { CSSTransition } from "react-transition-group";
import filledheart from "../assets/filled-heart.png";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";
const ProductOverview = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showDeliveryReturn, setShowDeliveryReturn] = useState(false);
  const [showProductInfo, setShowProductInfo] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAsync(id));
    }
  }, [dispatch, id]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {product ? (
        <div className="px-5 md:px-12 w-full">
          <div className="wide md:flex md:px-4">
            <div className="viewImage md:flex md:w-4/6 hidden items-center justify-around h-fit">
              <div className="wide-first h-fit">
                {product.images &&
                  product.images.map((image, index) => (
                    <div
                      className="border-2 hover:border-gray-400 my-2 cursor-pointer rounded-lg p-3 md:w-fit transition-all duration-300"
                      onMouseOver={() => setCurrentImage(index)}
                    >
                      <img src={image} className="w-[3vw]" alt="" />
                    </div>
                  ))}
              </div>
              <div className="wide-second h-fit">
                <img
                  className="h-[80vh] w-[35vw]"
                  src={product.images && product.images[currentImage]}
                  alt=""
                />
              </div>
            </div>
            <div className="wide-third md:overflow-auto md:w-2/6 md:px-4">
              <div className="first">
                <h1 className="text-lg font-Oswald">{product.title}</h1>
                {product.gender && <p>Gender:{product.gender}</p>}
                {product.kids && <p>Kids:{product.kids}</p>}
                <p className="mt-2 text-sm text-gray-700 font-semibold">
                  MRP : {indianCurrency}
                  {product.discountPrice}
                </p>
                <p className="cursor-pointer opacity-50">
                  incl. of taxes <br />
                  (Also includes all applicable duties)
                </p>
                <div className="md:hidden scroll-container scroll-smooth flex flex-row overflow-x-auto ">
                  {product.images &&
                    product.images.map((image) => (
                      <div className="mx-2 text-left">
                        <img className="max-w-[90vw]" src={image} alt="" />
                      </div>
                    ))}
                </div>
              </div>
              <div className="second my-8">
                <h3 className="text-sm font-medium text-gray-900 my-4">
                  Color
                </h3>
                <div className="flex space-x-4">
                  {product.colors &&
                    product.colors.map((color) => (
                      <div
                        className={`${
                          color.class
                        } w-5 h-5 rounded-full cursor-pointer ${
                          selectedColor === color
                            ? "border-yellow-500 p-1"
                            : "border-black"
                        } border-2`}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    ))}
                </div>
              </div>
              <div className="third my-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <p className="text-sm font-medium opacity-80 text-black hover:opacity-100 cursor-pointer">
                    Size guide
                  </p>
                </div>
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            true
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-black" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size}
                            </RadioGroup.Label>
                            {true ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-black"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="fourth my-2 space-y-4">
                <button className="w-full bg-black text-white py-4 rounded-full hover:opacity-90">
                  Add to Bag
                </button>
                <button className="w-full flex items-center justify-center border-2 border-black border-opacity-30 hover:border-opacity-100 rounded-full  py-4">
                  <p className="mr-1">Favourite</p>
                  <img src={filledheart} className="w-4" alt="" />
                </button>
              </div>
              <div className="fifth">
                <p>{product.detail}</p>
                <div className="highlights space-y-2 my-4">
                  <h1 className="font-bold">Highlights</h1>
                  <li>{product.highlights[0]}</li>
                  <li>{product.highlights[1]}</li>
                  <li>{product.highlights[2]}</li>
                  <li>{product.highlights[3]}</li>
                </div>
                <div className="fifth-insides cursor-pointer select-none">
                  <div className="deliveryReturn my-5">
                    <div
                      className="flex justify-between items-center my-5"
                      onClick={() => setShowDeliveryReturn(!showDeliveryReturn)}
                    >
                      <h2 className="font-Oswald text-xl">
                        Delivery & Returns
                      </h2>
                      <img
                        src={showDeliveryReturn ? upArrow : downArrow}
                        alt=""
                        className="w-4 h-4"
                      />
                    </div>
                    <CSSTransition
                      in={showDeliveryReturn}
                      timeout={900}
                      classNames="nav-menu"
                      unmountOnExit
                    >
                      <div className="space-y-4">
                        <p>All purchases are subject to delivery fees.</p>
                        <li>Standard delivery 4–9 business days</li>
                        <p>
                          Orders are processed and delivered Monday–Friday
                          (excluding public holidays)
                        </p>
                        <p>Nike Members enjoy free returns.</p>
                      </div>
                    </CSSTransition>
                  </div>
                  {/* TODO:We need to make the review part */}
                  <div className="review"></div>
                  <div className="productInfo my-5">
                    <div
                      className="flex justify-between items-center my-5"
                      onClick={() => setShowProductInfo(!showProductInfo)}
                    >
                      <h1 className="font-Oswald text-xl">
                        Product Information
                      </h1>
                      <img
                        src={showProductInfo ? upArrow : downArrow}
                        alt=""
                        className="w-4 h-4"
                      />
                    </div>
                    <CSSTransition
                      in={showProductInfo}
                      timeout={900}
                      classNames="nav-menu"
                      unmountOnExit
                    >
                      <div className="space-y-4">
                        <p> Declaration of Importer:{product.declaration}</p>
                        <p>Marketed By:{product.marketedBy}</p>
                        <p>Origin:{product.origin}</p>
                      </div>
                    </CSSTransition>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default ProductOverview;

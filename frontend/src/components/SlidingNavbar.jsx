import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import rightArrow from "../assets/right-arrow.png";
import Heart from "../assets/outline-heart.png";
import Bag from "../assets/bag.png";
import Box from "../assets/box.png";
import Store from "../assets/store.png";
import Question from "../assets/question.png";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
export default function SlidingNavbar({ open, setOpen }) {
  const [user, setUser] = useState(false);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"></Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            <div className="first space-y-4">
                              <div className="section-1 flex justify-between items-center">
                                <h1 className="text-2xl">New & Featured</h1>
                                <img
                                  className="w-4 h-4 opacity-50"
                                  src={rightArrow}
                                  alt=""
                                />
                              </div>
                              <div className="section-1 flex justify-between items-center">
                                <h1 className="text-2xl">Mens</h1>
                                <img
                                  className="w-4 h-4 opacity-50"
                                  src={rightArrow}
                                  alt=""
                                />
                              </div>
                              <div className="section-1 flex justify-between items-center">
                                <h1 className="text-2xl">Womens</h1>
                                <img
                                  className="w-4 h-4 opacity-50"
                                  src={rightArrow}
                                  alt=""
                                />
                              </div>
                              <div className="section-1 flex justify-between items-center">
                                <h1 className="text-2xl">Kids</h1>
                                <img
                                  className="w-4 h-4 opacity-50"
                                  src={rightArrow}
                                  alt=""
                                />
                              </div>
                              <div className="section-1 flex justify-between items-center">
                                <h1 className="text-2xl">Sale</h1>
                                <img
                                  className="w-4 h-4 opacity-50"
                                  src={rightArrow}
                                  alt=""
                                />
                              </div>
                              <div className="section-1 flex justify-between items-center">
                                <h1 className="text-2xl">SNKRS</h1>
                                <img
                                  className="w-4 h-4 opacity-50"
                                  src={rightArrow}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="second pt-8 pb-10 flex justify-start">
                              <svg
                                height="24px"
                                width="24px"
                                fill="#111"
                                viewBox="0 0 26 32"
                                className="mx-7"
                              >
                                <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
                              </svg>
                              <h4 className="text-lg font-bold">Jordan</h4>
                            </div>
                            <div
                              className={`third ${user ? "hidden" : "block"}`}
                            >
                              <div className="section1 text-xl opacity-80">
                                <h3>
                                  Become a Nike Member for the best products,
                                  inspiration and stories in sports.{" "}
                                  <a href="https://www.nike.com/in/membership">
                                    <span className="font-bold">
                                      Learn More
                                    </span>
                                  </a>
                                </h3>
                              </div>
                              <div className="section2 my-8">
                                <button className="shop-button">Join Us</button>
                                <button className="shop-button-white">
                                  LogIn
                                </button>
                              </div>
                            </div>
                            <div className="fourth">
                              <div className="space-y-5">
                                <div
                                  className={`section1 ${
                                    user ? "flex" : "hidden"
                                  } items-center pl-5`}
                                >
                                  <img
                                    className="w-7 mx-4"
                                    src={Heart}
                                    alt=""
                                  />
                                  <h2 className="text-lg font-semibold mx-2">
                                    Favourite
                                  </h2>
                                </div>
                                <div
                                  className={`section2 flex items-center pl-5`}
                                >
                                  <img className="w-7 mx-4" src={Bag} alt="" />
                                  <h2 className="text-lg font-semibold mx-2">
                                    Bag
                                  </h2>
                                </div>
                                <div
                                  className={`section2 flex items-center pl-5`}
                                >
                                  <img className="w-7 mx-4" src={Box} alt="" />
                                  <h2 className="text-lg font-semibold mx-2">
                                    Order
                                  </h2>
                                </div>
                                <div
                                  className={`section2 flex items-center pl-5`}
                                >
                                  <img
                                    className="w-7 mx-4"
                                    src={Store}
                                    alt=""
                                  />
                                  <h2 className="text-lg font-semibold mx-2">
                                    Find a store
                                  </h2>
                                </div>
                                <div
                                  className={`section2 flex items-center pl-5`}
                                >
                                  <img
                                    className="w-7 mx-4"
                                    src={Question}
                                    alt=""
                                  />
                                  <h2 className="text-lg font-semibold mx-2">
                                    Help
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6"></div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

import React, { useEffect, useState } from "react";
import image1 from "../../assets/1e8674ca-9bad-49b2-9c92-9618d9d73bff.webp";
import image2 from "../../assets/fullscreen/branding.jpg";
import shoe1 from "../../assets/shoe1.jpg";
import shoe2 from "../../assets/shoe2.jpg";
import shoe3 from "../../assets/shoe3.jpg";
import shoe4 from "../../assets/shoe4.jpg";
import shoe5 from "../../assets/shoe5.jpg";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import ReactPlayer from "react-player";
import teamCollection from "../../assets/TeamCollection.jpg";
import dressToImpress from "../../assets/dressToImpress.jpg";
import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import kids from "../../assets/kids.jpg";
const Header = () => {
  const [windowDimention, setWindowDimention] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [showIcons, setShowIcons] = useState(false);
  const [showShoes, setShowShoes] = useState(false);
  const [showClothing, setShowClothing] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const detectSize = () => {
    setWindowDimention({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  const shopOptions = [
    {
      image: shoe5,
      name: "Air Max 270",
    },

    {
      image: shoe3,
      name: "Air Max 95",
    },
    {
      image: shoe1,
      name: "Air Max 97",
    },
    {
      image: shoe4,
      name: "Air Max Plus",
    },
    {
      image: shoe2,
      name: "Air Max 90",
    },
  ];
  const handleScroll = (direction) => {
    const container = document.querySelector(".scroll-container");
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimention]);
  return (
    <header>
      <div className="px-5 w-full md:px-12">
        <div className="first mb-32 md:mb-14">
          {windowDimention.winWidth > 768 ? (
            <img className="w-full" src={image2} alt="" />
          ) : (
            <img src={image1} alt="" />
          )}
          <div className="first-text text-left md:text-center">
            <p className="mt-7">Air Max 1</p>
            <h1 className="text-bolder md:text-bolder-md">No Genres</h1>
            <h1 className="text-bolder md:text-bolder-md">All Soul</h1>
            <button className="shop-button mt-12">Shop All</button>
          </div>
        </div>
        <div className="second">
          <div className="text-left flex justify-between items-center">
            <p className="text-lg px-2 py-7"> Air Max Collection</p>
            <div className="slide-buttons md:flex hidden">
              <div className="border-2 border-black rounded-full h-5 w-5 m-2">
                <HiArrowNarrowLeft onClick={() => handleScroll("left")} />
              </div>
              <div className="border-2 border-black rounded-full h-5 w-5 m-2">
                <HiArrowNarrowRight onClick={() => handleScroll("right")} />
              </div>
            </div>
          </div>
          <div className="scroll-container scroll-smooth flex flex-row overflow-x-auto">
            {shopOptions.map((shoe) => (
              <div className="mx-2 ">
                <img
                  className="max-w-[70vw] md:max-w-[30vw]"
                  src={shoe.image}
                  alt=""
                />
                <p className="text-xl px-2 py-7 ">{shoe.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="third mb-16">
          <div className="text-left">
            <p className="text-lg px-2 py-7 md:text-[2vw]">Just In</p>
            {windowDimention.winWidth > 762 ? (
              <ReactPlayer
                url="https://youtu.be/VnE7m8JI7MY"
                loop
                playing
                muted
                style={{ pointerEvents: "none" }}
                width="100%"
                className="mb-12"
                height="100vh"
              ></ReactPlayer>
            ) : (
              <ReactPlayer
                url="https://youtube.com/shorts/YD0wQxl48ZI"
                loop
                playing
                muted
                style={{ pointerEvents: "none" }}
                width="100%"
                className="mb-12"
                height="65vh"
              ></ReactPlayer>
            )}
            <div className="first-text md:text-center">
              <h1 className="text-bolder mb-5 md:text-bolder-md">Nike Tech</h1>
              <p className="">
                Engineered to the Exact Specification of Championship Athletes
              </p>
              <button className="shop-button my-5">
                Shop Air Jordan 1 Mid
              </button>
            </div>
          </div>
        </div>
        <div
          className="md:flex md:justify-center
        "
        >
          <div className="fourth text-left">
            <h1 className="text-lg mb-4 md:text-[2vw]">Trending</h1>
            <div className="md:relative">
              <img src={teamCollection} alt="" />
              <div className="first-text my-5 mx-4 space-y-5 md:absolute bottom-10 left-10">
                <h1 className="text-lg">National Team Collection</h1>
                <button className="shop-button">Shop</button>
              </div>
            </div>
          </div>
          <div className="fifth relative">
            <img className="opacity-90" src={dressToImpress} alt="" />
            <div className="text-first absolute bottom-5 md:bottom-48 left-5 space-y-5">
              <h1 className="text-white">Dress to Impress</h1>
              <button className="shop-button-white">Shop</button>
            </div>
          </div>
        </div>
        <div className="sixth text-left md:text-center">
          <h1 className="text-lg md:text-[2vw] mt-10 mb-4 text-left">
            The Latest
          </h1>
          {windowDimention.winWidth > 762 ? (
            <ReactPlayer
              url="https://youtu.be/O-JXUhhIRHU"
              loop
              playing
              muted
              style={{ pointerEvents: "none" }}
              width="100%"
              className="mb-12"
              height="100vh"
            ></ReactPlayer>
          ) : (
            <ReactPlayer
              url="https://youtube.com/shorts/V5Vfjd1am4E"
              loop
              playing
              muted
              style={{ pointerEvents: "none" }}
              width="100%"
              className="mb-12"
              height="65vh"
            ></ReactPlayer>
          )}

          <p>Nike App Early Access</p>
          <h1 className="text-bolder md:text-bolder-md">Air Jordan XXXVIII</h1>
          <h1 className="text-bolder md:text-bolder-md">Fundamental</h1>
          <div className="text-center flex justify-start md:justify-center w-full">
            <p className="md:max-w-[50%]">
              Enter the next chapter of the Air Jordan Legacy . Build to run
              floor , our "Fundamental" white,black and red colours way keeps
              the newest AJ true to our Jordan Brand DNA
            </p>
          </div>
          <button className="shop-button my-5 ">Shop</button>
        </div>
        <div className="seventh text-left">
          <h3 className="text-lg my-5 md:text-[2vw]">Don't Miss</h3>
          {windowDimention.winWidth > 762 ? (
            <ReactPlayer
              url="https://youtu.be/E2-efiAcS3w"
              loop
              playing
              muted
              style={{ pointerEvents: "none" }}
              width="100%"
              className="mb-12"
              height="100vh"
            ></ReactPlayer>
          ) : (
            <ReactPlayer
              url="https://youtube.com/shorts/_Df7NxfmvQA"
              loop
              playing
              muted
              style={{ pointerEvents: "none" }}
              width="100%"
              className="mb-12"
              height="65vh"
            ></ReactPlayer>
          )}
          <div className="text-first md:text-center">
            <p>Jordan Apparel</p>
            <h1 className="text-bolder md:text-bolder-md">
              Shades of <br className="md:hidden"></br>blue
            </h1>
            <p className="py-8">
              Keep your looks cool in wover pants , warm up jackets and fleece
              pieces
            </p>
            <button className="shop-button">Shop</button>
          </div>
        </div>
        <div className="eigth text-left py-12">
          <p className="text-lg my-6">The Essentials</p>
          <div className="eight-images sm:flex">
            <div className="first-img relative my-3 sm:mx-2">
              <img src={mens} alt="" />
              <button className="shop-button-white absolute bottom-5 left-5">
                Men's
              </button>
            </div>
            <div className="second-img relative my-3 sm:mx-2">
              <img src={womens} alt="" />
              <button className="shop-button-white absolute bottom-5 left-5">
                Women's
              </button>
            </div>
            <div className="third-img relative my-3 sm:mx-2">
              <img src={kids} alt="" />
              <button className="shop-button-white absolute bottom-5 left-5">
                Kid's
              </button>
            </div>
          </div>
        </div>
        <div className="nine text-left py-12 sm:flex sm:justify-around">
          <div className="firstOption my-4">
            <h2
              className="text-lg font-Oswald"
              onClick={() => setShowIcons((show) => !show)}
            >
              Icons
            </h2>
            <div
              className={`my-3 mx-6 space-y-2 opacity-50 ${
                showIcons ? "block" : "hidden"
              } sm:block ms:text-sm sm:mx-0 `}
            >
              <p className="cursor-pointer">Air Jordan 7 Retro</p>

              <p className="cursor-pointer">Air Jordan 1 Mid</p>

              <p className="cursor-pointer">Air Max 90</p>

              <p className="cursor-pointer">Air Max 95</p>

              <p className="cursor-pointer">Air Max 97</p>

              <p className="cursor-pointer">Air Max 270</p>

              <p className="cursor-pointer">Air Max 365</p>

              <p className="cursor-pointer">Air Max Plus</p>

              <p className="cursor-pointer">Air Max SC</p>
            </div>
          </div>
          <div className="secondOption my-4">
            <h2
              className="text-lg font-Oswald "
              onClick={() => setShowShoes((show) => !show)}
            >
              Shoes
            </h2>
            <div
              className={`secondOptions my-3 mx-6 space-y-2 opacity-50 ${
                showShoes ? "block" : "hidden"
              } sm:block sm:text-s sm:mx-0`}
            >
              <p className="cursor-pointer">All Shoes</p>
              <p className="cursor-pointer">Jordan Shoes</p>
              <p className="cursor-pointer">Mens Shoes</p>
              <p className="cursor-pointer">Womens Shoes</p>
              <p className="cursor-pointer">Unisex Shoes</p>
              <p className="cursor-pointer">Girls Shoes</p>
              <p className="cursor-pointer">Boys Shoes</p>
              <p className="cursor-pointer">Lifestyle Shoes</p>
            </div>
          </div>
          <div className="thirdOption my-4">
            <h2
              className="text-lg font-Oswald "
              onClick={() => setShowClothing((show) => !show)}
            >
              Clothing
            </h2>
            <div
              className={`thirdOptions my-3 mx-6 space-y-2 opacity-50 ${
                showClothing ? "block" : "hidden"
              } sm:block sm:text-s sm:mx-0`}
            >
              <p className="cursor-pointer">All Clothing</p>
              <p className="cursor-pointer">T - Shirt</p>
              <p className="cursor-pointer">Pants</p>
              <p className="cursor-pointer">Hoodies </p>
              <p className="cursor-pointer">Jackets</p>
              <p className="cursor-pointer">Dress</p>
              <p className="cursor-pointer">Sports Bras</p>
              <p className="cursor-pointer">Jersey</p>
            </div>
          </div>
          <div className="fourthOption my-4">
            <h2
              className="text-lg font-Oswald "
              onClick={() => setShowKids((show) => !show)}
            >
              Kids'
            </h2>
            <div
              className={`fourthOptions my-3 mx-6 space-y-2 opacity-50 ${
                showKids ? "block" : "hidden"
              } sm:block sm:text-s sm:mx-0`}
            >
              <p className="cursor-pointer">Infant & Toddler Shoes</p>
              <p className="cursor-pointer">Kids' Shoes</p>
              <p className="cursor-pointer">Kids' Hoodies</p>
              <p className="cursor-pointer">Kids' Jersey</p>
              <p className="cursor-pointer">Kids' Sports Bra</p>
              <p className="cursor-pointer">Kids' Jackets</p>
              <p className="cursor-pointer">Kids' Socks</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

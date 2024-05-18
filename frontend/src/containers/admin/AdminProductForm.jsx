import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAsync,
  selectCategories,
  selectColors,
  selectSizes,
} from "../../features/product/productSlice";

export default function AdminProductForm() {
  const colors = useSelector(selectColors);
  const sizes = useSelector(selectSizes);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="mx-5 md:mx-12">
      <form
        onSubmit={handleSubmit((data) => {
          // {
          //     "_id": {
          //       "$oid": "6646ef121a66c0c3ece0c452"
          //     },
          //     "title": "NikeCourt Legacy Canvas",
          //     "detail": "Honouring a history rooted in tennis culture, the NikeCourt Legacy Canvas brings you a classic in a modern, street-worthy design. Made from durable canvas and featuring heritage stitching and a retro Swoosh design, it lets you blend sport and fashion.",
          //     "price": 3112,
          //     "discount": 4,
          //     "sizes": [
          //       "5.5",
          //       "6.5",
          //       "9.5",
          //       "14.5"
          //     ],
          //     "category": "Footwear",
          //     "gender": "Men",
          //     "stock": 12550,
          //     "origin": "China",
          //     "declaration": "Direct import by the individual customer",
          //     "marketedBy": " Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
          //     "images": [
          //       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c32c3ee-e0f8-4ef8-ae0f-d407099c7fea/nikecourt-legacy-canvas-shoes-L6X9xF.png",
          //       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57d30e83-e68f-4b32-bbda-adf1b354a8c0/nikecourt-legacy-canvas-shoes-L6X9xF.png",
          //       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74581c3f-33a4-469b-8e6a-1bfede3e8a86/nikecourt-legacy-canvas-shoes-L6X9xF.png",
          //       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b0259aa-d000-4909-b86e-f391e383373d/nikecourt-legacy-canvas-shoes-L6X9xF.png",
          //       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58668f7f-da68-4514-958c-3a0f54d59f58/nikecourt-legacy-canvas-shoes-L6X9xF.png"
          //     ],
          //     "highlights": [
          //       "Tennis Heritage with a Modern Twist: The NikeCourt Legacy Canvas pays homage to tennis culture, making it an ideal choice for tennis enthusiasts. It retains the classic tennis shoe aesthetic but adds a modern, street-worthy design that seamlessly blends the rich heritage of the sport with contemporary fashion trends.",
          //       "Durable Canvas Construction: The use of durable canvas material ensures that these sneakers are built to last. Canvas is known for its sturdiness, making these shoes suitable for everyday wear and various activities. Whether you're on the court or navigating city streets, you can count on their durability.",
          //       "Heritage Stitching: The presence of heritage stitching on the NikeCourt Legacy Canvas adds a touch of authenticity to the design. This attention to detail not only enhances the aesthetics but also reflects the craftsmanship and quality associated with Nike products.",
          //       "Retro Swoosh Design: The inclusion of a retro Swoosh design further reinforces the classic appeal of these sneakers. The Swoosh logo is an iconic symbol of Nike's legacy, and its presence on these shoes showcases a timeless style that can effortlessly transition from sports to fashion."
          //     ],
          //     "discountPrice": 2988,
          //     "__v": 0,
          //     "colors": [
          //       {
          //         "name": "White",
          //         "class": "bg-white",
          //         "selectedClass": "rgb(255 255 255)",
          //         "id": "64efeff4bfdecef534370182"
          //       },
          //       {
          //         "name": "Black",
          //         "class": "bg-black",
          //         "selectedClass": "rgb(0 0 0)",
          //         "id": "64efeff4bfdecef534370185"
          //       }
          //     ],
          //     "kids": "Boys",
          //     "rating": 0,
          //     "createdAt": "2023-09-02T02:54:57.164+00:00",
          //     "updatedAt": {
          //       "$date": "2024-04-01T10:21:44.908Z"
          //     }
          //   }
          console.log(data);
          if (
            data.colors &&
            data.sizes &&
            data.colors.length &&
            data.sizes.length
          ) {
            const product = { ...data };
            product.images = [
              product.coverPhoto,
              product.image1,
              product.image2,
              product.image3,
              product.image4,
            ];
            product.highlights = [
              product.highlight1,
              product.highlight2,
              product.highlight3,
              product.highlight4,
            ];
            delete product.coverPhoto;
            delete product.image1;
            delete product.image2;
            delete product.image3;
            delete product.image4;
            delete product.highlight1;
            delete product.highlight2;
            delete product.highlight3;
            delete product.highlight4;
            product.colors = product.colors.map((color) => {
              return colors.find((clr) => clr.name === color);
            });
            product.price = +product.price;
            product.stock = +product.stock;
            product.discount = +product.discount;
            dispatch(createProductAsync(product));
            reset();
          } else {
            alert("Either color or size is not chosen");
          }
        })}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Upload new Item
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              The details filled will be saved in the database
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Nike Jordan X"
                      {...register("title", { required: "Title is required" })}
                    />
                  </div>
                  {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Details
                </label>
                <div className="mt-2">
                  <textarea
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Smooth, inside and out. Crafted from our premium fleece, this classic Nike Windrunner design hooks you up with laid-back style while delivering the Tech Fleece goods"
                    {...register("detail", { required: "Detail is required" })}
                  />
                  {errors.detail && (
                    <p className="text-red-500">{errors.detail.message}</p>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the product.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="1200"
                    {...register("price", {
                      required: "Price is required",
                      min: { value: 1, message: "Price should be atleast 1" },
                    })}
                  />
                  {errors.price && (
                    <p className="text-red-500">{errors.price.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Discount Percentage
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="10"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("discount", {
                      required: "Discount is required",
                      min: {
                        value: 0,
                        message: "Discount must be atleast 0",
                      },
                      max: { value: 99, message: "Discount cannot exceed 99" },
                    })}
                  />
                  {errors.discount && (
                    <p className="text-red-500">{errors.discount.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Size
                </label>
                <div className="mt-2 space-x-3">
                  {sizes.length &&
                    sizes.map((size, index) => (
                      <>
                        <input
                          type="checkBox"
                          value={size.value}
                          key={index}
                          {...register("sizes", {})}
                        />
                        {size.label}
                      </>
                    ))}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Colors
                </label>
                <div className="mt-2 space-x-3">
                  {colors.length &&
                    colors.map((color, index) => (
                      <>
                        <input
                          type="checkBox"
                          value={color.name}
                          key={index}
                          {...register("colors", {})}
                        />
                        {color.name}
                      </>
                    ))}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2  ">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("category", {
                      required: "category is required",
                    })}
                  >
                    <option value="" disabled>
                      --choose category--
                    </option>
                    {categories.length &&
                      categories.map((category, index) => (
                        <option key={index} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500">{errors.category.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gender
                </label>
                <div className="mt-2  ">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("gender", {
                      required: "gendedr is required",
                    })}
                  >
                    <option value="" disabled>
                      --choose gender--
                    </option>
                    <option value="Boys">Men</option>
                    <option value="Women">Women</option>
                    <option value="Unisex">Unisex</option>
                    <option value="None">None</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500">{errors.gender.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Kids
                </label>
                <div className="mt-2  ">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("kids", {
                      required: "kids is required",
                    })}
                  >
                    <option value="" disabled>
                      --choose kids--
                    </option>
                    <option value="Boys">Boys</option>
                    <option value="Girls">Girls</option>
                    <option value="None">None</option>
                  </select>
                  {errors.kids && (
                    <p className="text-red-500">{errors.kids.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Stock
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="6000"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("stock", {
                      required: "Stock is required",
                      min: {
                        value: 1,
                        message: "Atleast one item should be in  the stock",
                      },
                    })}
                  />
                  {errors.stock && (
                    <p className="text-red-500">{errors.stock.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Country Of Origin
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="India"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("origin", {
                      required: "Origin is required",
                    })}
                  />
                  {errors.origin && (
                    <p className="text-red-500">{errors.origin.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Declaration Of Importer
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Direct import by the individual customer"
                    value=" Direct import by the individual customer"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("declaration", {
                      required: "Declaration is required",
                    })}
                  />
                  {errors.declaration && (
                    <p className="text-red-500">{errors.declaration.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Marketed By
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value="Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440"
                    placeholder="Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("marketedBy", {
                      required: "Marketed by is required",
                    })}
                  />
                  {errors.marketedBy && (
                    <p className="text-red-500">{errors.marketedBy.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900 ">
                  Cover Photo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="https://assets.nike.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a29d1/-1117Wx1400H-469034008-black-MODEL.jpg"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("coverPhoto", {
                      required: "Cover photo is required",
                    })}
                  />
                  {errors.coverPhoto && (
                    <p className="text-red-500">{errors.coverPhoto.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Image 1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="https://assets.nike.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a29d1/-1117Wx1400H-469034008-black-MODEL.jpg"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("image1", {
                      required: "image 1 is required",
                    })}
                  />
                  {errors.image1 && (
                    <p className="text-red-500">{errors.image1.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Image 2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="https://assets.nike.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a29d1/-1117Wx1400H-469034008-black-MODEL.jpg"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("image2", {
                      required: "image 2 is required",
                    })}
                  />
                  {errors.image2 && (
                    <p className="text-red-500">{errors.image2.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Image 3
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="https://assets.nike.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a29d1/-1117Wx1400H-469034008-black-MODEL.jpg"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("image3", {
                      required: "image 3 is required",
                    })}
                  />
                  {errors.image3 && (
                    <p className="text-red-500">{errors.image3.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Image 4
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("image4", {
                      required: "image 4 is required",
                    })}
                    placeholder="https://assets.nike.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a29d1/-1117Wx1400H-469034008-black-MODEL.jpg"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.image4 && (
                    <p className="text-red-500">{errors.image4.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Highlight 1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="New Color Palette: The introduction of a new color palette inspired by natural minerals adds a fresh and contemporary touch to the classic Tech Fleece design. This update ensures that the product remains on-trend and visually appealing."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("highlight1", {
                      required: "highlight 1 is required",
                    })}
                  />
                  {errors.highlight1 && (
                    <p className="text-red-500">{errors.highlight1.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Highlight 2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="New Color Palette: The introduction of a new color palette inspired by natural minerals adds a fresh and contemporary touch to the classic Tech Fleece design. This update ensures that the product remains on-trend and visually appealing."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("highlight2", {
                      required: "highlight 2 is required",
                    })}
                  />
                  {errors.highlight2 && (
                    <p className="text-red-500">{errors.highlight2.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Highlight 3
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="New Color Palette: The introduction of a new color palette inspired by natural minerals adds a fresh and contemporary touch to the classic Tech Fleece design. This update ensures that the product remains on-trend and visually appealing."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("highlight3", {
                      required: "highlight 3 is required",
                    })}
                  />
                  {errors.highlight3 && (
                    <p className="text-red-500">{errors.highlight3.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Highlight 4
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="New Color Palette: The introduction of a new color palette inspired by natural minerals adds a fresh and contemporary touch to the classic Tech Fleece design. This update ensures that the product remains on-trend and visually appealing."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("highlight4", {
                      required: "highlight 4 is required",
                    })}
                  />
                  {errors.highlight4 && (
                    <p className="text-red-500">{errors.highlight4.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Click save to save the product <br /> Click cancel to cancel the
              product <br /> Click delete to delete the product
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete
          </button>
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

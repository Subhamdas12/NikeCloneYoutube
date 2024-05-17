import { useSelector } from "react-redux";
import { indianCurrency } from "../constants/services";
import { selectProducts } from "../features/product/productSlice";
const products1 = [
  {
    title: "Nike Air Max SC",
    detail:
      "With its easy-going lines, heritage athletics look and, of course, visible Air cushioning, the Nike Air Max SC is the perfect finish to any outfit. The rich mixture of materials adds depth while making it a durable and lightweight shoe for everyday wear.",
    price: 5995,
    discount: 2,
    sizes: [
      "3",
      "3.5",
      "4",
      "4.5",
      "5",
      "5.5",
      "6(EU 40)",
      "6.5",
      "7.5",
      "8",
      "9",
      "9.5",
    ],
    category: "Footwear",
    gender: "Women",
    kids: "Boys",
    stock: 5999,
    origin: "Russia",
    declaration: " Direct import by the individual customer",
    marketedBy:
      "Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c542190-ba8d-4a32-8bed-b12284e3d589/air-max-sc-shoes-FVn5sK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10ce894d-2914-4a40-9471-848cf16771a1/air-max-sc-shoes-FVn5sK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/961c4bc8-f0a1-4010-b4db-59c545f84a73/air-max-sc-shoes-FVn5sK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92420be0-b86e-47fc-9ede-8de31d1f6ea1/air-max-sc-shoes-FVn5sK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7668d761-57a1-4ba6-b103-dcbe2d4cc2df/air-max-sc-shoes-FVn5sK.png",
    ],
    highlights: [
      "Timeless Heritage: The Nike Air Max SC effortlessly blends heritage athletics aesthetics with modern style. Its easy-going lines pay homage to the brand's iconic design legacy, making it a must-have for sneaker enthusiasts who appreciate a classic look.",
      "Visible Air Innovation: Featuring Nike's signature visible Air cushioning, the Air Max SC not only delivers a stylish appearance but also ensures superior comfort with each step. This innovative technology adds a layer of responsiveness and support that's ideal for all-day wear.",
      "Premium Material Fusion: The Air Max SC's rich mixture of materials not only enhances its overall appeal but also contributes to its durability and lightweight construction. This fusion of high-quality materials ensures the shoe can withstand the rigors of daily life while keeping you comfortable throughout the day.",
      "Versatile Wardrobe Essential: Whether you're dressing up or down, the Nike Air Max SC is the perfect finishing touch to any outfit. Its versatile design and comfortable build make it a go-to choice for both style-conscious individuals and those seeking reliable, everyday footwear.",
    ],
    discountPrice: 5875,

    colors: [
      {
        name: "Blue",
        class: "bg-blue-500",
        selectedClass: "rgb(59 130 246)",
        id: "64efeff4bfdecef534370180",
      },
      {
        name: "Gray",
        class: "bg-gray-500",
        selectedClass: "rgb(107 114 128)",
        id: "64efeff4bfdecef534370181",
      },
      {
        name: "White",
        class: "bg-white",
        selectedClass: "rgb(255 255 255)",
        id: "64efeff4bfdecef534370182",
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "rgb(0 0 0)",
        id: "64efeff4bfdecef534370185",
      },
    ],
    rating: 0,
  },
  {
    title: "Nike Dri-FIT ",
    detail:
      "You love football and you're ready to show it. Twisting details from the past, present and future, this elongated tunic is pitch perfect whether you're at a match or showing off your skills at break time.",
    price: 3095,
    discount: 2,
    sizes: ["6(EU 40)", "7.5", "9.5", "11", "3.5"],
    colors: [
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "rgb(34 197 94)",
        id: "64efeff4bfdecef534370184",
      },
      {
        name: "Yellow",
        class: "bg-yellow-500",
        selectedClass: "rgb(234 179 8)",
        id: "64efeff4bfdecef534370187",
      },
    ],
    category: "Dresses",
    kids: "Girls",
    stock: 7706,
    rating: 0,
    origin: "India",
    declaration: "Direct import by the individual customer",
    marketedBy:
      "Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e27ed1c-14a2-4d4e-8db5-b49796adff00/dri-fit-older-football-jersey-tunic-97rpT1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bd6f49ca-b69e-40d8-a3ab-cfb2869f2b1a/dri-fit-older-football-jersey-tunic-97rpT1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6510e5a3-7d7b-41b2-b058-eb32df7ba990/dri-fit-older-football-jersey-tunic-97rpT1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82b56fa3-e700-4e0c-aaa8-609306f8d042/dri-fit-older-football-jersey-tunic-97rpT1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/761acc22-8515-4edb-a1f8-4125dbf6cde5/dri-fit-older-football-jersey-tunic-97rpT1.png",
    ],
    highlights: [
      "Passion for Football: The passage underscores a deep love and passion for football. It's a statement of dedication and enthusiasm for the sport, indicating a strong connection to the game.",
      "Timeless Style: The elongated tunic blends elements from the past, present, and future, creating a style that transcends eras. This timeless fashion choice ensures that you look and feel confident, whether you're watching a match or showcasing your skills during break time.",
      'Versatile and Stylish: The tunic is described as "pitch perfect," implying its versatility and suitability for various occasions. It\'s not just for the football field but can also be a stylish choice for casual wear, emphasizing its adaptability.',
      'Attention to Detail: The use of the term "twisting details" suggests a high level of attention to design and aesthetics. These unique design elements contribute to the overall appeal of the tunic, making it a standout choice for football enthusiasts.',
    ],
    discountPrice: 3033,
  },
];

export default function ProductList() {
  const products = useSelector(selectProducts);
  return (
    <div className="bg-white">
      {products ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product, index) => (
              <div key={index}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7  ">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 font-semibold">
                  {product.title}
                </h3>
                <h3 className="mt-2 text-sm text-gray-700">
                  {product.detail.slice(0, 25) + "...."}
                </h3>
                <h3 className="mt-2 text-sm text-gray-700">
                  Color {product.colors.length}
                </h3>
                <h3 className="mt-2 text-sm text-gray-700 font-semibold">
                  MRP:{indianCurrency}
                  {product.discountPrice}
                </h3>
                <h3 className="mt-2 text-sm text-gray-700 font-semibold line-through">
                  MRP:{indianCurrency}
                  {product.price}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="">No product is available</div>
      )}
    </div>
  );
}

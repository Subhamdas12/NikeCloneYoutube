import { useSelector } from "react-redux";
import { indianCurrency } from "../constants/services";
import { selectProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = useSelector(selectProducts);
  return (
    <div className="bg-white">
      {products ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product, index) => (
              <Link to={`/productOverview/${product._id}`}>
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
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="">No product is available</div>
      )}
    </div>
  );
}

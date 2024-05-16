import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <CategoryFilter>
        <ProductList></ProductList>
      </CategoryFilter>
    </div>
  );
};

export default Home;

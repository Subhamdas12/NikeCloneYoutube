import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingPage/Footer";
import ProductOverview from "../components/ProductOverview";
import { useParams } from "react-router-dom";

const ProductOverviewPage = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <Navbar />
      <ProductOverview id={id} />
      <Footer />
    </div>
  );
};

export default ProductOverviewPage;

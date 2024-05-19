import React, { useEffect } from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import {
  fetchCategoriesAsync,
  fetchColorsAsync,
  fetchSizesAsync,
} from "./features/product/productSlice";
import AdminProductFormPage from "./pages/admin/AdminProductFormPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductOverviewPage from "./pages/ProductOverviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addProduct",
    element: <AdminProductFormPage />,
  },
  {
    path: "/productOverview/:id",
    element: <ProductOverviewPage />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchColorsAsync());
    dispatch(fetchSizesAsync());
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

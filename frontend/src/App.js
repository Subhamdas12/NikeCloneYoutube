import React, { useEffect } from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
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
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { checkUserAsync, selectLogginUser } from "./features/auth/authSlice";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { fetchCartAsync } from "./features/cart/cartSlice";

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
  {
    path: "/shoppingCart",
    element: <ShoppingCartPage />,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLogginUser);
  useEffect(() => {
    dispatch(fetchColorsAsync());
    dispatch(checkUserAsync());
    dispatch(fetchSizesAsync());
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartAsync());
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

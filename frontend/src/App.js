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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchColorsAsync());
    dispatch(fetchSizesAsync());
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Home />
    </div>
  );
}

export default App;

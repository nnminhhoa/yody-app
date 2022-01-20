import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const ProductMale = lazy(() => import("../pages/ProductMale"));
const ProductFeMale = lazy(() => import("../pages/ProductFeMale"));
const Offer = lazy(() => import("../pages/Offer"));
const Collection = lazy(() => import("../pages/Collection"));
const ProductChildren = lazy(() => import("../pages/ProductChildren"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-male" element={<ProductMale />} />
      <Route path="product-female" element={<ProductFeMale />} />
      <Route path="offer" element={<Offer />} />
      <Route path="product-children" element={<ProductChildren />} />
      <Route path="collection" element={<Collection />} />
    </Routes>
  );
};

export default Routers;

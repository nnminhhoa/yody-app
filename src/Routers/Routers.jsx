import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const ProductMale = lazy(() => import("../pages/ProductMale"));
const ProductFemale = lazy(() => import("../pages/ProductFemale"));
const Offer = lazy(() => import("../pages/Offer"));
const Collection = lazy(() => import("../pages/Collection"));
const ProductChildren = lazy(() => import("../pages/ProductChildren"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-male" element={<ProductMale />} />
      <Route path="product-female" element={<ProductFemale />} />
      <Route path="offer" element={<Offer />} />
      <Route path="product-children" element={<ProductChildren />} />
      <Route path="collection" element={<Collection />} />
    </Routes>
  );
};

export default Routers;

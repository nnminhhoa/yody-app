import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const ProductMale = lazy(() => import("../pages/Male"));
const ProductFeMale = lazy(() => import("../pages/FeMale"));
const Offer = lazy(() => import("../pages/Offer"));
const Collection = lazy(() => import("../pages/Collection"));
const ProductChildren = lazy(() => import("../pages/Children"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="male" element={<ProductMale />} />
      <Route path="female" element={<ProductFeMale />} />
      <Route path="offer" element={<Offer />} />
      <Route path="children" element={<ProductChildren />} />
      <Route path="collection" element={<Collection />} />
    </Routes>
  );
};

export default Routers;

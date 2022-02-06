import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Male = lazy(() => import("../pages/Male"));
const FeMale = lazy(() => import("../pages/FeMale"));
const Offer = lazy(() => import("../pages/Offer"));
const Collection = lazy(() => import("../pages/Collection"));
const Children = lazy(() => import("../pages/Children"));
const Shop = lazy(() => import("../components/Shop/Shop"));
const Catalog = lazy(() => import("../components/Catalog/Catalog"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/male" element={<Male />} />
      <Route path="/female" element={<FeMale />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/children" element={<Children />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/product:path" element={<Shop />} />
      <Route path="/:path" element={<Catalog />} />
    </Routes>
  );
};

export default Routers;

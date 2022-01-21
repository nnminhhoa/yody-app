import React, { Suspense } from "react";
import "./scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers/Routers";
import Header from "./components/Header/Header";
import SuspenseFallback from "./components/Suspense/SuspenseFallback";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollOnTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollOnTop />
      <Header />
      <Suspense fallback={<SuspenseFallback />}>
        <Routers />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

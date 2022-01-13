import React from "react";
import Footer from "../components/Footer/Footer";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Service from "../components/Service/Service";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider />
      <Service />
      <Footer />
    </Helmet>
  );
};

export default Home;

import React from "react";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Section, {
  SectionBanner,
  SectionBody,
  SectionProduct,
  SectionTitle,
} from "../components/Section/Section";
import Servicer from "../components/Servicer/Servicer";
import bannerImage_1 from "../assets/images/banner_hangngay_1.jpg";
import bannerImage_2 from "../assets/images/banner_hangngay_2.jpg";
import bannerImage_3 from "../assets/images/banner_hangngay_3.jpg";
import dataProducts from "../assets/data/dataProducts";
import dataNews from "../assets/data/dataNews";
import dataSliderDesktop from "../assets/data/dataSlider";
import { dataSliderMd } from "../assets/data/dataSlider";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        dataSliderDk={dataSliderDesktop.getSliderDesktopByPath(pathname)}
        dataSliderMd={dataSliderMd.getSliderMdByPath(pathname)}
      />
      <Servicer col={4} mdCol={2} smCol={2} gap={15} />
      <Section backgroundColor="beige">
        <SectionTitle>SALE UPTO 60%</SectionTitle>
        <SectionBanner banner={bannerImage_1} />
        <SectionBody dataProduct={dataProducts.getProductSale(20)} />
      </Section>
      <Section backgroundColor="main">
        <SectionTitle>#YODYsale</SectionTitle>
        <SectionBanner banner={bannerImage_2} />
        <SectionBanner banner={bannerImage_3} />
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionProduct dataProduct={dataProducts.getProductSale(20)} />
      </Section>
      <Section backgroundColor="azure">
        <SectionTitle>#YODYLOVE</SectionTitle>
        <SectionBody dataNew={dataNews.getAllNews()} />
      </Section>
    </Helmet>
  );
};

export default Home;

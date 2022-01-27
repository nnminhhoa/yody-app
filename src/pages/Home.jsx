import React from "react";
import Footer from "../components/Footer/Footer";
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

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        dataSliderDk={dataSliderDesktop.getSliderDesktopByPage("home")}
        dataSliderMd={dataSliderMd.getSliderMdByPage("home")}
      />
      <Servicer />
      <Section backgroundColor="beige">
        <SectionTitle>SALE UPTO 60%</SectionTitle>
        <SectionBanner banner={bannerImage_1} />
        <SectionBody dataProduct={dataProducts.getAllProductSale()} />
      </Section>
      <Section backgroundColor="main">
        <SectionTitle>#YODYsale</SectionTitle>
        <SectionBanner banner={bannerImage_2} />
        <SectionBanner banner={bannerImage_3} />
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionProduct dataProduct={dataProducts.getAllProductSale()} />
        
      </Section>
      <Section backgroundColor="azure">
        <SectionTitle>#YODYLOVE</SectionTitle>
        <SectionBody dataNew={dataNews.getAllNews()} />
      </Section>
      <Footer />
    </Helmet>
  );
};

export default Home;

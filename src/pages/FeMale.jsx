import React from "react";
import dataCategorySection, {
  dataBannerCate,
} from "../assets/data/dataCategorySection";
import dataNews from "../assets/data/dataNews";
import dataProducts from "../assets/data/dataProducts";
import dataSliderDesktop, { dataSliderMd } from "../assets/data/dataSlider";
import Footer from "../components/Footer/Footer";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Section, {
  SectionBody,
  SectionCategory,
  SectionCateStyle,
  SectionProduct,
  SectionTitle,
} from "../components/Section/Section";
import Servicer from "../components/Servicer/Servicer";

const FeMale = () => {
  return (
    <Helmet title="Thời trang nữ">
      <HeroSlider
        dataSliderDk={dataSliderDesktop.getSliderDesktopByPage("woman")}
        dataSliderMd={dataSliderMd.getSliderMdByPage("woman")}
      />
      <Servicer />
      <Section>
        <SectionTitle>MUA THEO THỂ LOẠI</SectionTitle>
        <SectionCategory
          dataCategory={dataCategorySection.getImageCateByPage("woman")}
        />
      </Section>
      <Section>
        <SectionTitle>MUA THEO PHONG CÁCH</SectionTitle>
        <SectionCateStyle
          dataBannerCate={dataBannerCate.getBannerCateByPage("woman")}
        />
      </Section>
      <Section backgroundColor="beige">
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionProduct
          dataProduct={dataProducts.getProductByInfo("woman").slice(0, 15)}
        />
      </Section>
      <Section backgroundColor="azure">
        <SectionTitle>#YODYLOVE</SectionTitle>
        <SectionBody dataNew={dataNews.getAllNews()} />
      </Section>
      <Footer />
    </Helmet>
  );
};

export default FeMale;

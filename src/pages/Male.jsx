import React from "react";
import dataSliderDesktop, { dataSliderMd } from "../assets/data/dataSlider";
import Helmet from "../components/Helmet/Helmet";
import Servicer from "../components/Servicer/Servicer";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Section, {
  SectionBody,
  SectionCategory,
  SectionCateStyle,
  SectionProduct,
  SectionTitle,
} from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import dataCategorySection, {
  dataBannerCate,
} from "../assets/data/dataCategorySection";
import dataNews from "../assets/data/dataNews";
import dataProducts from "../assets/data/dataProducts";

const Male = () => {
  return (
    <Helmet title="Thời trang nam">
      <HeroSlider
        dataSliderDk={dataSliderDesktop.getSliderDesktopByPage("man")}
        dataSliderMd={dataSliderMd.getSliderMdByPage("man")}
      />
      <Servicer />
      <Section>
        <SectionTitle>MUA THEO THỂ LOẠI</SectionTitle>
        <SectionCategory
          dataCategory={dataCategorySection.getImageCateByPage("man")}
        />
      </Section>
      <Section>
        <SectionTitle>MUA THEO PHONG CÁCH</SectionTitle>
        <SectionCateStyle
          dataBannerCate={dataBannerCate.getBannerCateByPage("man")}
        />
      </Section>
      <Section backgroundColor="beige">
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionProduct
          dataProduct={dataProducts.getProductByInfo("man").slice(0, 15)}
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

export default Male;

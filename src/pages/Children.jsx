import React from "react";
import { useLocation } from "react-router-dom";
import dataCategorySection, {
  dataBannerCate,
} from "../assets/data/dataCategorySection";
import dataNews from "../assets/data/dataNews";
import dataProducts from "../assets/data/dataProducts";
import dataSliderDesktop, { dataSliderMd } from "../assets/data/dataSlider";
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

const Children = () => {
  const { pathname } = useLocation();
  return (
    <Helmet title="Thời trang trẻ em">
      <HeroSlider
        dataSliderDk={dataSliderDesktop.getSliderDesktopByPath(pathname)}
        dataSliderMd={dataSliderMd.getSliderMdByPath(pathname)}
      />
      <Servicer col={4} mdCol={2} smCol={2} gap={15} />
      <Section>
        <SectionTitle>MUA THEO THỂ LOẠI</SectionTitle>
        <SectionCategory
          dataCategory={dataCategorySection.getImageCateByPath(pathname)}
        />
      </Section>
      <Section>
        <SectionTitle>MUA THEO PHONG CÁCH</SectionTitle>
        <SectionCateStyle
          dataBannerCate={dataBannerCate.getBannerCateByPath(pathname)}
        />
      </Section>
      <Section backgroundColor="beige">
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionProduct
          dataProduct={dataProducts
            .getProductByPath("/product-children")
            .slice(0, 10)}
        />
      </Section>
      <Section backgroundColor="azure">
        <SectionTitle>#YODYLOVE</SectionTitle>
        <SectionBody dataNew={dataNews.getAllNews()} />
      </Section>
    </Helmet>
  );
};

export default Children;

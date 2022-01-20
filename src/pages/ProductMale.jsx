import React from "react";
import dataSliderDesktop, { dataSliderMd } from "../assets/data/dataSlider";
import Helmet from "../components/Helmet/Helmet";
import Servicer from "../components/Servicer/Servicer";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Section, { SectionTitle } from "../components/Section/Section";

const ProductMale = () => {
  return (
    <Helmet title="Thời trang nam">
      <HeroSlider
        dataSliderDk={dataSliderDesktop.getSliderDesktopByPage("nam")}
        dataSliderMd={dataSliderMd.getSliderMdByPage("nam")}
      />
      <Servicer />
      <Section>
        <SectionTitle>MUA THEO THỂ LOẠI</SectionTitle>
      </Section>
    </Helmet>
  );
};

export default ProductMale;

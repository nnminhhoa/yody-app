import image_slider_01 from "../images/slider_2.jpg";
import image_slider_02 from "../images/slider_3.jpg";
import image_slider_03 from "../images/slider_4.jpg";
import image_slider_04 from "../images/slider_5.jpg";
import image_slider_05 from "../images/page_nam_slider_1.jpg";
import image_slider_06 from "../images/banner_hangngay_3.jpg";

import image_sliderMd_01 from "../images/slider_2_mb.jpg";
import image_sliderMd_02 from "../images/slider_3_mb.jpg";
import image_sliderMd_03 from "../images/slider_4_mb.jpg";
import image_sliderMd_04 from "../images/slider_5_mb.jpg";
import image_sliderMd_05 from "../images/page_nam_slider_1_mb.jpg";

const SliderDesktop = [
  {
    image: image_slider_01,
    page: "home",
  },
  {
    image: image_slider_02,
    page: "home",
  },
  {
    image: image_slider_03,
    page: "home",
  },
  {
    image: image_slider_04,
    page: "home",
  },
  {
    image: image_slider_05,
    page: "nam",
  },
  {
    image: image_slider_06,
    page: "nam",
  },
];

const SliderMd = [
  {
    image: image_sliderMd_01,
    page: "home",
  },
  {
    image: image_sliderMd_02,
    page: "home",
  },
  {
    image: image_sliderMd_03,
    page: "home",
  },
  {
    image: image_sliderMd_04,
    page: "home",
  },
  {
    image: image_sliderMd_05,
    page: "nam",
  },
];

const getSliderDesktopByPage = (page) =>
  SliderDesktop.filter((e) => e.page === page);

const dataSliderDesktop = {
  getSliderDesktopByPage,
};

const getSliderMdByPage = (page) => SliderMd.filter((e) => e.page === page);

export const dataSliderMd = {
  getSliderMdByPage,
};

export default dataSliderDesktop;

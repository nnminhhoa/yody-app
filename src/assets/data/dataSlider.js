import image_slider_01 from "../images/slider_2.jpg";
import image_slider_02 from "../images/slider_3.jpg";
import image_slider_03 from "../images/slider_4.jpg";
import image_slider_04 from "../images/slider_5.jpg";
import image_slider_05 from "../images/page_nam_slider_1.jpg";
import image_slider_06 from "../images/banner_hangngay_3.jpg";
import image_slider_07 from "../images/banner_hangngay_2.jpg";
import image_slider_08 from "../images/page_treem_slider_1.jpg";

import image_sliderMd_01 from "../images/slider_2_mb.jpg";
import image_sliderMd_02 from "../images/slider_3_mb.jpg";
import image_sliderMd_03 from "../images/slider_4_mb.jpg";
import image_sliderMd_04 from "../images/slider_5_mb.jpg";
import image_sliderMd_05 from "../images/page_nam_slider_1_mb.jpg";
import image_sliderMd_06 from "../images/page_nu_slider_1_mb.jpg";
import image_sliderMd_07 from "../images/page_treem_slider_1_mb.jpg";

const SliderDesktop = [
  {
    path: "/",
    slide: [
      {
        image: image_slider_01,
      },
      {
        image: image_slider_02,
      },
      {
        image: image_slider_03,
      },
      {
        image: image_slider_04,
      },
    ],
  },
  {
    path: "/male",
    slide: [
      {
        image: image_slider_05,
      },
      {
        image: image_slider_06,
      },
    ],
  },
  {
    path: "/female",
    slide: [
      {
        image: image_slider_07,
      },
    ],
  },
  {
    path: "/children",
    slide: [
      {
        image: image_slider_08,
      },
    ],
  },
];

const SliderMd = [
  {
    path: "/",
    slide: [
      {
        image: image_sliderMd_01,
      },
      {
        image: image_sliderMd_02,
      },
      {
        image: image_sliderMd_03,
      },
      {
        image: image_sliderMd_04,
      },
    ],
  },

  {
    path: "/male",
    slide: [
      {
        image: image_sliderMd_05,
      },
    ],
  },

  {
    path: "/female",
    slide: [
      {
        image: image_sliderMd_06,
      },
    ],
  },
  {
    path: "/children",
    slide: [
      {
        image: image_sliderMd_07,
      },
    ],
  },
];

const getSliderDesktopByPath = (path) => {
  const slide = [];
  SliderDesktop.filter((e) => {
    if (e.path === path) {
      slide.push(e);
    }
    return slide;
  });
  return slide[0].slide;
};

const dataSliderDesktop = {
  getSliderDesktopByPath,
};

const getSliderMdByPath = (path) => {
  const slide = [];
  SliderMd.filter((e) => {
    if (e.path === path) {
      slide.push(e);
    }
    return slide;
  });
  return slide[0].slide;
};

export const dataSliderMd = {
  getSliderMdByPath,
};

export default dataSliderDesktop;
